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
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    setId(id);
  }, [videoUrl]);

  return (
    <div className="App">
      <div className="appNavbar">
        <h1>The easiest and simplest way to download Youtube MP4 and MP3</h1>
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
            {videoUrl.startsWith("https://www.youtube.com/watch?v=") ? (
              <div>
                <DownloadButton id={id} type="mp3" />
                <DownloadButton id={id} type="videos" />
              </div>
            ) : (
              <InvalidUrl />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
