import { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, MessageSquareText } from 'lucide-react';
import './ChatAgent.css';

interface Message {
  id: string;
  type: 'agent' | 'user';
  text: string;
}

const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const getSessionData = () => {
  const stored = localStorage.getItem('dr_ia_session');
  if (stored) {
    try {
      const data = JSON.parse(stored);
      const now = new Date().getTime();
      if (now - data.timestamp < 24 * 60 * 60 * 1000) {
        return { id: data.id, isNew: false };
      }
    } catch (e) {
      // JSON parse error, ignore and create new
    }
  }
  const newId = generateSessionId();
  localStorage.setItem('dr_ia_session', JSON.stringify({
    id: newId,
    timestamp: new Date().getTime()
  }));
  return { id: newId, isNew: true };
};

const WEBHOOK_URL = 'https://italotrindade.app.n8n.cloud/webhook/8aecbedc-aaa4-49f9-b206-6b335ce6fae1';

const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sessionData = getSessionData();
    setSessionId(sessionData.id);

    if (sessionData.isNew) {
      const initialMsgs: Message[] = [{ id: '1', type: 'agent', text: 'Olá, como posso te ajudar?' }];
      setMessages(initialMsgs);
      localStorage.setItem('dr_ia_messages', JSON.stringify(initialMsgs));
    } else {
      const savedMessages = localStorage.getItem('dr_ia_messages');
      if (savedMessages) {
        try {
          setMessages(JSON.parse(savedMessages));
        } catch (e) {
          setMessages([{ id: '1', type: 'agent', text: 'Olá, como posso te ajudar?' }]);
        }
      } else {
        setMessages([{ id: '1', type: 'agent', text: 'Olá, como posso te ajudar?' }]);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('dr_ia_messages', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message to UI
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            text: userText,
            session_id: sessionId
          }
        ])
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Handle the output from N8N
      const agentMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        type: 'agent', 
        text: data.output || 'Desculpe, não consegui entender. Poderia tentar novamente?' 
      };
      setMessages(prev => [...prev, agentMsg]);
      
    } catch (error) {
      console.error('Error sending message to Dr I.A:', error);
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        type: 'agent', 
        text: 'Desculpe, estou com problemas de conexão no momento. Por favor, tente falar conosco pelo WhatsApp.' 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessageText = (text: string) => {
    if (!text) return null;

    // Converte tags HTML <a> enviadas pelo N8N para formato Markdown [texto](url)
    // Permissivo para pegar quebras de linha e propriedades aleatórias no meio da tag HTML
    const htmlRegex = /<a[\s\S]*?href=["'](.*?)["'][\s\S]*?>(.*?)<\/a>/gi;
    const normalizedText = text.replace(htmlRegex, '[$2]($1)');

    const linkRegex = /\[([\s\S]*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(normalizedText)) !== null) {
      if (match.index > lastIndex) {
        parts.push(normalizedText.substring(lastIndex, match.index));
      }
      parts.push({
        type: 'link',
        text: match[1].trim(), // limpa espaços extras
        url: match[2].trim(),
        key: match.index
      });
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < normalizedText.length) {
      parts.push(normalizedText.substring(lastIndex));
    }

    return parts.map((part, index) => {
      if (typeof part === 'string') {
        // Remove outras tags HTML residuais (como <p>, <b>, etc) que o n8n possa estar enviando
        const cleanStr = part.replace(/<\/?[^>]+(>|$)/g, "");
        
        return (
          <span key={`text-${index}`}>
            {cleanStr.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </span>
        );
      } else {
        return (
          <a 
            key={`link-${part.key}`} 
            href={part.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary chat-agent-action-btn"
          >
            {part.text}
          </a>
        );
      }
    });
  };

  return (
    <div className="chat-agent-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="agent-avatar">
                <Bot size={20} />
              </div>
              <div className="agent-title">
                <h4>Dr I.A</h4>
                <span>Agente Virtual Clínica Aurora</span>
              </div>
            </div>
            <button className="close-chat-btn" onClick={toggleChat} aria-label="Fechar chat">
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.type}`}>
                {msg.type === 'agent' && (
                  <div className="chat-message-avatar">
                    <Bot size={14} />
                  </div>
                )}
                <div className={`chat-bubble ${msg.type}`}>
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="chat-message-row agent">
                <div className="chat-message-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble agent loading">
                  <div className="dot-typing"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={sendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
              className="chat-input"
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              disabled={isLoading || !inputValue.trim()}
              aria-label="Enviar mensagem"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleChat}
        aria-label="Falar com Dr I.A"
      >
        <MessageSquareText size={28} />
      </button>
    </div>
  );
};

export default ChatAgent;
