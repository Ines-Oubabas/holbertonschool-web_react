// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component (render)', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    expect(screen.getByRole('button', { name: /close/i }))
      .toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  // === Nouveau test pour satisfaire le check "console displays..." ===
  it('logs "Close button has been clicked" when the close button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);

    const btn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(btn);

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });
});
