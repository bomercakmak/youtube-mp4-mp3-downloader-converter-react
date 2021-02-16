import React from "react";
import "./DownloadButtonDefault.css";
import gif from "./gif/gif.gif";

function DownloadButtonDefault() {
  return (
    <div className="default">
      <h1>Paste the video url to get start</h1>
      <br />
      <p>Copy url from YouTube like this</p>
      <img src={gif} alt="" />
    </div>
  );
}

export default DownloadButtonDefault;
