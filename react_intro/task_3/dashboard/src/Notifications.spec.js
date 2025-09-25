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
    // Insensible à la casse grâce au /i
    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    // Recherche par rôle + nom accessible (aria-label="Close")
    const btn = screen.getByRole('button', { name: /close/i });
    expect(btn).toBeInTheDocument();
  });

  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('clicking the close button logs the expected message', () => {
    render(<Notifications />);
    const btn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(btn);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});