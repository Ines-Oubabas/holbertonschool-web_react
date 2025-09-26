// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders the title (ignore case) and a button', () => {
    render(<Notifications />);
    // Titre — insensible à la casse
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
    // Bouton — on vérifie juste qu’un bouton est présent (pas de name)
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the Close button logs the expected message', () => {
    // Ici on DOIT vérifier explicitement le log
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);

    fireEvent.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
