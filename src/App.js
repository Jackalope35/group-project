import logo from './HECOR.png';
import './App.css';
import wiggum from './wiggum.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Check me out!</code> I'm learnding
        </p>

        <img 
          src={wiggum} 
          alt="ralph wiggum gif" 
          style={{ height: '160px', margin: '10px 0' }} 
        />

        <a
          className="App-link"
          href="https://youtube.com/shorts/Dnk0U6_L4y0?si=Ur59dlRyAa5a2zXq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Clicking Here!
        </a>

        {/* 🔗 Link to Pearl's work */}
        <a 
          href="/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button style={{ marginTop: '20px' }}>
            Click here for Pearl's work
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
