/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import InvalidUrl from "./InvalidUrl";
import "./App.css";

function App() {
  const [videoUrl, setvideoUrl] = useState("");

  const [id, setId] = useState("");

  useEffect(() => {
    let id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    setId(id);
    if(videoUrl.startsWith("https://youtu.be/")){
    id = videoUrl.replace("https://youtu.be/", "")
    setId(id);
  }
    if(videoUrl.startsWith("https://m.youtube.com/watch?v=")){
    id = videoUrl.replace("https://m.youtube.com/watch?v=", "")
    setId(id);
  }
  }, [videoUrl]);

  

  let start = null;
  if((videoUrl.startsWith("https://www.youtube.com/watch?v=")) || (videoUrl.startsWith("https://youtu.be/")) || (videoUrl.startsWith("https://m.youtube.com/watch?v="))){
    start = ( <div>
      <DownloadButton id={id} type="mp3" />
      <DownloadButton id={id} type="videos" />
    </div>)
 } else {
    start = (<InvalidUrl />)
 }

  return (
    <div className="App">
      <div className="appNavbar">
        <h1>The easiest and simplest way to download Youtube MP3 and MP4</h1>
        <p>Created by : bomercakmak</p>
      </div>
      <div className="appLinkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setvideoUrl(e.target.value)}
            value={videoUrl}
            type="text"
            placeholder="Put your YouTube video link..."
          />
        </form>
      </div>
      <div className="dowlandButton">
        {videoUrl === "" ? (
          <DownloadButtonDefault />
        ) : (
          <div>  
            {start}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
