import React from 'react'
import { useMusic } from '../hooks/useMusic'

function MusicPlayer() {

  const { currentTrack, currentTime, setCurrentTime, formatTime } = useMusic();

  return (
    <div className="music-player">
      <audio />
      <div className='track-info'>
        <h3 className='track-title'>{currentTrack.title}</h3>
        <p className='track-artist'>{currentTrack.artist}</p>
      </div>

      <div className="progress-container">
        <span className='time'>{formatTime(currentTime)}</span>
      </div>
    </div>
  )
}

export default MusicPlayer
