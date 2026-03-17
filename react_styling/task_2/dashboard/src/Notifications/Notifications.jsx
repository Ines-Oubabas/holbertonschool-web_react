import NotificationItem from './NotificationItem'
import React from 'react'

class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length || nextProps.displayDrawer !== this.props.displayDrawer
  }

  render() {
    const { notifications, displayDrawer = true } = this.props

    return (
      <>
        <div className="flex flex-col items-end space-y-2 pr-4">
          <p className="text-base font-medium">Your notifications</p>
          {displayDrawer && (
            <div className="relative max-w-md border-2 border-dashed border-main px-6 py-4">
              {notifications.length > 0 ? (
                <>
                  <p className="mb-4 text-sm font-medium">Here is the list of notifications</p>
                  <button
                    type="button"
                    className="absolute right-4 top-3 text-lg leading-none transition hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
                    onClick={() => console.log('Close button has been clicked')}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <ul className="space-y-3">
                    {notifications.map(notification => (
                      <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={() => this.markAsRead(notification.id)} />
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-sm">No new notification for now</p>
              )}
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Notifications