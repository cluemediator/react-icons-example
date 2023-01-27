import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsFillHandThumbsUpFill, BsHeart } from 'react-icons/bs';
import { TiCamera } from 'react-icons/ti';
import { SlHeart } from 'react-icons/sl';

function App() {
  // style for icons
  const fontStyle = {
    fontSize: 30,
    color: '#ff3063'
  }

  return (
    <div className="App">
      <h4>How to add icons in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>
      <div className='icons'>
        <FaHeart style={fontStyle} />
        <FaRegHeart style={fontStyle} />
        <BsFillHandThumbsUpFill style={fontStyle} />
        <BsHeart style={fontStyle} />
        <TiCamera style={fontStyle}/>
        <SlHeart style={fontStyle} />
      </div>
    </div>
  );
}

export default App;