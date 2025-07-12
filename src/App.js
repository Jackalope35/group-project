import React from 'react';
import logo from './HECOR.png';
import './App.css';
import wiggum from './wiggum.gif';
import pearl from './pearl_sbsp.png'; // Make sure this file exists in your src/ folder

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Logo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Text */}
        <p>
          <code>Check me out!</code> I'm learnding
        </p>

        {/* Wiggum GIF */}
        <img
          src={wiggum}
          alt="ralph wiggum gif"
          style={{ height: '160px', margin: '10px 0' }}
        />

        {/* YouTube Link */}
        <a
          className="App-link"
          href="https://youtube.com/shorts/Dnk0U6_L4y0?si=Ur59dlRyAa5a2zXq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Clicking Here!
        </a>

        {/* Pearl Button Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '30px' }}>
          <img
            src={pearl}
            alt="Mrs. Pearl pointing"
            style={{ height: '80px' }}
          />
          <a
            href={`${process.env.PUBLIC_URL}/pearl.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: '#04AA6D',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={e => (e.target.style.backgroundColor = '#038c5a')}
              onMouseOut={e => (e.target.style.backgroundColor = '#04AA6D')}
            >
              🔗 Click here for Pearl's work
            </button>
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
