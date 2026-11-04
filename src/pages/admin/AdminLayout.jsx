import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext.jsx';

// O login só é carregado dentro da área administrativa
export default function AdminLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}