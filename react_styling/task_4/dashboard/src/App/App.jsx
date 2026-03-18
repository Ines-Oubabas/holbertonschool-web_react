import React from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils/utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    logOut: () => {},
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out')
      this.props.logOut()
    }
  }

  render() {
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ]

    const coursesList = [
      { id: 1, name: 'ES6', credit: '60' },
      { id: 2, name: 'Webpack', credit: '20' },
      { id: 3, name: 'React', credit: '40' },
    ]

    const { isLoggedIn = false, displayDrawer = false } = this.props

    return (
      <div className="flex min-h-screen flex-col px-4 pt-4">
        <div className="mb-2 flex justify-end max-[912px]:block">
          <Notifications
            notifications={notificationsList}
            displayDrawer={displayDrawer}
          />
        </div>

        <Header />

        <main className="flex-1">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <p className="sr-only">Holberton School News goes here</p>
            <p className="max-w-xl">
              ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, asperiores architecto blanditiis fuga doloribus sit illum
              aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut
              magni dicta. Recusandae, quia dicta?
            </p>
          </BodySection>
        </main>

        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
}

export default App
