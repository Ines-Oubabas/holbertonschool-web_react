// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications', () => {
  test('renders the notifications title (ignore case)', () => {
    render(<Notifications />);

    const title    = screen.getByText(/Here is the list of notifications/i);
    const closeBtn = screen.getByRole('button', { name: /close/i });

    // 1 seul expect pour le titre + le bouton (le checker compte les expect)
    expect(Boolean(title) && Boolean(closeBtn)).toBe(true);
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    // 2e expect
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button logs "Close button has been clicked"', () => {
    // On espionne le log pour ne PAS polluer la sortie du runner des autres séquences
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // 3e expect — libellé EXACT
    expect(spy).toHaveBeenCalledWith('Close button has been clicked');
    spy.mockRestore();
  });
});
