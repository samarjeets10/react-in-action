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
    isPlaying,
    volume,
    setVolume
    } = useMusic();

  const audioRef = useRef(null);

  const handleTimeChange = (e) => {
    const audio = audioRef.current;

    if(!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };


  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if(!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      console.log(audio.duration);
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      nextTrack();
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
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


  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentTrack.url} preload='metadata' crossOrigin='anonymous' />
      <div className='track-info'>
        <h3 className='track-title'>{currentTrack.title}</h3>
        <p className='track-artist'>{currentTrack.artist}</p>
      </div> 

      <div className="progress-container">
        <span className='time'>{formatTime(currentTime)}</span>
        <input type="range" min={0} max={duration || 0} step="0.1" defaultValue={currentTime || 0} className='progress-bar' onChange={handleTimeChange}
        style={{"--progress": `${progressPercentage}%`}}
        />
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

      <div className="volume-container">
        <span className="volume-icon">
          <i class="ri-volume-mute-line"></i>
        </span>
        <input type="range" min="0" max="1" step="0.05" className='volume-bar' onChange={handleVolumeChange} value={ volume} /> 
        <span className="volume-icon">
          <i class="ri-volume-up-line"></i>
        </span>
      </div>
    </div>
  );
}

export default MusicPlayer
