import React from 'react'
import { useMusic } from '../hooks/useMusic'

function AllSongs() {

    const { allSongs, handlePlaySong, currentTrack, currentTrackIndex } = useMusic();

  return (
    <div className="all-songs">
      <h2>All Songs ({allSongs.length})</h2>
      <div className="songs-grid">
        {
            allSongs.map((song, key) => {
                return (
                    <div
                    className={`song-card ${currentTrackIndex === key ? "active" : ""}`} 
                    key={key}
                    onClick={() => handlePlaySong(song, key)}
                    >
                        <div className="song-info">
                            <h3 className='song-title'>{song.title}</h3>
                            <p className='song-artist'>{song.artist}</p>
                            <span className='song-duration'>{song.duration}</span>
                        </div>
                        <div className="play-buton">
                            {
                               currentTrackIndex === key ? <i class="ri-music-fill"></i> : <i class="ri-play-circle-line"></i>
                            }
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default AllSongs
