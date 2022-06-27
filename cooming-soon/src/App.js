import './App.css';
import React from 'react'
import Lottie from 'react-lottie';
import * as animation from './box.json'


function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className="App">
      <header className="App-header">

      <p>
          PrateekSahu.me
      </p>

      <Lottie options={defaultOptions}
              height={400}
              width={400}/>
        <p>
          Coming Soon...!
        </p>
        
      </header>
    </div>
  );
}

export default App;
