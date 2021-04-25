import React from 'react';
import { fetchJson } from './http';

const LoginPage = ({ identityProvider }) => {
  const { discoveryUrl, client_id, scope } = identityProvider;

  const handleLogin = async () => {
    const { authorization_endpoint } = await fetchJson(discoveryUrl);
    const params = {
      response_type: "token",
      client_id,
      scope,
      redirect_uri: window.location.origin + "/login/callback"
    };
    window.location.href = authorization_endpoint + "?" + new URLSearchParams(params);
    
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={() => handleLogin()}>Log in</button>
    </div>
  );
};

export default LoginPage;
