/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  return (
    <div className="download">
      <h2>Downland {type === "mp3" ? "MP3" : "MP4"}</h2>
      <iframe
        src={`https://www.yt-download.org/api/button/${type}/${id}`}
        width="100%"
        height="100px"
        scrolling="no"
        style={{ padding: "10px", textAlign: "center" }}
      ></iframe>
    </div>
  );
}

export default DownloadButton;
