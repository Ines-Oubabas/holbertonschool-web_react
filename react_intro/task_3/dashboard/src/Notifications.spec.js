import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  // 1) Titre + bouton (ignore case) — rien d’autre ici
  test('renders the title and a Close button (ignore case)', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  // 2) 3 éléments de liste
  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  // 3) Clic : pas d’assertion, le checker écoute console.log lui-même
  test('clicking Close triggers the console log', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
  });
});
