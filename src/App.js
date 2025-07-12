import logo from './HECOR.png';
import './App.css';
import wiggum from './wiggum.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo image */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Text below logo */}
        <p>
          <code>Check me out!</code> I'm learnding
        </p>

        {/* Wiggum gif */}
        <img 
          src={wiggum} 
          alt="ralph wiggum gif" 
          style={{ height: '160px', margin: '10px 0' }} 
        />

        {/* YouTube link */}
        <a
          className="App-link"
          href="https://youtube.com/shorts/Dnk0U6_L4y0?si=Ur59dlRyAa5a2zXq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Clicking Here!
        </a>

        {/* Link to Pearl's work */}
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
    marginTop: '20px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.3s',
  }}
  onMouseOver={e => (e.target.style.backgroundColor = '#038c5a')}
  onMouseOut={e => (e.target.style.backgroundColor = '#04AA6D')}
>
  <span role="img" aria-label="link">🔗</span>
  Click here for Pearl's work
</button>

</a>

      </header>
    </div>
  );
}

export default App;
