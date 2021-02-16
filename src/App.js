import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appNavbar">
        <h1>Youtube Converter</h1>
        <p>Welcome to my app!</p>
      </div>
      <div className="appLinkBox">
        <form>
          <input type="text" placeholder="Put your YouTube video link..."/>
        </form>
      </div>
    </div>
  );
}

export default App;
