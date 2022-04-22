import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Members from './components/Members';
import New from './components/New';
import Test from './components/Test';

function App() {
const [data, setData] = useState();
  useEffect(() => {
    axios.get('/users')
    .then((res) => { setData(res.data) })
    .catch((err) => {console.log('errrorrr: ', err)});
  }, [setData])

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
     <Test data={data}/>
    </div>
  );
}

export default App;
