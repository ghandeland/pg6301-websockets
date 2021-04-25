import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import { fetchJson } from './http';
import LoginCallbackPage from './LoginCallbackPage';

const Application = () => {
  const [accessToken, setAccessToken] = useState();

  const loadProfile = async () => {
    const at = accessToken ? { Authorization: 'Bearer ' + accessToken } : {};
    const json = await fetchJson('/api/profile', {
        headers: { ...at },
    });
    console.log("json", json);
    return json;
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
            <ProfilePage loadingFunction={loadProfile} />
          </Route>
          <Route exact path="/login">
            <LoginPage identityProvider={googleIdentityProvider} />
          </Route>
          <Route exact path="/login/callback">
            <LoginCallbackPage
              onAccessToken={(access_Token) => setAccessToken(access_Token)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;
