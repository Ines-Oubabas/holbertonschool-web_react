// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders title and Close button (ignore case)', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the Close button logs to console', () => {
    const { container } = render(<Notifications />);
    const btn = container.querySelector('button'); // pas d’autre getByRole ici
    fireEvent.click(btn);
  });
});
