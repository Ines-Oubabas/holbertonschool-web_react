import { render, screen, waitFor } from '@testing-library/react'
import App from './App.jsx'
import userEvent from '@testing-library/user-event'
import mockAxios from 'jest-mock-axios'
import { getLatestNotification } from '../utils/utils'

let consoleSpy

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(() => {
  consoleSpy.mockRestore()
  mockAxios.reset()
})

test('Renders login and copyright paragraph with the correct content', async () => {
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
  })
  expect(screen.getByText(/^copyright/i)).toBeInTheDocument()
})

test('Renders Email and Password label element', async () => {
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/^email:$/i)).toBeInTheDocument()
  })
  expect(screen.getByText(/^password:$/i)).toBeInTheDocument()
})

test('Renders the Login component when isLoggedIn is false', async () => {
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
  })
})

test('Renders the CourseList component when isLoggedIn is true', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  await user.type(emailInput, 'gina.linetti@nypd.com')
  await user.type(passwordInput, 'verybadpassword')
  await user.click(submitButton)

  mockAxios.mockResponse({
    data: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
  })

  await waitFor(() => {
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})

test('Checks that a title with the text News from the School, and a paragraph element with the text Holberton School News goes here are displayed by default in the App component', async () => {
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  await waitFor(() => {
    const bodySectionTitle = screen.getByText(/news from the school/i)
    expect(bodySectionTitle).toBeInTheDocument()
  })
})

test("Checks that login method prop is correctly called with the user's email and password when the login form is submitted", async () => {
  const user = userEvent.setup()

  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
  expect(screen.queryByRole('table')).not.toBeInTheDocument()

  await user.type(emailInput, 'gina.linetti@nypd.com')
  await user.type(passwordInput, 'verybadpassword')
  await user.click(submitButton)

  mockAxios.mockResponse({
    data: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
  })

  await waitFor(() => {
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
  expect(screen.queryByText(/^login to access the full dashboard$/i)).not.toBeInTheDocument()
})

test('Clicking on a notification item removes it from the list and logs the expected string', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/new course available/i)).toBeInTheDocument()
  })

  const notificationItem = screen.getByText(/new course available/i)
  await user.click(notificationItem)

  expect(screen.queryByText(/new course available/i)).not.toBeInTheDocument()
  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read')
})

test('handleDisplayDrawer sets displayDrawer to true', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument()
  })

  const closeButton = screen.getByRole('button', { name: /close/i })
  await user.click(closeButton)

  const yourNotifications = screen.getByText(/your notifications/i)
  await user.click(yourNotifications)

  const notificationTitle = screen.getByText(/here is the list of notifications/i)
  expect(notificationTitle).toBeInTheDocument()
})

test('handleHideDrawer sets displayDrawer to false', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument()
  })

  const closeButton = screen.getByRole('button', { name: /close/i })
  await user.click(closeButton)

  expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument()
})

test('logIn updates user email, password, and isLoggedIn', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  await user.type(emailInput, 'amy.santiago@nypd.com')
  await user.type(passwordInput, 'verybadpassword')
  await user.click(submitButton)

  mockAxios.mockResponse({
    data: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/welcome amy.santiago@nypd.com/i)).toBeInTheDocument()
  })
  expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument()
})

test('logOut resets user state', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '' } }
    ]
  })

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  await user.type(emailInput, 'amy.santiago@nypd.com')
  await user.type(passwordInput, 'verybadpassword')
  await user.click(submitButton)

  mockAxios.mockResponse({
    data: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/welcome amy.santiago@nypd.com/i)).toBeInTheDocument()
  })

  const logOutButton = screen.getByRole('link', { name: /logout/i })
  await user.click(logOutButton)

  expect(screen.queryByText(/welcome amy.santiago@nypd.com/i)).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /logout/i })).not.toBeInTheDocument()
  expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
})

test('Verify that notifications data is successfully retrieved when the App component loads initially', async () => {
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  })

  await waitFor(() => {
    expect(screen.getByText(/new course available/i)).toBeInTheDocument()
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument()
  })

  expect(mockAxios.get).toHaveBeenCalledWith('/notifications.json')
})

test('Verify that courses data is successfully retrieved whenever the user state changes', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponse({
    data: [
      { id: 1, type: 'default', value: 'New course available' }
    ]
  })

  expect(mockAxios.get).toHaveBeenCalledTimes(1)

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  await user.type(emailInput, 'ron.swanson@pawnee.com')
  await user.type(passwordInput, 'allbacon&eggsyouhave')
  await user.click(submitButton)

  mockAxios.mockResponse({
    data: [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
  })

  await waitFor(() => {
    expect(mockAxios.get).toHaveBeenCalledWith('/courses.json')
  })

  await waitFor(() => {
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
