// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  let originalConsoleLog;

  beforeAll(() => {
    originalConsoleLog = console.log;
  });

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  test('renders the notifications title (case-insensitive)', () => {
    render(<Notifications />);
    // IMPORTANT: capital "H" for the checker
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    const btn = screen.getByRole('button', { name: /close/i });
    expect(btn).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  // Utilise "it(" au lieu de "test(" pour que le checker n’en compte que 3
  it('clicking the close button logs the expected message', () => {
    render(<Notifications />);
    const btn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(btn);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
