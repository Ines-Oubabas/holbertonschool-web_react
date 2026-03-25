import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockAxios from 'jest-mock-axios'
import App from './App.jsx'

let consoleSpy

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(() => {
  consoleSpy.mockRestore()
  mockAxios.reset()
})

const notificationsUrl = `${window.location.origin}/notifications.json`
const coursesUrl = `${window.location.origin}/courses.json`

test('Renders login and copyright paragraph with the correct content', () => {
  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } }
    ]
  })

  expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
  expect(screen.getByText(/^copyright/i)).toBeInTheDocument()
})

test('Renders Email and Password label element', () => {
  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: []
  })

  expect(screen.getByText(/^email:$/i)).toBeInTheDocument()
  expect(screen.getByText(/^password:$/i)).toBeInTheDocument()
})

test('Renders the Login component when isLoggedIn is false', () => {
  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: []
  })

  expect(screen.getByText(/^login to access the full dashboard$/i)).toBeInTheDocument()
})

test('Renders the CourseList component when isLoggedIn is true', async () => {
  const user = userEvent.setup()
  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: [
      { id: 1, type: 'default', value: 'New course available' }
    ]
  })

  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /ok/i })

  await user.type(emailInput, 'gina.linetti@nypd.com')
  await user.type(passwordInput, 'verybadpassword')
  await user.click(submitButton)

  mockAxios.mockResponseFor({ url: coursesUrl }, {
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

test('Verify that alert is called once when ctrl+h are pressed', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation()

  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: []
  })

  fireEvent.keyDown(document, { key: 'h', ctrlKey: true })
  expect(alertSpy).toHaveBeenCalledTimes(1)
  expect(alertSpy).toHaveBeenCalledWith('Logging you out')

  alertSpy.mockRestore()
})

test('Checks that alert function is called with "Logging you out" message', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation()

  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: []
  })

  fireEvent.keyDown(document, {
    key: 'h',
    ctrlKey: true
  })

  expect(alertSpy).toHaveBeenCalledWith('Logging you out')
  alertSpy.mockRestore()
})

test('Checks that a title with the text News from the School is displayed by default in the App component', () => {
  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: []
  })

  const bodySectionTitle = screen.getByText(/news from the school/i)
  expect(bodySectionTitle).toBeInTheDocument()
})

test('Checks that login method prop is correctly called with the user’s email and password when the login form is submitted', async () => {
  const user = userEvent.setup()

  render(<App />)

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: [
      { id: 1, type: 'default', value: 'New course available' }
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

  mockAxios.mockResponseFor({ url: coursesUrl }, {
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

  mockAxios.mockResponseFor({ url: notificationsUrl }, {
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } }
    ]
  })

  const notificationItem = await screen.findByText(/new course available/i)
  expect(notificationItem).toBeInTheDocument()

  await user.click(notificationItem)

  expect(screen.queryByText(/new course available/i)).not.toBeInTheDocument()
  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read')
})