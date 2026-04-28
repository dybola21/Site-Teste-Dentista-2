import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-icon"></span>
              <div className="logo-text">
                <strong>Aurora</strong>
                <span>Odontologia</span>
              </div>
            </div>
            <p className="footer-desc">
              Clínica odontológica de alto padrão focada em estética dental, implantes e reabilitação oral com excelência técnica e conforto absoluto.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Links Rápidos</h4>
            <ul>
              <li><a href="#sobre">Sobre a Clínica</a></li>
              <li><a href="#servicos">Nossos Tratamentos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#localizacao">Localização</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Horários</h4>
            <ul>
              <li>
                <Clock size={18} />
                <span><strong>Seg a Sex:</strong> 08h às 19h<br/><strong>Sábados:</strong> 08h às 13h</span>
              </li>
              <li>
                 <span style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Atendimento apenas com hora marcada</span>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contato</h4>
            <ul>
              <li>
                <MapPin size={18} />
                <span>Rua Barão do Triunfo, 245 — Sala 302<br/>Centro, Duque de Caxias — RJ</span>
              </li>
              <li>
                <Phone size={18} />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">+55 21 90000-0000</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:contato@clinicaauroraodontologia.com.br">contato@clinicaauroraodontologia.com.br</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clínica Aurora Odontologia. Todos os direitos reservados.</p>
          <div className="footer-legal">
            Responsável Técnico: Dr(a). Nome do Dentista - CRO-RJ 00000
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
