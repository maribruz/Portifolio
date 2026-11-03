// Cartão "fantasma" que aparece enquanto os projetos carregam
export default function ProjectSkeleton() {
  return (
    <div className="card skeleton">
      <div className="bar" />
      <div className="bar short" />
      <div className="bar" />
    </div>
  );
}