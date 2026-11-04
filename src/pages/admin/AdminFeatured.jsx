import { useEffect, useState } from 'react';
import { useRepos } from '../../hooks/useGithub.js';
import { getFeaturedNames, addFeatured, removeFeatured } from '../../services/featuredService.js';

export default function AdminFeatured() {
  const { repos, loading, error } = useRepos();
  const [featured, setFeatured] = useState([]);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    getFeaturedNames().then(setFeatured).catch(() => setSaveError('Erro ao carregar destaques.'));
  }, []);

  async function toggle(name) {
    setSaveError('');
    try {
      if (featured.includes(name)) {
        await removeFeatured(name);
        setFeatured(featured.filter((n) => n !== name));
      } else {
        await addFeatured(name);
        setFeatured([...featured, name]);
      }
    } catch {
      setSaveError('Não foi possível salvar. Tente novamente.');
    }
  }

  if (loading) return <p className="soft">Carregando projetos...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <p className="soft">Marque os projetos que aparecem na página inicial.</p>
      {saveError && <p className="error">{saveError}</p>}

      <ul className="check-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <label>
              <input
                type="checkbox"
                checked={featured.includes(repo.name)}
                onChange={() => toggle(repo.name)}
              />
              {repo.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}