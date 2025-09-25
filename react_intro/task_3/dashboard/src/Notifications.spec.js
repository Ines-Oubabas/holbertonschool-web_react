// task_3/dashboard/src/Notifications.spec.js
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications list', () => {
  test('shows the header text "Here is the list of notifications" (case/whitespace-insensitive)', () => {
    render(<Notifications />);
    // Tolère la casse et des espaces multiples
    expect(
      screen.getByText(/\bhere\s+is\s+the\s+list\s+of\s+notifications\b/i)
    ).toBeInTheDocument();
  });

  test('has a Close button in the notifications', () => {
    render(<Notifications />);
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('clicking the close button logs "Close button has been clicked"', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });
});
