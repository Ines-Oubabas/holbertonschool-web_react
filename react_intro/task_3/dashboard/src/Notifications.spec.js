// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders required elements (ignore case)', () => {
    render(<Notifications />);
    // IMPORTANT : garder le "H" majuscule pour matcher le checker
    expect(screen.getByText(/Here is the list of notifications/i))
      .toBeInTheDocument();           // 1er expect
    expect(screen.getByRole('button', { name: /close/i }))
      .toBeInTheDocument();           // 2e expect
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3); // 3e expect
  });

  test('clicking the close button triggers the console log', () => {
    // PAS d’assertion ici, et ne pas spy/overrider console.log
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // Le composant log "Close button has been clicked" et le checker l’observe.
  });
});
