import React, { useState } from 'react';
import { Cell } from './cell/Cell.tsx';
import './cell/cell.css';
import './board.css';
// import { ButtonComponent } from './Button.tsx';

export const Board = () => {
  const array: number[] = [];
  for (let num = 1; num <= 64; num++) {
    array.push(num);
  }

  const [count, setCount] = useState<number>(0);

  // const handleAdd = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div className="container">
        {array.map((num) => (
          <Cell key={num} id={num} count={count} setCount={setCount} />
        ))}
      </div>
    </>
  );
};
export default Board;
