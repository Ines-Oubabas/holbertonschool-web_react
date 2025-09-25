// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    // IMPORTANT: capital "H" pour coller au checker
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('has a Close button and clicking it logs the expected message', () => {
    render(<Notifications />);

    const btn = screen.getByRole('button', { name: /close/i });
    expect(btn).toBeInTheDocument();

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    fireEvent.click(btn);
    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');
    logSpy.mockRestore();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});
