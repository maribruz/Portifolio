import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate.js';

export default function ProjectCard({ repo }) {
  return (
    <article className="card">
      <h3>
        <Link to={`/projetos/${repo.name}`}>{repo.name}</Link>
      </h3>
      <p className="soft">{repo.description || 'Sem descrição.'}</p>

      <p className="card-info">
        {repo.language && <span className="tag">{repo.language}</span>}
        <span className="soft">Atualizado em {formatDate(repo.updated_at)}</span>
      </p>

      <div className="card-links">
        <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer">Demonstração</a>
        )}
      </div>
    </article>
  );
}