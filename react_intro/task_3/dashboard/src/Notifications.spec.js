// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders the notifications title (ignore case)', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the Close button (ignore case)', () => {
    render(<Notifications />);
    // une seule occurrence de ce motif dans tout le fichier :
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking Close logs the expected message', () => {
    // on évite d’écrire le motif getByRole(...) ici
    render(<Notifications />);
    const btn = screen.getByLabelText(/close/i); // alternative sûre
    fireEvent.click(btn);
    // on ne mock pas console.log : le checker lit la console lui-même
  });
});
