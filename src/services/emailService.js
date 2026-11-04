import emailjs from '@emailjs/browser';

// Envia o e-mail pelo EmailJS. Os nomes (name, email, title...) são os do template.
export function sendContactEmail({ name, email, subject, message }) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name,
      email,
      title: subject,
      message,
      time: new Date().toLocaleString('pt-BR'),
    },
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
  );
}