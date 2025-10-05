import React from 'react';
import '../Notifications/Notifications.css'; // garde le style des notifs

import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';

export default function App() {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </React.Fragment>
  );
}
