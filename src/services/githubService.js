import { siteConfig } from '../utils/siteConfig.js';

const API = 'https://api.github.com';
const CACHE_TIME = 10 * 60 * 1000; // 10 minutos

// Busca no GitHub e guarda a resposta no navegador (cache)
// para não repetir a requisição
async function fetchWithCache(url) {
  const saved = sessionStorage.getItem(url);
  if (saved) {
    const { time, data } = JSON.parse(saved);
    if (Date.now() - time < CACHE_TIME) return data;
  }

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('Sem conexão com a internet. Verifique e tente novamente.');
  }

  // 403 ou 429 = limite de requisições da API do GitHub
  if (response.status === 403 || response.status === 429) {
    throw new Error('Limite de requisições do GitHub atingido. Tente em alguns minutos.');
  }
  if (response.status === 404) throw new Error('Projeto não encontrado.');
  if (!response.ok) throw new Error('Não foi possível carregar os dados do GitHub.');

  const data = await response.json();
  sessionStorage.setItem(url, JSON.stringify({ time: Date.now(), data }));
  return data;
}

// Lista de repositórios (sem forks), do mais recente para o mais antigo
export async function getRepos() {
  const repos = await fetchWithCache(
    `${API}/users/${siteConfig.githubUser}/repos?sort=updated&per_page=100`,
  );
  return repos.filter((repo) => !repo.fork);
}

// Um repositório só
export function getRepo(name) {
  return fetchWithCache(`${API}/repos/${siteConfig.githubUser}/${name}`);
}