import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/assets/image.png' className="App-logo" alt="logo" />
        <p>
          Welcome to my website
        </p>
        <a
          className="App-link"
          href="./web/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next
        </a>
      </header>
      <footer>
        <h6>Di buat dengan ♥️ oleh Lynch</h6>
      </footer>
    </div>
  );
}

export default App;
