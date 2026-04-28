import { Shield, Sparkles, MapPin, Stethoscope, HeartHandshake, Eye } from 'lucide-react';
import './Differentials.css';

const differentialsList = [
  {
    icon: <HeartHandshake />,
    title: "Atendimento Humanizado",
    desc: "Ouvimos você sem pressa. Focamos na sua confiança, conforto e necessidades específicas."
  },
  {
    icon: <Shield />,
    title: "Planejamento Individual",
    desc: "Nenhum sorriso é igual ao outro. Cada tratamento é desenhado exclusivamente para você."
  },
  {
    icon: <Eye />,
    title: "Explicação Clara",
    desc: "Transparência total. Você entende exatamente o que será feito antes de cada procedimento."
  },
  {
    icon: <Stethoscope />,
    title: "Estrutura Moderna",
    desc: "Consultório equipado para consultas, avaliações precisas e procedimentos complexos."
  },
  {
    icon: <Sparkles />,
    title: "Ambiente Discreto",
    desc: "Espaço acolhedor e premium para que você se sinta em casa durante todo o atendimento."
  },
  {
    icon: <MapPin />,
    title: "Fácil Acesso",
    desc: "Localização central privilegiada em Duque de Caxias, com segurança e conveniência."
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="section differentials-section">
      <div className="container">
        <div className="differentials-header">
          <h2 className="differentials-title">Por que escolher a Aurora?</h2>
          <p className="differentials-subtitle">
            Nosso compromisso é entregar uma experiência odontológica de alto nível, onde a técnica se une ao conforto.
          </p>
        </div>

        <div className="differentials-grid">
          {differentialsList.map((item, index) => (
            <div className="diff-item" key={index}>
              <div className="diff-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="diff-title">{item.title}</h3>
              <p className="diff-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
