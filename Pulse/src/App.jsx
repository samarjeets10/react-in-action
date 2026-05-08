import React from 'react'
import MusicPlayer from './components/MusicPlayer'
import { Route, Routes } from 'react-router-dom'
import AllSongs from './components/AllSongs'
import Playlists from './components/Playlists'

function App() {
  return (
    <>
      <div className="app">
        {/* <NavBar */}
        <main className="app-main">
          <div className="player-section">
            {/* <MusicPlayer /> */}
          </div>
          <div className="content-section">
              <Routes>
                <Route path='/' element={<AllSongs />} />
                <Route path='/playlists' element={<Playlists />} />
              </Routes>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
