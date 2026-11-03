import { useState } from 'react';
import { useRepos } from '../hooks/useGithub.js';
import ProjectCard from '../components/ui/ProjectCard.jsx';
import ProjectSkeleton from '../components/ui/ProjectSkeleton.jsx';

export default function Projects() {
  const { repos, loading, error, retry } = useRepos();
  const [language, setLanguage] = useState('Todas');

  // Lista de linguagens sem repetir, para os filtros
  const languages = ['Todas', ...new Set(repos.map((r) => r.language).filter(Boolean))];

  const shown =
    language === 'Todas' ? repos : repos.filter((r) => r.language === language);

  return (
    <section className="container section">
      <h1>Projetos</h1>
      <p className="soft">Repositórios carregados automaticamente do GitHub.</p>

      {/* Erro */}
      {error && (
        <div className="message">
          <p>{error}</p>
          <button className="btn" onClick={retry}>Tentar novamente</button>
        </div>
      )}

      {/* Lista vazia */}
      {!loading && !error && repos.length === 0 && (
        <p className="soft">Nenhum projeto encontrado.</p>
      )}

      {/* Filtros por linguagem */}
      {!loading && !error && repos.length > 0 && (
        <div className="filters">
          {languages.map((lang) => (
            <button
              key={lang}
              className={lang === language ? 'filter active' : 'filter'}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}

      <div className="grid">
        {loading && [1, 2, 3, 4, 5, 6].map((n) => <ProjectSkeleton key={n} />)}
        {!loading && !error && shown.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
      </div>
    </section>
  );
}