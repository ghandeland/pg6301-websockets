import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import fetchJson from './http';

const Application = () => {
  const [accessToken, useAccessToken] = useState();

  const loadProfile = () => {
    const at = accessToken ? { Authorization: 'Bearer ' + accessToken } : {};
    fetchJson('/api/profile', {
      headers: { ...at },
    });
  };

  const googleIdentityProvider = {
    discoveryUrl: process.env.REACT_APP_GOOGLE_OAUTH_DISCOVERY_URL,
    client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    scope: 'openid profile email',
  };
  
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/chat">
            <ChatPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/login">
            <LoginPage identityProvider={googleIdentityProvider} />
          </Route>
          <Route exact path="/login/callback">
            <h1>Login callback</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;
