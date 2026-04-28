import { Star } from 'lucide-react';
import './SocialProof.css';

const reviews = [
  {
    name: "Mariana Costa",
    text: "Atendimento impecável! Desde a recepção até a finalização do meu tratamento de lentes de contato. A Dra. me explicou cada detalhe, e o resultado ficou super natural. Super recomendo!",
    initial: "M",
    color: "#e8eaed"
  },
  {
    name: "Carlos Silva",
    text: "Fiz meus implantes aqui e perdi totalmente o medo de dentista. Clínica maravilhosa, equipamentos de última geração e nenhum desconforto durante o procedimento. Nota 1000.",
    initial: "C",
    color: "#fce8e6"
  },
  {
    name: "Fernanda Oliveira",
    text: "O melhor consultório de Caxias, sem dúvidas. Estão de parabéns pelo profissionalismo. É nítido o cuidado que têm com a biossegurança e com o conforto do paciente.",
    initial: "F",
    color: "#e6f4ea"
  }
];

const SocialProof = () => {
  return (
    <section className="section proof-section">
      <div className="container">
        <div className="proof-header">
          <div className="proof-badge">Avaliações do Google</div>
          <h2 className="proof-title">O que nossos pacientes dizem</h2>
          <div className="google-rating">
            <span className="rating-score">5.0</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#fbbc04" color="#fbbc04" />
              ))}
            </div>
            <span className="rating-count">Baseado em +100 avaliações</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <div className="review-avatar" style={{ backgroundColor: review.color }}>
                  {review.initial}
                </div>
                <div className="review-user">
                  <h4>{review.name}</h4>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#fbbc04" color="#fbbc04" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
