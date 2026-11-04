import { useState } from 'react';
import { validateContact } from '../utils/validateContact.js';
import { sendContactEmail } from '../services/emailService.js';
import { saveMessage } from '../services/messageService.js';
import { siteConfig } from '../utils/siteConfig.js';

const empty = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(''); // '', 'success' ou 'error'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 1. Valida os campos
    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // 2. Salva no Supabase e envia o e-mail ao mesmo tempo
    setSending(true);
    setStatus('');
    const results = await Promise.allSettled([saveMessage(form), sendContactEmail(form)]);
    setSending(false);

    // Deu certo se pelo menos um dos dois funcionou
    const ok = results.some((r) => r.status === 'fulfilled');
    if (ok) {
      setStatus('success');
      setForm(empty);
    } else {
      setStatus('error');
    }
  }

  return (
    <section className="container section">
      <h1>Contato</h1>
      <p className="soft">Envie uma mensagem e eu respondo por e-mail.</p>

      <form onSubmit={handleSubmit} noValidate className="form">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="subject">Assunto</label>
        <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
        {errors.subject && <span className="error">{errors.subject}</span>}

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btn" type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {status === 'success' && <p className="success">Mensagem enviada com sucesso!</p>}
        {status === 'error' && (
          <p className="error">Não foi possível enviar. Tente novamente em instantes.</p>
        )}
      </form>

      <h2>Outros contatos</h2>
      <p>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
        {' · '}
        {siteConfig.linkedin ? (
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        ) : (
          <span className="soft">[LinkedIn]</span>
        )}
        {' · '}
        {siteConfig.email ? (
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        ) : (
          <span className="soft">[E-mail]</span>
        )}
      </p>
    </section>
  );
}