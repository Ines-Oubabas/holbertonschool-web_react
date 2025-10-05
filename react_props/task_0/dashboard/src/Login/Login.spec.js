import { render, screen } from '@testing-library/react';
import Login from './Login.jsx';

test('Login renders labels and inputs', () => {
  render(<Login />);
  const email = screen.getByLabelText(/email:?/i);
  const pwd = screen.getByLabelText(/password:?/i);
  expect(email).toBeInTheDocument();
  expect(pwd).toBeInTheDocument();
});
