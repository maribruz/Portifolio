// Confere cada campo e devolve um objeto só com os erros
export function validateContact({ name, email, subject, message }) {
  const errors = {};

  if (!name.trim()) errors.name = 'Informe seu nome.';
  else if (name.trim().length < 2) errors.name = 'O nome deve ter pelo menos 2 letras.';

  if (!email.trim()) errors.email = 'Informe seu e-mail.';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Digite um e-mail válido.';

  if (!subject.trim()) errors.subject = 'Informe o assunto.';

  if (!message.trim()) errors.message = 'Escreva sua mensagem.';
  else if (message.trim().length < 10)
    errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';

  return errors;
}