import { createClient } from '@supabase/supabase-js';

// Conexão com o Supabase (as chaves vêm do .env.local)
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);