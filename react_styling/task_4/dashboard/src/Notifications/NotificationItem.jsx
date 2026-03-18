import React from 'react'
import PropTypes from 'prop-types'

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props

    const textColor =
      type === 'urgent'
        ? 'text-[var(--urgent-notification-item)]'
        : 'text-[var(--default-notification-item)]'

    return (
      <li
        data-notification-type={type}
        className={`py-3 text-sm sm:text-xs md:text-sm lg:text-xs xl:text-xs max-[912px]:border-b max-[912px]:border-gray-500 max-[912px]:px-3 ${textColor}`}
        onClick={markAsRead}
      >
        {value ? value : <span dangerouslySetInnerHTML={html} />}
      </li>
    )
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
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