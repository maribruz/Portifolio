import { siteConfig, orPlaceholder } from '../utils/siteConfig.js';

export default function About() {
  const { about, education, institution, interests, goals, timeline } = siteConfig;

  return (
    <section className="container section">
      <h1>Sobre mim</h1>
      <p className="soft">{orPlaceholder(about, 'Apresentação pessoal')}</p>

      <div className="info-grid">
        <div className="card">
          <h3>Formação acadêmica</h3>
          <p>{orPlaceholder(education, 'Formação')}</p>
          <p className="soft">{orPlaceholder(institution, 'Instituição')}</p>
        </div>
        <div className="card">
          <h3>Interesses na tecnologia</h3>
          <p>{orPlaceholder(interests, 'Interesses')}</p>
        </div>
        <div className="card">
          <h3>Objetivos profissionais</h3>
          <p>{orPlaceholder(goals, 'Objetivos')}</p>
        </div>
      </div>

      <h2>Minha trajetória</h2>
      <div className="timeline">
        {timeline.length === 0 && (
          <div className="timeline-item">
            <span className="soft">[Período]</span>
            <h3>[Cargo ou curso]</h3>
            <p className="soft">[Empresa ou instituição]</p>
          </div>
        )}

        {timeline.map((item) => (
          <div className="timeline-item" key={item.title + item.period}>
            <span className="soft">{item.period}</span>
            <h3>{item.title}</h3>
            <p className="soft">{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}