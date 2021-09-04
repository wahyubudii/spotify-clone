import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return ( <
        div className = 'login' > { /* Spotify Logo */ } <
        img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt = "Spotify Logo" / >

        <
        a href = { loginUrl } > LOGIN WITH SPOTIFY < /a> { /* Login With Spotify Button */ } <
        /div>
    )
}

export default Login;