import { getWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, Sparkles, Activity, Heart } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    category: "Estética Dental",
    icon: <Sparkles className="service-category-icon" />,
    items: [
      { name: "Lentes de Contato Dental", desc: "Facetas ultrafinas de porcelana para um sorriso perfeitamente alinhado e branco." },
      { name: "Facetas em Resina", desc: "Transformação do sorriso em sessão única com resinas de alta performance." },
      { name: "Clareamento Dental", desc: "Técnicas avançadas (laser ou caseiro) para devolver a brancura natural aos dentes." },
      { name: "Planejamento Estético", desc: "Desenho digital do sorriso para previsibilidade total antes de qualquer intervenção." }
    ]
  },
  {
    category: "Reabilitação Oral",
    icon: <Activity className="service-category-icon" />,
    items: [
      { name: "Implantes Dentários", desc: "Substituição de dentes perdidos com segurança, devolvendo a função e a estética." },
      { name: "Prótese Dentária", desc: "Próteses fixas ou removíveis modernas, com aparência 100% natural." },
      { name: "Tratamento de Canal", desc: "Endodontia microscópica para salvar o dente com o máximo de conforto e sem dor." }
    ]
  },
  {
    category: "Prevenção & Cuidados",
    icon: <Heart className="service-category-icon" />,
    items: [
      { name: "Avaliação Odontológica", desc: "Check-up completo com câmera intraoral e diagnóstico preciso." },
      { name: "Limpeza Profissional", desc: "Profilaxia profunda para manter gengivas saudáveis e dentes livres de tártaro." },
      { name: "Odontologia Preventiva", desc: "Acompanhamento periódico focado em evitar problemas antes que eles ocorram." },
      { name: "Atendimento de Dor", desc: "Suporte acolhedor e resolutivo para emergências e dores agudas." }
    ]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Tratamentos Especializados</h2>
          <p className="services-subtitle">
            Combinamos tecnologia de ponta, materiais premium e técnica refinada para oferecer tratamentos seguros, duradouros e com resultados estéticos impecáveis.
          </p>
        </div>

        <div className="services-content">
          {servicesList.map((group, groupIndex) => (
            <div className="service-group" key={groupIndex}>
              <div className="service-group-header">
                {group.icon}
                <h3 className="service-group-title">{group.category}</h3>
              </div>
              <div className="service-items">
                {group.items.map((service, index) => (
                  <div className="service-item" key={index}>
                    <div className="service-item-info">
                      <h4 className="service-name">{service.name}</h4>
                      <p className="service-desc">{service.desc}</p>
                    </div>
                    <a 
                      href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre ${service.name}.`)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="service-link"
                      aria-label={`Saiba mais sobre ${service.name}`}
                    >
                      <span>Saber mais</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <a href={getWhatsAppLink('Olá! Gostaria de agendar uma avaliação inicial.')} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Agendar Avaliação Inicial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
