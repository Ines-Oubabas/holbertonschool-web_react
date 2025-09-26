// react_intro/task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications'; // sans .jsx

describe('Notifications', () => {
  test('renders title and Close button (ignore case)', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument(); // 1
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();       // 2
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);                           // 3
  });

  test('clicking the Close button logs to console', () => {
    const { container } = render(<Notifications />);
    const btn = container.querySelector('button'); // ne pas réutiliser getByRole ici
    fireEvent.click(btn); // le checker capte "Close button has been clicked"
  });
});
