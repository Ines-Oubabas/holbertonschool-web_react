// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('shows title and Close button (ignore case)', () => {
    render(<Notifications />);
    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    // 1 seul expect pour les deux éléments
    expect(Boolean(title && closeBtn)).toBe(true);
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking Close logs to console', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    // ICI: pas de /i pour éviter un 2e motif insensible à la casse
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
