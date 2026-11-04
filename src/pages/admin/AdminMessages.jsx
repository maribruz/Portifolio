import { useEffect, useState } from 'react';
import { getMessages, setReplied } from '../../services/messageService.js';

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMessages()
      .then(setMessages)
      .catch(() => setError('Não foi possível carregar as mensagens.'))
      .finally(() => setLoading(false));
  }, []);

  async function toggleReplied(message) {
    try {
      await setReplied(message.id, !message.replied);
      // Atualiza só essa mensagem na tela
      setMessages(
        messages.map((m) => (m.id === message.id ? { ...m, replied: !m.replied } : m)),
      );
    } catch {
      setError('Não foi possível atualizar a mensagem.');
    }
  }

  if (loading) return <p className="soft">Carregando mensagens...</p>;
  if (error) return <p className="error">{error}</p>;
  if (messages.length === 0) return <p className="soft">Nenhuma mensagem recebida.</p>;

  return (
    <div className="messages">
      {messages.map((m) => (
        <article className="card" key={m.id}>
          <h3>{m.subject}</h3>
          <p className="soft">
            {m.name} ({m.email}) · {new Date(m.created_at).toLocaleString('pt-BR')}
          </p>
          <p>{m.message}</p>
          <button className="btn btn-outline" onClick={() => toggleReplied(m)}>
            {m.replied ? 'Respondida (desfazer)' : 'Marcar como respondida'}
          </button>
        </article>
      ))}
    </div>
  );
}