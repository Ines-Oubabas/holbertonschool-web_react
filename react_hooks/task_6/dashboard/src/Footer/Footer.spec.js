import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { getFooterCopy, getCurrentYear } from '../utils/utils'

test('renders a p element string Copyright {the current year} - Holberton School, whenever the getFooterCopy() "isIndex" argument is set to true', () => {
  render(
    <Footer
      isIndex={true}
      user={{ email: '', password: '', isLoggedIn: false }}
    />
  )

  const currentYear = getCurrentYear()
  const footerCopy = getFooterCopy(true)

  expect(
    screen.getByText(new RegExp(`copyright ${currentYear} - ${footerCopy}`, 'i'))
  ).toBeInTheDocument()
})

test('Does not render the "Contact us" link when user is logged out', () => {
  render(
    <Footer
      user={{ email: '', password: '', isLoggedIn: false }}
    />
  )

  expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument()
})

test('Renders the "Contact us" link when user is logged in', () => {
  render(
    <Footer
      user={{
        email: 'leslie.knope@pawnee.com',
        password: 'ILoveWaffles',
        isLoggedIn: true
      }}
    />
  )

  expect(screen.getByText(/contact us/i)).toBeInTheDocument()
})
