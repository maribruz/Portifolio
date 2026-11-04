export const siteConfig = {
  name: 'Mariana Bruzadim',
  role: 'Estudande de Engenharia de Software',
  tagline: 'Transformo ideias em sites e aplicações modernas, com código organizado e design cuidadoso.',
  about: 'Sou estudante de Engenharia de Software na FIAP e gosto de back-end e inteligência artificial. Também gosto de gerir projetos e de ajudar na criação de coisas novas.',
  photo: 'https://instagram.fcgh10-1.fna.fbcdn.net/v/t51.82787-19/800696946_18128377609748525_8332662467322942009_n.jpg?_nc_cat=107&ig_cache_key=GHKquS8tgMjTqWdAADmSA55dkKNzbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=PJW-Y47TWosQ7kNvwFhXABP&_nc_oc=Adr2RjXZvUZihqV4OLXu9c6YVBOKGCWF0MMy3Lp2M42hKVI_7DOYaIO3_9drxgaJhWimo3iK5_wRms15HgIkaocC&_nc_zt=24&_nc_ht=instagram.fcgh10-1.fna&_nc_gid=DTn4twQ6IdWCknWKqpBaAA&_nc_ss=7b6a8&oh=00_AQSsZnk4FzN10by3cYW_8OjWAIWnW9d53Mt7OQwi0bTkmw&oe=6AF077E3',
  email: 'marianabruzadim07@gmail.com',
  linkedin: '',
  github: 'https://github.com/maribruz',
  githubUser: 'maribruz',

  // Sobre mim
  education: 'Engenharia de Software',
  institution: 'FIAP',
  interests: 'Back-end e inteligência artificial.',
  goals: 'Gerir projetos e ajudar na criação de coisas novas.',

timeline: [{ period: '2026 - atual', title: 'Engenharia de Software', place: 'FIAP' }],

  skills:{
    'Linguagens de programação': ['JavaScript', 'HTML', 'CSS', 'SQL'],
    'Front-end': ['React', 'React Router', 'Vite'],
    'Back-end': ['Supabase (autenticação e API)'],
    'Banco de dados': ['PostgreSQL (Supabase)'],
    Ferramentas: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Vitest', 'EmailJS'],
    'Outras habilidades': ['Gestão de projetos'],
  },
};

export function orPlaceholder(value, label) {
  return value ? value : `[${label}]`;
}