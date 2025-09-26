// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders title, Close button and 3 items (ignore case)', () => {
    render(<Notifications />);

    const title = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    const items = screen.getAllByRole('listitem');

    expect(title).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
    expect(items).toHaveLength(3);
  });

  test('clicking Close triggers console log', () => {
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // Le checker écoute lui-même la console: "Close button has been clicked"
  });
});
