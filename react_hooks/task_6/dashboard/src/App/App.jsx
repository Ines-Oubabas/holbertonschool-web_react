import { useEffect, useReducer, useCallback } from 'react'
import axios from 'axios'
import Notifications from '../Notifications/Notifications'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection'
import appReducer, { APP_ACTIONS, initialState } from './appReducer'

const API_BASE_URL = 'http://localhost:5173'
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
  notifications: `${API_BASE_URL}/notifications.json`,
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const { displayDrawer, user, notifications, courses } = state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(ENDPOINTS.notifications)

        const latestNotif = {
          id: 3,
          type: 'urgent',
          html: { __html: getLatestNotification() },
        }

        const currentNotifications = response.data.notifications || []
        const indexToReplace = currentNotifications.findIndex(
          (notification) => notification.id === 3
        )

        const updatedNotifications = [...currentNotifications]

        if (indexToReplace !== -1) {
          updatedNotifications[indexToReplace] = latestNotif
        } else {
          updatedNotifications.push(latestNotif)
        }

        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: updatedNotifications,
        })
      } catch (error) {
        console.error('Error fetching notifications:', error)
      }
    }

    fetchNotifications()
  }, [])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(ENDPOINTS.courses)
        dispatch({
          type: APP_ACTIONS.SET_COURSES,
          payload: response.data.courses || [],
        })
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }

    if (!user.isLoggedIn) {
      dispatch({
        type: APP_ACTIONS.SET_COURSES,
        payload: [],
      })
      return
    }

    fetchCourses()
  }, [user.isLoggedIn])

  const handleDisplayDrawer = useCallback(() => {
    dispatch({
      type: APP_ACTIONS.TOGGLE_DRAWER,
      payload: true,
    })
  }, [])

  const handleHideDrawer = useCallback(() => {
    dispatch({
      type: APP_ACTIONS.TOGGLE_DRAWER,
      payload: false,
    })
  }, [])

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password },
    })
  }, [])

  const logOut = useCallback(() => {
    dispatch({
      type: APP_ACTIONS.LOGOUT,
    })
  }, [])

  const markNotificationAsRead = useCallback((id) => {
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_AS_READ,
      payload: id,
    })
    console.log(`Notification ${id} has been marked as read`)
  }, [])

  return (
    <div className="relative px-3 min-h-screen flex flex-col">
      <Notifications
        notifications={notifications}
        handleHideDrawer={handleHideDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        displayDrawer={displayDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />

      <div className="flex-1">
        <Header user={user} logOut={logOut} />

        {!user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login
              logIn={logIn}
              email={user.email}
              password={user.password}
            />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={courses} />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p>Holberton School news goes here</p>
        </BodySection>
      </div>

      <Footer user={user} />
    </div>
  )
}