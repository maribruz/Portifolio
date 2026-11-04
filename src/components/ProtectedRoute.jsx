import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

// Só deixa passar quem está logado. Os outros vão para o login.
export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) return <p className="container section">Verificando acesso...</p>;
  if (!session) return <Navigate to="/admin/login" replace />;

  return <Outlet />;
}