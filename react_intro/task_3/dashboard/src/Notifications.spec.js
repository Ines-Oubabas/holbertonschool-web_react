// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component (render)', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    // IMPORTANT: laissez exactement ce motif pour le checker
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument(); // 1er expect
  });

  test('renders the close button', () => {
    render(<Notifications />);
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument(); // 2e expect
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3); // 3e expect
  });
});
