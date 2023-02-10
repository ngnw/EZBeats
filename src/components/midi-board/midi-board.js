import React from 'react';
import bass from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Overdrive .wav';
import './midi-board.css';

function MidiBoard() {

  let audio = new Audio(bass)

  const start = () => {
    audio.play()
  }

  return (
    <div className="midi-board">
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
      <button onClick={start}>Bass</button>
    </div>
  );
}

export default MidiBoard;