import { useState } from "react"

const songs = [
        {
            id: 1,
            title: "Appadi Padu",
            artist: "Vijay Thalapati",
            url: "/songs/Appadi Podu.wav",
            duration: "04.44",
        },
        
        {
            id: 2,
            title: "Shape of You",
            artist: "EchoBR",
            url: "/songs/Shape of You.wav",
            duration: "03.20",
        }
    ];

export const useMusic = () => {

    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPause, setIsPause] = useState(true);
    const [volume, setVolume] = useState(0);

    // get inf about the current song playing and the array index of the list of the songs here :

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    }

    const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) => {
           const nextIndex = (prevIndex + 1) % allSongs.length;
           setCurrentTrack(allSongs[nextIndex]);
           return nextIndex;
        });

        setIsPlaying(false);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
            setCurrentTime(allSongs[nextIndex]);
            return nextIndex;
        });

        setIsPlaying(false);
    };

    const formatTime = (time) => {

        if(isNaN(time) || time === undefined) return "00.00";

        let minutes = Math.floor(time/60);
        let seconds = Math.floor(time%60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };


    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);


    return { 
        allSongs, 
        setAllSongs,  
        handlePlaySong, 
        currentTrack, 
        currentTrackIndex, 
        currentTime, 
        setCurrentTime, 
        formatTime, 
        duration, 
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        isPause,
        volume,
        setVolume
    };

}