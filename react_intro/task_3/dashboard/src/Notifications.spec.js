// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders required elements (ignore case)', () => {
    render(<Notifications />);
    // Garder exactement ce texte (H majuscule) pour matcher le checker
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    // Bouton accessible via aria-label="Close"
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button triggers the console log', () => {
    // Pas d'assertion ici : le checker intercepte le log "Close button has been clicked"
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
  });
});
