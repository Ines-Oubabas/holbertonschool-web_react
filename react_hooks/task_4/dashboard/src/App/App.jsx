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
  const [displayDrawer, setDisplayDrawer] = React.useState(true)
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    isLoggedIn: false
  })
  const [notifications, setNotifications] = React.useState([])
  const [courses, setCourses] = React.useState([])

  const notificationsUrl = `${window.location.origin}/notifications.json`
  const coursesUrl = `${window.location.origin}/courses.json`

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
    let isMounted = true

    const fetchNotifications = async () => {
      try {
        const response = await axios.get(notificationsUrl)

        if (!isMounted || !Array.isArray(response.data)) {
          return
        }

        const updatedNotifications = response.data.map((notification) => {
          if (notification.html) {
            return {
              ...notification,
              html: { __html: getLatestNotification() }
            }
          }
          return notification
        })

        setNotifications(updatedNotifications)
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console['error'](error)
        }
      }
    }

    fetchNotifications()

    return () => {
      isMounted = false
    }
  }, [notificationsUrl])

  React.useEffect(() => {
    let isMounted = true

    const fetchCourses = async () => {
      try {
        const response = await axios.get(coursesUrl)

        if (isMounted && Array.isArray(response.data)) {
          setCourses(response.data)
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console['error'](error)
        }
      }
    }

    if (user.isLoggedIn) {
      fetchCourses()
    }

    return () => {
      isMounted = false
    }
  }, [user, coursesUrl])

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