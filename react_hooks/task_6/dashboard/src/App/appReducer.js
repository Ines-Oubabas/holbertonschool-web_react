import { getLatestNotification } from '../utils/utils'

export const APP_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SET_COURSES: 'SET_COURSES'
}

export const initialState = {
  displayDrawer: true,
  user: {
    email: '',
    password: '',
    isLoggedIn: false
  },
  notifications: [],
  courses: []
}

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.user
          ? { ...action.user, isLoggedIn: true }
          : {
              email: action.email || '',
              password: action.password || '',
              isLoggedIn: true
            }
      }

    case APP_ACTIONS.LOGOUT:
      return {
        ...state,
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        }
      }

    case APP_ACTIONS.TOGGLE_DRAWER:
      return {
        ...state,
        displayDrawer:
          typeof action.displayDrawer === 'boolean'
            ? action.displayDrawer
            : !state.displayDrawer
      }

    case APP_ACTIONS.SET_NOTIFICATIONS: {
      const notifications = Array.isArray(action.notifications)
        ? action.notifications.map((notification) => {
            if (notification.id === 3) {
              return {
                ...notification,
                html: { __html: getLatestNotification() }
              }
            }
            return { ...notification }
          })
        : []

      return {
        ...state,
        notifications
      }
    }

    case APP_ACTIONS.MARK_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.id
        )
      }

    case APP_ACTIONS.SET_COURSES:
      return {
        ...state,
        courses: Array.isArray(action.courses)
          ? action.courses.map((course) => ({ ...course }))
          : []
      }

    default:
      return state
  }
}

export default appReducer
