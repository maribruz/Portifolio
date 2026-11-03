import { useEffect, useState } from 'react';
import { getRepos, getRepo } from '../services/githubService.js';

// Carrega a lista de repositórios
export function useRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError('');
    getRepos()
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [attempt]);

  // retry: tenta carregar de novo
  return { repos, loading, error, retry: () => setAttempt(attempt + 1) };
}

// Carrega um repositório pelo nome
export function useRepo(name) {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError('');
    getRepo(name)
      .then(setRepo)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [name, attempt]);

  return { repo, loading, error, retry: () => setAttempt(attempt + 1) };
}