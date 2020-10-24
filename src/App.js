import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const Spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);

      Spotify.setAccessToken(_token);

      Spotify.getMe().then(user => {
        console.log(user);
      })
    }

  }, []);

  return (
    <div className="App">
      {
        token ? < Player/> : <Login />
      }
    </div>
  );
}

export default App;
