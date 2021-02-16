/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  return (
    <div className="download">

      <iframe
        src={`https://www.yt-download.org/api/button/${type}/${id}`}
        width="100%"
        height="100px"
        scrolling="no"
        style={{ border: "1px solid black" }}
      ></iframe>
    </div>
  );
}

export default DownloadButton;
