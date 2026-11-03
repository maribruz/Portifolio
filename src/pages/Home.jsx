import { Link } from 'react-router-dom';
import { siteConfig, orPlaceholder } from '../utils/siteConfig.js';

export default function Home() {
  return (
    <section className="container section hero">
      <div>
        <p className="soft">{orPlaceholder(siteConfig.role, 'Cargo ou área de atuação')}</p>
        <h1>{orPlaceholder(siteConfig.name, 'Seu nome')}</h1>
        <p>{orPlaceholder(siteConfig.tagline, 'Frase de apresentação')}</p>
        <p className="soft">{orPlaceholder(siteConfig.about, 'Pequena descrição sobre você')}</p>

        <div className="hero-buttons">
          <Link to="/projetos" className="btn">Ver projetos</Link>
          <Link to="/contato" className="btn btn-outline">Entrar em contato</Link>
        </div>
      </div>

      <div className="photo">
        {siteConfig.photo ? (
          <img src={siteConfig.photo} alt={`Foto de ${siteConfig.name}`} />
        ) : (
          <span className="soft">[Foto]</span>
        )}
      </div>
    </section>
  );
}