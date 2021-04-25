import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const LoginCallbackPage = ({ onAccessToken }) => {
    
    const history = useHistory();
    
    const hash = Object.fromEntries(
        new URLSearchParams(window.location.hash.substr(1))
    );
    console.log("hash", hash);
    
    useEffect(() => {
        onAccessToken(hash.access_token);
        history.push("/");
    }, [])
    
    return (
        <div>
            <h1>Login Callback Page</h1>      
        </div>
    )
}

export default LoginCallbackPage
