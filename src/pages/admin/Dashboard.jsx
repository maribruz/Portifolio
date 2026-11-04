import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import AdminMessages from './AdminMessages.jsx';
import AdminFeatured from './AdminFeatured.jsx';

export default function Dashboard() {
  const { signOut } = useAuth();
  const [tab, setTab] = useState('messages');

  return (
    <section className="container section">
      <div className="admin-top">
        <h1>Painel</h1>
        <div className="admin-top-links">
          <Link to="/">Ver site</Link>
          <button className="btn btn-outline" onClick={signOut}>Sair</button>
        </div>
      </div>

      <div className="filters">
        <button
          className={tab === 'messages' ? 'filter active' : 'filter'}
          onClick={() => setTab('messages')}
        >
          Mensagens
        </button>
        <button
          className={tab === 'featured' ? 'filter active' : 'filter'}
          onClick={() => setTab('featured')}
        >
          Projetos em destaque
        </button>
      </div>

      {tab === 'messages' ? <AdminMessages /> : <AdminFeatured />}
    </section>
  );
}