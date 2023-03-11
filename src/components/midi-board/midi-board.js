import React from 'react';
import bass from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Overdrive .wav';
import chant from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Chants/Chant Noise.wav';
import fx from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/FX/Zap 001.wav';
import hat from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/HiHat Closed 001 Widened.wav';
import cymbals from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/Cymbal Ride 001 Smooth.wav';
import kick from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Kick/Kick 002 Knock.wav';
import clap from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Clap 001.wav';
import snare from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Snare 001.wav';
import { epg } from '../timeline/helpers/epg';
import './midi-board.css';

function MidiBoard() {

  const one = () => {
    let audio = new Audio(bass)
    audio.play()
    const boxbass = [{"id":"0","since":"2022-10-18T01:50:00","till":"2022-10-18T02:55:00","channelUuid":"8"}]
    epg.push(boxbass[0])
  }

  const two = () => {
    let audio = new Audio(chant)
    audio.play()
  }

  const three = () => {
    let audio = new Audio(fx)
    audio.play()
  }

  const four = () => {
    let audio = new Audio(hat)
    audio.play()
  }

  const five = () => {
    let audio = new Audio(cymbals)
    audio.play()
  }

  const six = () => {
    let audio = new Audio(kick)
    audio.play()
  }

  const seven = () => {
    let audio = new Audio(clap)
    audio.play()
  }

  const eight = () => {
    let audio = new Audio(snare)
    audio.play()
  }

  const nine = () => {
    let audio = new Audio(bass)
    audio.play()
  }

  return (
    <div className="midi-board">
      <button onClick={one}>Bass</button>
      <button onClick={two}>Chant</button>
      <button onClick={three}>FX</button>
      <button onClick={four}>Hat</button>
      <button onClick={five}>Cymbals</button>
      <button onClick={six}>Kick</button>
      <button onClick={seven}>Clap</button>
      <button onClick={eight}>Snare</button>
      <button onClick={nine}>Bass</button>
    </div>
  );
}

export default MidiBoard;