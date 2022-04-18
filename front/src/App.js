import './App.css';
import Members from './components/Members';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <span className='nav-contents'>
        <h3>ART CARD</h3>
        <span className='nav-actions'>
        <button className='nav-login'>Login</button>
        <button className='nav-login'>Logout</button>
        </span>
        </span>
        </nav>
     <New/>
     <Members />
    </div>
  );
}

export default App;
