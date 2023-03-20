import React from 'react';

import Overdrive from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Overdrive .wav';
import Chant from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Chants/Chant Noise.wav';
import Fx from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/FX/Zap 001.wav';
import Hat from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/HiHat Closed 001 Widened.wav';
import Cymbals from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/Cymbal Ride 001 Smooth.wav';
import Knock from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Kick/Kick 002 Knock.wav';
import Clap from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Clap 001.wav';
import Snare from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Snare 001.wav';
import Bell from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Instruments/Bell 001 Revved.wav';

import Knaw from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Knaw.wav';
import Hey from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Chants/Chant Hey 002.wav';
import Blast from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/FX/Gun Shot.wav';
import Triangle from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/Triangle 001.wav';
import Shaker from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Hats & Cymbals/Shaker 001.wav';
import Timpani from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Instruments/Timpani 001 Revved.wav';
import Orchestra from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Instruments/Orchestra Hit 001 Revved.wav';
import Kick from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/Kick/Kick 007 Noisy.wav';
import Drop from '../../assets/TriSamples - 808 Trapstep Pack Vol 1/FX/Drop FX.wav';
import { midi } from '../../assets/schemas.js'
import './audio-selector.css';

const audioSound = [Overdrive, Chant, Fx, Hat, Cymbals, Knock, Clap, Snare, Bell, Knaw, Hey, Blast, Triangle, Shaker, Timpani, Orchestra, Kick, Drop]

function useForceUpdate(){
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}

function AudioSelector(props) {

  // call your hook here
  const forceUpdate = useForceUpdate();

  const one = () => {
    let audio = new Audio(audioSound[midi[9].track])
    audio.play()
    if (!midi[9].select){
      document.getElementById("1").style.backgroundColor = "#FFCB9B"
      midi[9].select = true
    }
    else if (midi[9].select){
      document.getElementById("1").style.backgroundColor = "#CBA682"
      midi[9].select = false
    }
    forceUpdate()
  }

  const two = () => {
    let audio = new Audio(audioSound[midi[10].track])
    audio.play()
    if (!midi[10].select){
      document.getElementById("2").style.backgroundColor = "#FFCB9B"
      midi[10].select = true
    }
    else if (midi[10].select){
      document.getElementById("2").style.backgroundColor = "#CBA682"
      midi[10].select = false
    }
    forceUpdate()
  }

  const three = () => {
    let audio = new Audio(audioSound[midi[11].track])
    audio.play()
    if (!midi[11].select){
      document.getElementById("3").style.backgroundColor = "#FFCB9B"
      midi[11].select = true
    }
    else if (midi[11].select){
      document.getElementById("3").style.backgroundColor = "#CBA682"
      midi[11].select = false
    }
    forceUpdate()
  }

  const four = () => {
    let audio = new Audio(audioSound[midi[12].track])
    audio.play()
    if (!midi[12].select){
      document.getElementById("4").style.backgroundColor = "#FFCB9B"
      midi[12].select = true
    }
    else if (midi[12].select){
      document.getElementById("4").style.backgroundColor = "#CBA682"
      midi[12].select = false
    }
    forceUpdate()
  }

  const five = () => {
    let audio = new Audio(audioSound[midi[13].track])
    audio.play()
    if (!midi[13].select){
      document.getElementById("5").style.backgroundColor = "#FFCB9B"
      midi[13].select = true
    }
    else if (midi[13].select){
      document.getElementById("5").style.backgroundColor = "#CBA682"
      midi[13].select = false
    }
    forceUpdate()
  }

  const six = () => {
    let audio = new Audio(audioSound[midi[14].track])
    audio.play()
    if (!midi[14].select){
      document.getElementById("6").style.backgroundColor = "#FFCB9B"
      midi[14].select = true
    }
    else if (midi[14].select){
      document.getElementById("6").style.backgroundColor = "#CBA682"
      midi[14].select = false
    }
    forceUpdate()
  }

  const seven = () => {
    let audio = new Audio(audioSound[midi[15].track])
    audio.play()
    if (!midi[15].select){
      document.getElementById("7").style.backgroundColor = "#FFCB9B"
      midi[15].select = true
    }
    else if (midi[15].select){
      document.getElementById("7").style.backgroundColor = "#CBA682"
      midi[15].select = false
    }
    forceUpdate()
  }

  const eight = () => {
    let audio = new Audio(audioSound[midi[16].track])
    audio.play()
    if (!midi[16].select){
      document.getElementById("8").style.backgroundColor = "#FFCB9B"
      midi[16].select = true
    }
    else if (midi[16].select){
      document.getElementById("8").style.backgroundColor = "#CBA682"
      midi[16].select = false
    }
    forceUpdate()
  }

  const nine = () => {
    let audio = new Audio(audioSound[midi[17].track])
    audio.play()
    if (!midi[17].select){
      document.getElementById("9").style.backgroundColor = "#FFCB9B"
      midi[17].select = true
    }
    else if (midi[17].select){
      document.getElementById("9").style.backgroundColor = "#CBA682"
      midi[17].select = false
    }
    forceUpdate()
  }

  return (
    <div className="audio-selector" key={props}>
      <div className='scroll'>
        <button id='1' onClick={one}>{midi[9].name}</button>
        <button id='2' onClick={two}>{midi[10].name}</button>
        <button id='3' onClick={three}>{midi[11].name}</button>
        <button id='4' onClick={four}>{midi[12].name}</button>
        <button id='5' onClick={five}>{midi[13].name}</button>
        <button id='6' onClick={six}>{midi[14].name}</button>
        <button id='7' onClick={seven}>{midi[15].name}</button>
        <button id='8' onClick={eight}>{midi[16].name}</button>
        <button id='9' onClick={nine}>{midi[17].name}</button>
      </div>
      
    </div>
  );
}

export default AudioSelector;