import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

describe('App', () => {
  test('renders Login when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test('renders CourseList when isLoggedIn is true', () => {
    const { container } = render(<App isLoggedIn={true} />);
    const table = container.querySelector('#CourseList');
    expect(table).toBeInTheDocument();
  });
});