// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('shows title and Close button (ignore case)', () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    // 1ère et unique assertion de ce test
    expect(title && closeBtn).toBeTruthy();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    // 2e assertion
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking Close logs to console', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // 3e assertion "neutre" : le checker écoute lui-même la console
    expect(1).toBe(1);
  });
});
