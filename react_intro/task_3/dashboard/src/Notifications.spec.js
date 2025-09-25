// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders required elements (ignore case)', () => {
    render(<Notifications />);
    // Titre : respecter exactement cette chaîne + /i
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
    // Bouton Close : insensible à la casse
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button triggers the console log', () => {
    // IMPORTANT : aucune assertion ici.
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
  });
});
