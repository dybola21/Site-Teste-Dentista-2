import { getWhatsAppLink } from '../../utils/whatsapp';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="section cta-section">
      <div className="container cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para transformar seu sorriso com segurança e conforto?</h2>
          <p className="cta-subtitle">
            Agende uma avaliação na Clínica Aurora e descubra o plano de tratamento ideal para você. 
            Nossa equipe está pronta para recebê-lo com atendimento exclusivo e sem pressa.
          </p>
          <div className="cta-actions">
            <a 
              href={getWhatsAppLink('Olá! Gostaria de agendar minha avaliação odontológica.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-accent"
            >
              Agendar Avaliação pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
