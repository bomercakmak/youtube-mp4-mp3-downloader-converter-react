import { useState, useEffect } from "react";
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
        <h1>Youtube Converter</h1>
        <p>Welcome to my app!</p>
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
    </div>
  );
}

export default App;
