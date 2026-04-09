import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  notifications: [],
  loading: false,
}

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = { notifications: `${API_BASE_URL}/notifications.json` };

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);
    const currentNotifications = response.data.notifications;
    const unreadNotifications = currentNotifications
      .filter(currentNotification => currentNotification.context.isRead === false)
      .map(currentNotification => ({
        id: currentNotification.id,
        type: currentNotification.context.type,
        isRead: currentNotification.context.isRead,
        value: currentNotification.context.value,
      }));
    return unreadNotifications;
  });

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
      console.log(`Notification ${action.payload} has been marked as read`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotifications.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
