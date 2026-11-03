import { siteConfig } from '../utils/siteConfig.js';

export default function Skills() {
  // Object.entries transforma o objeto em uma lista: [categoria, habilidades]
  const categories = Object.entries(siteConfig.skills);

  return (
    <section className="container section">
      <h1>Habilidades</h1>
      <p className="soft">Tecnologias e ferramentas que utilizo.</p>

      <div className="grid">
        {categories.map(([category, items]) => (
          <div className="card" key={category}>
            <h3>{category}</h3>

            {items.length === 0 ? (
              <p className="soft">[Preencher]</p>
            ) : (
              <ul className="skill-list">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}