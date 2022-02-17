import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Cancion from './pages/Cancion';
import Error404 from './pages/Error404';
import Letra from './components/Letra';
import ListaCanciones from './components/ListaCanciones';


function App() {
  //Variables de Estado
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")),
    searchInit = {
      artist: "",
      song: "",
      request: false
    };
  const [mySongs, setMySongs] = useState(mySongsInit);
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState({});
  const [setError] = useState(false);

  //Función de Efecto
  useEffect(() => {
    localStorage.getItem("mySongs");
    const getData = async () => {
      const { artist, song } = search;
      try {
        let artistAPI = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
          songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
          artistRes = await fetch(artistAPI),
          songRes = await fetch(songAPI),
          artistJSON = await artistRes.json(),
          songJSON = await songRes.json();


        setCurrentSong({
          artist: artistJSON.artists[0].strArtist,
          avatar: artistJSON.artists[0].strArtistThumb,
          song,
          lyrics: songJSON.lyrics
        }
        )
      } catch (error1) {
        console.log(error1)
        setSearch({
          artist,
          song,
          request: false
        });
        setError(true);
      }
    }
    if (!search.request) {
      return;
    } else {
      getData();
    }
  }, [search])

  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={
              <div>
                <Buscador
                  search={search}
                  setSearch={setSearch}
                  setError={setError}
                />
                <ListaCanciones
                  mySongs={mySongs}
                  setMySongs={setMySongs}
                />
                {!search.request ? null :
                  <Letra
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    mySongs={mySongs}
                    setMySongs={setMySongs}
                    setSearch={setSearch}
                  />
                }
              </div>
            } />
            <Route path="/cancion/:id" element={<Cancion mySongs={mySongs}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </CssBaseline>
    </Router>
  );
}

export default App;
