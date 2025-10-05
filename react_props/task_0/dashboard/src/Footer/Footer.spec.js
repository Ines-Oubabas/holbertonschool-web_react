import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

test('Footer renders copyright line', () => {
  render(<Footer />);
  expect(screen.getByText(/holberton school main dashboard/i)).toBeInTheDocument();
});
