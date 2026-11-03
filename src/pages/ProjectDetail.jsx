import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  // Pega o nome do repositório que está no endereço (/projetos/nome)
  const { repoName } = useParams();

  return (
    <section className="container section">
      <h1>{repoName}</h1>
      <p className="soft">Os detalhes virão do GitHub na Etapa 3.</p>
      <Link to="/projetos">Voltar para projetos</Link>
    </section>
  );
}
