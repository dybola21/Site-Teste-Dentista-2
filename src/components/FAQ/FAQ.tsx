import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqList = [
  {
    question: "O planejamento estético do sorriso é previsível?",
    answer: "Sim. Utilizamos um planejamento digital avançado que permite prever exatamente como ficará o seu sorriso antes mesmo de iniciarmos qualquer procedimento, garantindo segurança e satisfação."
  },
  {
    question: "Atendem casos de dor e emergência?",
    answer: "Sim, reservamos horários estratégicos em nossa agenda para atender urgências e casos de dor com rapidez, conforto e eficiência."
  },
  {
    question: "Vocês atendem convênios odontológicos?",
    answer: "Trabalhamos de forma particular para garantir um atendimento de alto padrão, sem pressa e utilizando os melhores materiais do mercado. Fornecemos toda a documentação necessária para que você solicite o reembolso junto ao seu convênio, caso ele ofereça essa opção."
  },
  {
    question: "Os implantes dentários doem?",
    answer: "Não. O procedimento é realizado com anestesia local de alta eficácia, e as técnicas modernas tornam o pós-operatório muito tranquilo. Prescrevemos medicação adequada para garantir seu total conforto."
  },
  {
    question: "Qual a diferença entre facetas e lentes de contato?",
    answer: "Ambas são soluções fantásticas. A principal diferença é a espessura da peça e a necessidade de preparo do dente. As lentes são ultrafinas (necessitam de mínimo ou nenhum desgaste), enquanto as facetas são indicadas para alterações mais significativas de cor ou formato. O dentista avaliará a melhor indicação para o seu caso."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section">
      <div className="container faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Dúvidas Frequentes</h2>
          <p className="faq-subtitle">
            Transparência desde o primeiro contato. Respondemos às dúvidas mais comuns de nossos pacientes.
          </p>
        </div>

        <div className="faq-list">
          {faqList.map((faq, index) => (
            <div 
              className={`faq-item ${openIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ maxHeight: openIndex === index ? '300px' : '0' }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
