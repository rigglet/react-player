import { useState, useRef } from "react";
//import styles
import "./styles/app.scss"

//import compnents
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

//import data
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // const libraryStatus = () => {

  // }
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
}
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={ currentSong }  />
      <Player setSongInfo={setSongInfo} songInfo={songInfo} audioRef={ audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library libraryStatus={libraryStatus} setSongs={ setSongs} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} audioRef={ audioRef}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio> 
    </div>
  );
}

export default App;
