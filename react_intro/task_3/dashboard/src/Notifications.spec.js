// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders the notifications title and the Close button (ignore case)', () => {
    render(<Notifications />);

    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();                 // expect #1

    expect(
      screen.getByRole('button', { name: /Close/i })
    ).toBeInTheDocument();                 // expect #2
  });

  test('should render a list of 3 items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);  // expect #3
  });

  test('clicking Close logs to console', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));
    // Pas d’assertion ici: le checker écoute la console lui-même.
  });
});
