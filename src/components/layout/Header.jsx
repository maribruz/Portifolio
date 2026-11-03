import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import { siteConfig, orPlaceholder } from '../../utils/siteConfig.js';

export default function Header() {
  // Controla se o menu do celular está aberto
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-bar">
        <Link to="/" className="brand">
          {orPlaceholder(siteConfig.name, 'Seu nome')}
        </Link>

        <nav className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}