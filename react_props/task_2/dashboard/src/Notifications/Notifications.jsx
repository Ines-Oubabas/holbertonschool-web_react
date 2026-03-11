import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem.jsx';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';

function Notifications({ notifications = [] }) {
  const listToRender = notifications.length > 0
    ? notifications
    : [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ];

  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <ul>
        {listToRender.map((item) => (
          <NotificationItem
            key={item.id}
            type={item.type}
            value={item.value}
            html={item.html}
          />
        ))}
      </ul>

      <button
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'none',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        <img
          src={closeIcon}
          alt="close"
          style={{ width: '10px', height: '10px' }}
        />
      </button>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

export default Notifications;