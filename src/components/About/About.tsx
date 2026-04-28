import { getWhatsAppLink } from '../../utils/whatsapp';
import './About.css';
import aboutImage from '../../assets/about_dentist.png';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section about-section">
      <div className="container about-container">
        
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <img 
              src={aboutImage} 
              alt="Especialista da Clínica Aurora" 
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-title">Cuidado humanizado e excelência odontológica</h2>
          <p className="about-text">
            Na Clínica Aurora, acreditamos que a odontologia vai muito além dos dentes. É sobre devolver confiança, segurança e qualidade de vida aos nossos pacientes.
          </p>
          <p className="about-text">
            Nosso espaço em Duque de Caxias foi pensado para oferecer uma experiência confortável e acolhedora. Aqui, não há pressa. Cada consulta é uma oportunidade de ouvir você, entender suas necessidades e criar um planejamento estético e funcional sob medida.
          </p>
          
          <div className="about-features">
            <div className="about-feature">
              <Clock className="feature-icon" />
              <div className="feature-text">
                <strong>Atendimento com hora marcada</strong>
                <span>Sem esperas prolongadas</span>
              </div>
            </div>
            
            <div className="about-feature">
              <ShieldCheck className="feature-icon" />
              <div className="feature-text">
                <strong>Clareza em cada passo</strong>
                <span>Explicação detalhada dos procedimentos</span>
              </div>
            </div>

            <div className="about-feature">
              <MapPin className="feature-icon" />
              <div className="feature-text">
                <strong>Localização Estratégica</strong>
                <span>Fácil acesso no Centro de Duque de Caxias</span>
              </div>
            </div>
          </div>

          <div className="professional-profile mt-6">
            <h3 className="professional-heading">Quem irá te atender</h3>
            <div className="professional-info">
              <p className="professional-name">Dra. Nome da Dentista</p>
              <p className="professional-cro">CRO-RJ 00000</p>
            </div>
            <p className="professional-bio">
              Especialista em Reabilitação Oral e Odontologia Estética. Tem como missão transformar sorrisos com previsibilidade e segurança, unindo técnica refinada a um atendimento exclusivo e acolhedor.
            </p>
          </div>

          <a href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da Clínica Aurora.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
            Falar com um Especialista
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
