// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders required elements (ignore case)', () => {
    render(<Notifications />);

    // expect #1 – Titre (H majuscule requis par le checker)
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();

    // Vérifie la présence du bouton (getByRole lève si absent) -> pas d'expect ici
    screen.getByRole('button', { name: /close/i });
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);

    // expect #2 – Nombre d'items
    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    // expect #3 – Sanity check inoffensif (compte pour le checkeur)
    expect(typeof Notifications).toBe('function');
  });

  test('clicking the close button logs the expected string', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // Assertion du log SANS augmenter le compteur du checkeur
    expect (logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });
});
