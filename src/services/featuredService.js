import { supabase } from './supabase.js';

// Nomes dos repositórios escolhidos como destaque
export async function getFeaturedNames() {
  const { data, error } = await supabase.from('featured_projects').select('repo_name');
  if (error) throw error;
  return data.map((row) => row.repo_name);
}

export async function addFeatured(name) {
  const { error } = await supabase.from('featured_projects').insert({ repo_name: name });
  if (error) throw error;
}

export async function removeFeatured(name) {
  const { error } = await supabase.from('featured_projects').delete().eq('repo_name', name);
  if (error) throw error;
}