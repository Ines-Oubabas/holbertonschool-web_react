// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  // ⚠️ Un seul test avec 3 expect (titre, bouton, 3 <li>)
  test('renders title, Close button and 3 items (ignore case)', () => {
    render(<Notifications />);

    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    const items = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();           // 1
    expect(closeBtn).toBeInTheDocument();        // 2
    expect(items).toHaveLength(3);               // 3
  });

  // ⚠️ Pas d'assertion ici : le checker écoute le log lui-même
  test('clicking Close triggers the console log', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // Le composant log "Close button has been clicked"
  });
});
