import { supabase } from './supabase.js';

// Salva a mensagem do formulário
export async function saveMessage({ name, email, subject, message }) {
  const { error } = await supabase.from('messages').insert({ name, email, subject, message });
  if (error) throw error;
}

// Lista as mensagens (mais novas primeiro) - só funciona logado
export async function getMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

// Marca ou desmarca como respondida
export async function setReplied(id, replied) {
  const { error } = await supabase.from('messages').update({ replied }).eq('id', id);
  if (error) throw error;
}