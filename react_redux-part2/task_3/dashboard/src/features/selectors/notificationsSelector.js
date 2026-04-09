import { createSelector } from '@reduxjs/toolkit'

const selectedNotifications = state => state.notifications.notifications;

export const getFilteredNotifications = createSelector(
    [selectedNotifications, (state, filter) => filter],
    (notifications, filter) => {
        if (filter === "all") {
            return notifications;
        } else {
            return (notifications.filter(notification => notification.type === filter));
        }
    }
)