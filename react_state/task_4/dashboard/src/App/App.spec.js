import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App component', () => {
  test('renders the notifications component', () => {
    render(<App />)
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument()
  })

  test('renders the header component', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /school dashboard/i })
    ).toBeInTheDocument()
  })

  test('renders the login component by default', () => {
    render(<App />)
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument()
  })

  test('renders the footer component', () => {
    render(<App />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })

  test('renders Login when user is not logged in', () => {
    render(<App />)
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument()
  })

  test('renders CourseList when user logs in', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/email/i), 'test@mail.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByDisplayValue(/ok/i))

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  test('displays Contact us after login', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/email/i), 'test@mail.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByDisplayValue(/ok/i))

    expect(screen.getByText(/contact us/i)).toBeInTheDocument()
  })

  test('clicking a notification removes it and logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    render(<App />)

    fireEvent.click(screen.getByText(/your notifications/i))
    const items = screen.getAllByRole('listitem')
    fireEvent.click(items[0])

    expect(consoleSpy).toHaveBeenCalledWith(
      'Notification 1 has been marked as read'
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(2)

    consoleSpy.mockRestore()
  })
})