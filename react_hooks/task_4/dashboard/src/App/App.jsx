import axios from 'axios'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import CourseListWithLogging from '../CourseList/CourseList'
import Footer from '../Footer/Footer'
import { getLatestNotification, logNotificationRead } from '../utils/utils'
import Header from '../Header/Header'
import LoginWithLogging from '../Login/Login'
import AppContext from '../Context/context'
import Notifications from '../Notifications/Notifications'
import { useState, useCallback, useEffect, useMemo } from 'react'

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true)
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })
  const [notifications, setNotifications] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications.json')

        if (Array.isArray(response.data)) {
          const updatedNotifications = response.data.map((notif) => {
            if (notif.html) {
              return {
                ...notif,
                html: { __html: getLatestNotification() }
              }
            }
            return notif
          })

          setNotifications(updatedNotifications)
        }
      } catch (error) {
      }
    }

    fetchNotifications()
  }, [])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/courses.json')

        if (Array.isArray(response.data)) {
          setCourses(response.data)
        }
      } catch (error) {
      }
    }

    if (user.isLoggedIn) {
      fetchCourses()
    }
  }, [user])

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true
    })
  }, [])

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false
    })
  }, [])

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true)
  }, [])

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false)
  }, [])

  const markNotificationAsRead = useCallback((id) => {
    logNotificationRead(id)
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    )
  }, [])

  const contextValue = useMemo(() => ({
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
