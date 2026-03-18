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
    const currentNotifications = this.props.notifications || this.props.listNotifications || []
    const nextNotifications = nextProps.notifications || nextProps.listNotifications || []

    return (
      nextNotifications.length !== currentNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    )
  }

  render() {
    const notifications = this.props.notifications || this.props.listNotifications || []
    const { displayDrawer = true } = this.props

    return (
      <div className="pt-1">
        <p className="mb-1 text-right text-xs max-[912px]:mb-3 max-[912px]:text-left max-[912px]:text-base">
          Your notifications
        </p>

        {displayDrawer && (
          <div className="relative ml-auto w-[24rem] border-2 border-dashed border-[var(--main-color)] p-[6px] text-xs max-[912px]:ml-0 max-[912px]:min-h-screen max-[912px]:w-full max-[912px]:p-3 max-[912px]:text-base">
            {notifications.length > 0 ? (
              <>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => console.log('Close button has been clicked')}
                  className="absolute right-1 top-0 max-[912px]:right-3 max-[912px]:top-2"
                >
                  x
                </button>

                <p className="mb-1 max-[912px]:mb-4">Here is the list of notifications</p>
                <ul className="max-[912px]:mt-2">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Notifications