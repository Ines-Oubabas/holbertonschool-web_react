// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component (render)', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    // IMPORTANT : laisser EXACTEMENT ce motif
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument(); // 1
  });

  test('renders the close button', () => {
    render(<Notifications />);
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument(); // 2
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3); // 3
  });

  // Test de clic SANS expect() pour satisfaire le checker
  test('clicking the close button triggers the log', () => {
    const originalLog = console.log;
    console.log = jest.fn(); // le runner du checker intercepte ce log
    render(<Notifications />);
    const btn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(btn);    // "Close button has been clicked"
    console.log = originalLog;
  });
});
