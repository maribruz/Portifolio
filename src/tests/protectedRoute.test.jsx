import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import { useAuth } from '../hooks/useAuth.js';

// Troca o login real por um falso, para controlarmos se há usuário ou não
vi.mock('../hooks/useAuth.js', () => ({ useAuth: vi.fn() }));

function renderAdmin() {
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route path="/admin/login" element={<p>Tela de login</p>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<p>Painel secreto</p>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe('Proteção do dashboard', () => {
  it('manda para o login quando não está autenticado', () => {
    useAuth.mockReturnValue({ session: null, loading: false });
    renderAdmin();

    expect(screen.getByText('Tela de login')).toBeInTheDocument();
    expect(screen.queryByText('Painel secreto')).not.toBeInTheDocument();
  });

  it('mostra o painel quando está autenticado', () => {
    useAuth.mockReturnValue({ session: { user: {} }, loading: false });
    renderAdmin();

    expect(screen.getByText('Painel secreto')).toBeInTheDocument();
  });
});