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
};

// Se o valor estiver vazio, mostra [nome do campo]
export function orPlaceholder(value, label) {
  return value ? value : `[${label}]`;
}