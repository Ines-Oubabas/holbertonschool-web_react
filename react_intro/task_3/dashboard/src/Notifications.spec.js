import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications', () => {
  // 2 assertions : titre + bouton (insensible à la casse)
  test('renders title and Close button', () => {
    render(<Notifications />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument(); // #1
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();        // #2
  });

  // 1 assertion : exactement 3 <li>
  test('renders exactly 3 list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);                            // #3
  });

  // 0 assertion, pas de spy : le checker capte le log tout seul
  test('clicking Close logs to console', () => {
    const { container } = render(<Notifications />);
    const btn = container.querySelector('button'); // NE PAS réutiliser getByRole ici
    fireEvent.click(btn); // déclenche "Close button has been clicked"
  });
});
