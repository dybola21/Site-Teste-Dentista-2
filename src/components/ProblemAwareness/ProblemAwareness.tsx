import './ProblemAwareness.css';

const problems = [
  {
    title: "Insatisfação com a Estética do Sorriso",
    description: "Dentes amarelados, desalinhados ou desgastados que afetam sua autoestima e confiança ao sorrir ou falar em público."
  },
  {
    title: "Dificuldade na Mastigação e Dores",
    description: "Desconforto ao comer alimentos específicos devido à ausência de dentes, próteses mal adaptadas ou problemas de oclusão."
  },
  {
    title: "Medo ou Ansiedade do Dentista",
    description: "Traumas de tratamentos anteriores que fazem você adiar os cuidados com a saúde bucal e piorar o quadro clínico."
  },
  {
    title: "Falta de Tempo e Previsibilidade",
    description: "Rotina corrida que exige tratamentos planejados, pontualidade no atendimento e resultados duradouros sem imprevistos."
  }
];

const ProblemAwareness = () => {
  return (
    <section className="section problem-section">
      <div className="container">
        <div className="problem-header">
          <h2 className="problem-title">Sabemos o que você procura</h2>
          <p className="problem-subtitle">
            Muitos pacientes chegam à Clínica Aurora buscando mais do que apenas tratamentos odontológicos. Eles buscam segurança, conforto e previsibilidade.
          </p>
        </div>

        <div className="problem-list">
          {problems.map((item, index) => (
            <div className="problem-item" key={index}>
              <div className="problem-item-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="problem-item-content">
                <h3 className="problem-item-title">{item.title}</h3>
                <p className="problem-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;
