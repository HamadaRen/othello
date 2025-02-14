import React, { useEffect, useState } from 'react';
import './cell.css';
import styled from 'styled-components';

type CellProps = {
  id: number;
  count: number;
  setCount: (value: React.SetStateAction<number>) => void
};
export const Cell = ({ id, count, setCount }: CellProps) => {
  const [isBlack, setIsBlack] = useState<'black' | 'white' | null>(null);


  const countUp = () => {
    setCount(count + 1);
  };

  
  const handleSelect = () => {
    countUp();
    if (isBlack === null) {
      {count % 2 == 1 ? setIsBlack('black') : setIsBlack('white');}
    } else if (isBlack === 'black' || isBlack === 'white') {
      alert('そこには置けません');
    }
  };

  useEffect(() => {
    // console.log(id)
    if (id === 28 || id === 37) {
      setIsBlack('black');
    } else if (id === 29 || id === 36) {
      setIsBlack('white');
    }
  }, [id]);
  // const handleReset = () => {

  // }

  return (
    <>
      <SButton $isBlack={isBlack} onClick={handleSelect}>
        {id}
      </SButton>
      {/* <button
      //  onClick={handleReset}
       >リセット</button> */}
    </>
  );
};
export default Cell;

const SButton = styled.button<{ $isBlack: 'black' | 'white' | null }>`
  background: ${(props) => (!props.$isBlack ? '#008000' : props.$isBlack)};
  border: 4px solid #000;
  height: 12.5%;
  width: 12.5%;
  cursor: pointer;
`;
