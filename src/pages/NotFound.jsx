import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container section not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p className="soft">O endereço não existe ou foi movido.</p>
      <br />
      <Link to="/" className="btn">Voltar ao início</Link>
    </section>
  );
}