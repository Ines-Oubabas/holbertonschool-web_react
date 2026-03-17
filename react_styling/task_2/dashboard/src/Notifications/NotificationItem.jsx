import React from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props
    const textColor = type === 'urgent' ? 'text-urgent-notification-item font-semibold' : 'text-default-notification-item'
    const bulletColor = type === 'urgent' ? 'bg-urgent-notification-item' : 'bg-default-notification-item'

    return (
      <li
        data-notification-type={type}
        className="flex cursor-pointer items-start gap-2 text-sm"
        onClick={markAsRead}
        onKeyDown={event => event.key === 'Enter' && markAsRead()}
        role="button"
        tabIndex={0}
      >
        <span aria-hidden="true" className={`mt-1 h-2 w-2 rounded-sm ${bulletColor}`} />
        {value ? <span className={textColor}>{value}</span> : <span className={textColor} dangerouslySetInnerHTML={html} />}
      </li>
    )
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
}

export default NotificationItem