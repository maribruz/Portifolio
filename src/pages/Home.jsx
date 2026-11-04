import { Link } from 'react-router-dom';
import { siteConfig, orPlaceholder } from '../utils/siteConfig.js';
import { useEffect, useState } from 'react';
import { useRepos } from '../hooks/useGithub.js';
import { getFeaturedNames } from '../services/featuredService.js';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import ProjectSkeleton from '../components/ui/ProjectSkeleton.jsx';

export default function Home() {
    const { repos, loading, error } = useRepos();
  const [featuredNames, setFeaturedNames] = useState([]);

  // Busca no Supabase os projetos escolhidos no painel
  useEffect(() => {
    getFeaturedNames().then(setFeaturedNames).catch(() => {});
  }, []);

  // Se nenhum foi escolhido, mostra os 3 mais recentes
  const chosen = repos.filter((repo) => featuredNames.includes(repo.name));
  const featured = chosen.length > 0 ? chosen : repos.slice(0, 3);

  return (
    <>
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

      <section className="container section">
        <h2>Projetos em destaque</h2>

        {error && <p className="soft">Não foi possível carregar os projetos agora.</p>}

        <div className="grid">
          {loading && [1, 2, 3].map((n) => <ProjectSkeleton key={n} />)}
          {!loading && !error && featured.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
        </div>

        {!loading && !error && repos.length === 0 && (
          <p className="soft">Nenhum projeto encontrado.</p>
        )}

        <br />
        <Link to="/projetos">Ver todos os projetos</Link>
      </section>
    </>
  );
}