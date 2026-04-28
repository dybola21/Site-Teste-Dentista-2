import { MapPin, Clock, Navigation } from 'lucide-react';
import './Location.css';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Location = () => {
  return (
    <section id="localizacao" className="section location-section">
      <div className="container location-container">
        
        <div className="location-info">
          <h2 className="location-title">Atendimento e Localização</h2>
          <p className="location-subtitle">
            Estamos no coração de Duque de Caxias, com estrutura premium e fácil acesso para as regiões centrais e vizinhas.
          </p>

          <div className="info-blocks">
            <div className="info-block">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Onde estamos</h3>
                <p>Rua Barão do Triunfo, 245 — Sala 302</p>
                <p>Centro, Duque de Caxias — RJ</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a sexta: 08h às 19h</p>
                <p>Sábado: 08h às 13h</p>
                <p className="closed-text">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="location-actions">
            <a 
              href="https://maps.google.com/?q=Rua+Barão+do+Triunfo+245+Centro+Duque+de+Caxias+RJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <Navigation size={18} />
              Como Chegar
            </a>
            <a 
              href={getWhatsAppLink('Olá! Gostaria de saber como chego à clínica.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="location-map">
          {/* Embed Google Maps or use an elegant map placeholder */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8144211158525!2d-43.309071024699264!3d-22.78458713292434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bb320146039%3A0x861c8c5c7d0d0eb3!2sR.%20Bar%C3%A3o%20do%20Triunfo%2C%20245%20-%20Centro%2C%20Duque%20de%20Caxias%20-%20RJ%2C%2025020-000!5e0!3m2!1spt-BR!2sbr!4v1714088921204!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica Aurora"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;
