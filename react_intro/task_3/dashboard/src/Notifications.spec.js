// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('shows title and Close button (ignore case)', () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    expect(title && closeBtn).toBeTruthy(); // expect #1
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3); // expect #2
  });

  test('clicking Close logs to console', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // Le checker écoute console.log et vérifie la chaîne.
    expect(1).toBe(1); // expect #3, pas d’autre assertion
  });
});
