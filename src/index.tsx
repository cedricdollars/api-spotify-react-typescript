import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setSpotifyAccess, setSpotifyAccessToken, setSpotifyTokenExpirationTime } from './components/localStorageData';
import { SpotifyAccess } from './components/spotifyAccess';

const hashStr = window.location.hash; // everything in address after #, here spotify puts successfull auth tokens
const searchStr = window.location.search; // everything in address after ?, here spotify puts access denials
const hashParams = decodeHashParams(hashStr.slice(1, hashStr.length));
const searchParams = decodeHashParams(searchStr.slice(1, searchStr.length));

if (hashParams.access_token) {
    setSpotifyAccess(SpotifyAccess.ALLOWED);
    setSpotifyAccessToken(hashParams.access_token);
    setSpotifyTokenExpirationTime(hashParams.expires_in);
    window.close();
} else if (searchParams.error) {
    setSpotifyAccess(SpotifyAccess.DENIED);
    window.close();
} else {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),
    );
}

export function decodeHashParams(str: string): { [key: string]: string } {
    const hashParams: { [key: string]: string } = {};
    const a = /\+/g; // Regex for replacing addition symbol with a space
    const r = /([^&;=]+)=?([^&;]*)/g;
    const d = (s: string) => decodeURIComponent(s.replace(a, ' '));
    let e;

    while ((e = r.exec(str))) {
        hashParams[d(e[1])] = d(e[2]);
    }
    return hashParams;
}
