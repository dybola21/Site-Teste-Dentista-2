import { getWhatsAppLink } from '../../utils/whatsapp';
import './Hero.css';
import heroImage from '../../assets/hero_clinic_bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Odontologia estética e reabilitação oral com planejamento personalizado.
          </h1>
          <p className="hero-subtitle">
            Atendimento em Duque de Caxias para quem busca conforto, previsibilidade e cuidado em cada etapa do tratamento.
          </p>
          <div className="hero-actions">
            <a href={getWhatsAppLink('Olá! Gostaria de agendar uma avaliação odontológica.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar Minha Avaliação
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conhecer Tratamentos
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src={heroImage} 
              alt="Consultório odontológico moderno e sofisticado da Clínica Aurora" 
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
