import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import fetchJson from './http'



const Application = () => {
    [accessToken, useAccessToken] = useState();
    
    
    const loadProfile = () => {
        const at = (accessToken ? { Authorization: ("Bearer " + accessToken) } : {})
        fetchJson('/api/profile', {
            headers: { ...at }
        });
    };
    
    
  return (
    <div>
      <header></header>
      <BrowserRouter>
        <Link to="/">Homepage</Link>
        {' | '}
        <Link to="/chat">Chat</Link>
        {' | '}
        <Link to="/profile">Profile</Link>
        {' | '}
        <Link to="/login">Login</Link>
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
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Application;