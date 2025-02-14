import React from 'react';
import './App.css';
import Board from './components/board/Board.tsx'
import Cell from './components/board/cell/Cell.tsx';

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
