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

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case APP_ACTIONS.LOGIN: {
      const userFromAction = action.user || action.payload?.user

      if (userFromAction) {
        return {
          ...state,
          user: {
            ...userFromAction,
            isLoggedIn: true
          }
        }
      }

      return {
        ...state,
        user: {
          email: action.email ?? action.payload?.email ?? '',
          password: action.password ?? action.payload?.password ?? '',
          isLoggedIn: true
        }
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

    case APP_ACTIONS.TOGGLE_DRAWER: {
      const nextValue =
        action.displayDrawer ??
        action.payload?.displayDrawer ??
        action.isVisible ??
        action.payload?.isVisible

      return {
        ...state,
        displayDrawer:
          typeof nextValue === 'boolean' ? nextValue : !state.displayDrawer
      }
    }

    case APP_ACTIONS.SET_NOTIFICATIONS: {
      const notifications =
        action.notifications ??
        action.payload?.notifications ??
        action.data ??
        []

      return {
        ...state,
        notifications: [...notifications]
      }
    }

    case APP_ACTIONS.MARK_NOTIFICATION_READ: {
      const id =
        action.id ??
        action.payload?.id ??
        action.notificationId ??
        action.payload?.notificationId

      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== id
        )
      }
    }

    case APP_ACTIONS.SET_COURSES: {
      const courses =
        action.courses ??
        action.payload?.courses ??
        action.data ??
        []

      return {
        ...state,
        courses: [...courses]
      }
    }

    default:
      return state
  }
}
