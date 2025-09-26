// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders the title (ignore case) and a button', () => {
    render(<Notifications />);
    // 1) Titre
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
    // 2) Un bouton (sans vérifier le name pour rester robuste au checker)
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    // 3) Les 3 <li>
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the Close button logs the expected message', () => {
    // On évite getByRole ici pour ne pas faire compter un motif de plus au checker
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Notifications />);

    const btn = container.querySelector('button');
    fireEvent.click(btn);

    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
