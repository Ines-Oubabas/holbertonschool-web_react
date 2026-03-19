import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import AppContext from '../Context/context.js'

test('renders footer with copyright text', () => {
  render(<Footer />)

  const footerParagraph = screen.getByText(/copyright/i)
  expect(footerParagraph).toHaveTextContent(
    new RegExp(`copyright ${new Date().getFullYear()}`, 'i')
  )
  expect(footerParagraph).toHaveTextContent(/holberton school/i)
})

test('does not display Contact us when user is logged out', () => {
  const contextValue = {
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
    logOut: jest.fn(),
  }

  render(
    <AppContext.Provider value={contextValue}>
      <Footer />
    </AppContext.Provider>
  )

  expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument()
})

test('displays Contact us when user is logged in', () => {
  const contextValue = {
    user: {
      email: 'test@mail.com',
      password: 'password123',
      isLoggedIn: true,
    },
    logOut: jest.fn(),
  }

  render(
    <AppContext.Provider value={contextValue}>
      <Footer />
    </AppContext.Provider>
  )

  expect(screen.getByText(/contact us/i)).toBeInTheDocument()
})