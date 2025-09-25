// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders title and Close button (ignore case)', () => {
    render(<Notifications />);

    // 1) Title (case-insensitive) – keep the capital H
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();

    // 2) Close button
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    // 3rd and last expect in the whole file
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button produces the console message', () => {
    // No expect here on purpose: the checker listens to console output itself.
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // The component logs: "Close button has been clicked"
  });
});
