import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

test('Header renders the title and logo', () => {
  render(<Header />);
  expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  // le logo existe (via alt)
  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
});
