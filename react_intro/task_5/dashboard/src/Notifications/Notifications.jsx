import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils.js';

export default function Notifications() {
  const handleClose = () => console.log('Close button has been clicked');

  return (
    <div className="Notifications notification-items">
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        style={{
          float: 'right',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          lineHeight: 0,
        }}
        title="Close"
      >
        <img src={closeIcon} alt="close" style={{ width: 10, height: 10 }} />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
