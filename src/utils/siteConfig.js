// Seus dados ficam aqui. Campo vazio aparece como [placeholder] na tela.
export const siteConfig = {
  name: '',
  role: '',
  tagline: '',
  about: '',
  photo: '',
  email: '',
  linkedin: '',
  github: 'https://github.com/maribruz',
  githubUser: 'maribruz',

  // Sobre mim
  education: '',
  institution: '',
  interests: '',
  goals: '',

  // Linha do tempo (acadêmica e profissional). Exemplo de item:
  // { period: '2024', title: 'Nome do curso ou cargo', place: 'Instituição ou empresa' }
  timeline: [],

  // Habilidades: escreva os nomes dentro dos colchetes. Exemplo: ['JavaScript', 'Python']
  skills: {
    'Linguagens de programação': [],
    'Front-end': [],
    'Back-end': [],
    'Banco de dados': [],
    Ferramentas: [],
    'Outras habilidades': [],
  },
};

// Se o valor estiver vazio, mostra [nome do campo]
export function orPlaceholder(value, label) {
  return value ? value : `[${label}]`;
}