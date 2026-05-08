import { useState } from "react"

const songs = [
        {
            id: 1,
            title: "Appadi Padu",
            artist: "Vijay Thalapati",
            url: '/songs/Appadi Podu.wav',
            duration: "04.44",
        },
        {
            id: 2,
            title: "Shape of You",
            artist: "EchoBR",
            url: '/songs/Shape of You.wav',
            duration: "03.20",
        }
    ];

export const useMusic = () => {

    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // get inf about the current song playing and the array index of the list of the songs here :

    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    }

    const formatTime = (time) => {

        if(isNaN(time) || time === undefined) return "00.00";

        let minutes = Math.floor(time/60);
        let seconds = Math.floor(time%60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return { allSongs, handlePlaySong, currentTrack, currentTrackIndex, currentTime, setCurrentTime, formatTime};

}