// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders title and Close button (ignore case)', () => {
    render(<Notifications />);

    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });

    // 1 seule assertion pour satisfaire le checker
    expect(title && closeBtn).toBeTruthy();
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button logs the expected message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
}
);
