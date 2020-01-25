import React from 'react';
import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, here's a counter</h1>
        <Counter className="counter"></Counter>
      </header>
    </div>
  );
}

export default App;
