import React from 'react'
import axios from 'axios'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import LoginWithLogging from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseListWithLogging from '../CourseList/CourseList'
import {
  getLatestNotification,
  logNotificationRead
} from '../utils/utils'
import AppContext from '../Context/context'

function App() {
  const defaultNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ]

  const [displayDrawer, setDisplayDrawer] = React.useState(true)
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    isLoggedIn: false
  })
  const [notifications, setNotifications] = React.useState(defaultNotifications)

  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  const logIn = React.useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true
    })
  }, [])

  const logOut = React.useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    })
  }, [])

  const handleKeyDown = React.useCallback((event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out')
      logOut()
    }
  }, [logOut])

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  React.useEffect(() => {
    axios
      .get('/notifications.json')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setNotifications(response.data)
        }
      })
      .catch(() => {})
  }, [])

  const handleDisplayDrawer = React.useCallback(() => {
    setDisplayDrawer(true)
  }, [])

  const handleHideDrawer = React.useCallback(() => {
    setDisplayDrawer(false)
  }, [])

  const markNotificationAsRead = React.useCallback((id) => {
    logNotificationRead(id)
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    )
  }, [])

  const contextValue = React.useMemo(() => ({
    user,
    logOut
  }), [user, logOut])

  return (
    <AppContext.Provider value={contextValue}>
      <div className="relative px-3 min-h-screen flex flex-col">
        <div className="absolute top-0 right-0 z-10">
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>

        <div className="flex-1">
          <Header />

          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseListWithLogging courses={courses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <LoginWithLogging
                logIn={logIn}
                email={user.email}
                password={user.password}
              />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, asperiores architecto blanditiis fuga doloribus sit
              illum aliquid ea distinctio minus accusantium, impedit quo
              voluptatibus ut magni dicta. Recusandae, quia dicta?
            </p>
          </BodySection>
        </div>

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App