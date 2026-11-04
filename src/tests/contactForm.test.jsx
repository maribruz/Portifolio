import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Contact from '../pages/Contact.jsx';
import { saveMessage } from '../services/messageService.js';

// Troca os serviços por versões falsas: o teste não envia nada de verdade
vi.mock('../services/emailService.js', () => ({ sendContactEmail: vi.fn() }));
vi.mock('../services/messageService.js', () => ({ saveMessage: vi.fn() }));

describe('Validação do formulário de contato', () => {
  it('mostra um erro específico em cada campo vazio', async () => {
    render(<Contact />);
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(screen.getByText('Informe seu nome.')).toBeInTheDocument();
    expect(screen.getByText('Informe seu e-mail.')).toBeInTheDocument();
    expect(screen.getByText('Informe o assunto.')).toBeInTheDocument();
    expect(screen.getByText('Escreva sua mensagem.')).toBeInTheDocument();
  });

  it('mostra erro quando o e-mail é inválido', async () => {
    render(<Contact />);
    await userEvent.type(screen.getByLabelText('E-mail'), 'abc');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(screen.getByText('Digite um e-mail válido.')).toBeInTheDocument();
  });

  it('não envia a mensagem quando há erros', async () => {
    render(<Contact />);
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(saveMessage).not.toHaveBeenCalled();
  });
});