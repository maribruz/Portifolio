import { Link, useParams } from 'react-router-dom';
import { useRepo } from '../hooks/useGithub.js';
import { formatDate } from '../utils/formatDate.js';

export default function ProjectDetail() {
  // Pega o nome do repositório que está no endereço (/projetos/nome)
  const { repoName } = useParams();
  const { repo, loading, error, retry } = useRepo(repoName);

  if (loading) {
    return <p className="container section soft">Carregando...</p>;
  }

  if (error) {
    return (
      <section className="container section">
        <div className="message">
          <p>{error}</p>
          <button className="btn" onClick={retry}>Tentar novamente</button>
        </div>
        <Link to="/projetos">Voltar para projetos</Link>
      </section>
    );
  }

  return (
    <section className="container section">
      <h1>{repo.name}</h1>
      <p className="soft">{repo.description || 'Sem descrição.'}</p>

      <ul className="detail-list">
        <li>Linguagem: {repo.language || 'Não informada'}</li>
        <li>Criado em: {formatDate(repo.created_at)}</li>
        <li>Última atualização: {formatDate(repo.updated_at)}</li>
        <li>Estrelas: {repo.stargazers_count}</li>
      </ul>

      {repo.topics.length > 0 && (
        <p>
          {repo.topics.map((topic) => (
            <span key={topic} className="tag">{topic}</span>
          ))}
        </p>
      )}

      <div className="hero-buttons">
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn">
          Ver no GitHub
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn btn-outline">
            Ver demonstração
          </a>
        )}
      </div>
      <br />
      <Link to="/projetos">Voltar para projetos</Link>
    </section>
  );
}