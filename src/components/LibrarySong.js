import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, setSongs, songs}) => {
    const songSelectHandler = () => { 
        setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((s) => {
            if (s.id === song.id) {
                return {...s, active: true}
            } else {
                return {...s, active: false}
            }
        })
        setSongs(newSongs);
        //check if song is playing
        playAudio(isPlaying, audioRef);
    }
    return (
        <div onClick={ songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{ song.artist}</h4>    
            </div>
        </div>
    )
}

export default LibrarySong;

