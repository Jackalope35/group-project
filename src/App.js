import React from 'react';
import './App.css';
import logo from './HECOR.png';
import wiggum from './wiggum.gif';
import pearl from './pearl_sbsp.png'; // Make sure this exists in src or public

function App() {
  const startGame = () => {
    window.open(`${process.env.PUBLIC_URL}/whack_a_mole.html`, '_blank');
  };

  return (
    <div className="App">
      {/* Red pulsing game button in top-left */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <button
          onClick={startGame}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, red, darkred)',
            border: '3px solid black',
            boxShadow: '0 0 15px red',
            animation: 'pulse 1.5s infinite',
            cursor: 'pointer'
          }}
        />
        <p style={{
          marginTop: '8px',
          color: 'white',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px black'
        }}>Play me!</p>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>Check me out!</code> I'm learnding</p>
        <img src={wiggum} alt="ralph wiggum gif" style={{ height: '160px', margin: '10px 0' }} />

        <a
          className="App-link"
          href="https://youtube.com/shorts/Dnk0U6_L4y0?si=Ur59dlRyAa5a2zXq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Clicking Here!
        </a>

        {/* Link to Pearl's Work */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '30px' }}>
          <img src={pearl} alt="Mrs. Pearl pointing" style={{ height: '80px' }} />
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
