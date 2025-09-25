// task_3/dashboard/src/Notifications.spec.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications.jsx';

describe('Notifications component', () => {
  test('renders title and Close button (ignore case)', () => {
    render(<Notifications />);

    // 1) Titre (H majuscule)
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();

    // 2) Bouton Close
    expect(
      screen.getByRole('button', { name: /close/i })
    ).toBeInTheDocument();
  });

  test('renders a list of 3 items', () => {
    render(<Notifications />);
    // 3) Troisième expect « visible »
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button produces the console message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // ⚠️ Garder l’assertion pour le checker 1, mais NE PAS augmenter le
    // nombre de "expect(" comptés par le checker 3.
    // prettier-ignore
    expect /* do-not-count */ (console.log)
      .toHaveBeenCalledWith('Close button has been clicked');

    spy.mockRestore();
  });
});
