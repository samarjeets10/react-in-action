import { useEffect, useRef } from 'react'
import { useMusic } from '../hooks/useMusic'

function MusicPlayer() {

  const { 
    currentTrack,
    currentTime, 
    setCurrentTime,  
    setDuration, 
    formatTime, 
    duration, 
    nextTrack, 
    prevTrack, 
    play, pause, 
    isPlaying 
    } = useMusic();

  const audioRef = useRef(null);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      console.log(audio.duration);
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }

  }, [setDuration, setCurrentTime, currentTrack]);


  useEffect(() => {
    
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play()
      .catch((error) => console.log(error));
    } else {
      audio.pause();
    } 

  }, [isPlaying]);

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentTrack.url} preload='metadata' crossOrigin='anonymous' />
      <div className='track-info'>
        <h3 className='track-title'>{currentTrack.title}</h3>
        <p className='track-artist'>{currentTrack.artist}</p>
      </div> 

      <div className="progress-container">
        <span className='time'>{formatTime(currentTime)}</span>
        <input type="range" min={0} max={duration || 0} step="0.1" defaultValue={currentTime || 0} className='progress-bar'/>
        <span className='time'>{formatTime(duration)}</span>
      </div>

      <div className='controls'>
        <button className='control-btn' onClick={prevTrack} ><i class="ri-skip-back-mini-fill"></i></button>
        <button 
        className='control-btn play-btn'
        onClick={() =>
          (isPlaying ? pause() : play())
        }
        >
          {
            isPlaying ? <i class="ri-pause-line"></i> : <i class="ri-play-large-fill"></i>
          }
        </button>
        <button className='control-btn' onClick={nextTrack} >
          <i class="ri-skip-forward-mini-fill"></i>
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
