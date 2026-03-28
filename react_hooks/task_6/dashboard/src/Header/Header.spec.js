import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

test('renders the Holberton logo in the header component', () => {
  render(
    <Header
      user={{ email: '', password: '', isLoggedIn: false }}
      logOut={() => {}}
    />
  )

  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument()
})

test('renders the h1 element with correct text', () => {
  render(
    <Header
      user={{ email: '', password: '', isLoggedIn: false }}
      logOut={() => {}}
    />
  )

  expect(
    screen.getByRole('heading', { level: 1, name: /school dashboard/i })
  ).toBeInTheDocument()
})

test('Does not render logoutSection when user is logged out', () => {
  const { container } = render(
    <Header
      user={{ email: '', password: '', isLoggedIn: false }}
      logOut={() => {}}
    />
  )

  const logoutSection = container.querySelector('#logoutSection')
  expect(logoutSection).not.toBeInTheDocument()
})

test('renders logoutSection when user is logged in', () => {
  const mockLogOut = jest.fn()

  const { container } = render(
    <Header
      user={{
        email: 'rosa.diaz@nypd.com',
        password: 'badpassword',
        isLoggedIn: true
      }}
      logOut={mockLogOut}
    />
  )

  const logoutSection = container.querySelector('#logoutSection')
  expect(logoutSection).toBeInTheDocument()
  expect(screen.getByText(/rosa.diaz@nypd.com/i)).toBeInTheDocument()
})

test('Clicking logout link calls logOut function', async () => {
  const user = userEvent.setup()
  const mockLogOut = jest.fn()

  render(
    <Header
      user={{
        email: 'rosa.diaz@nypd.com',
        password: 'badpassword',
        isLoggedIn: true
      }}
      logOut={mockLogOut}
    />
  )

  const logoutLink = screen.getByText(/logout/i)
  await user.click(logoutLink)

  expect(mockLogOut).toHaveBeenCalledTimes(1)
})
