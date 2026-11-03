import { siteConfig, orPlaceholder } from '../../utils/siteConfig.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-bar">
        <p>© {new Date().getFullYear()} {orPlaceholder(siteConfig.name, 'Seu nome')}</p>
        <div className="social">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
          {siteConfig.linkedin && (
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>E-mail</a>}
        </div>
      </div>
    </footer>
  );
}