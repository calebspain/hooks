import React, { useState, useEffect } from 'react';
import './App.css';

let born = false;
function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = 'Nirvana Attained';
    }
  }, [nirvana]);

  useEffect(() => {
    console.log('I am born');
  }, []);

  useEffect(() => {
    if (born) {
      console.log('make mistake and learn');
    } else {
      born = true;
    }

    if (growth > 70) {
      setNirvana(true);
    }

    return () => {
      console.log('cleanup after mistakes');
    }
  }, [growth]);

  const growHandle = () => {
    setGrowth(growth + 10);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect</h2>
        <h3>Growth: {growth}</h3>
        <button onClick={growHandle}>Learn and Grow</button>
      </header>
    </div>
  );
}

export default App;
