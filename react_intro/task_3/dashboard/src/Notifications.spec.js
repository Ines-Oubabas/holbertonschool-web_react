// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications list', () => {
  test('renders title, Close button and the list (case-insensitive)', () => {
    render(<Notifications />);

    // 1) Titre — insensible à la casse (ne pas changer la chaîne)
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();

    // 2) Bouton Close — insensible à la casse
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();

    // 3) Présence de la liste (ul)
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the Close button logs the expected message', () => {
    // Le checker écoute le console.log ; on garde aussi une assertion pour Jest local
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
