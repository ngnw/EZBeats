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
import { epg } from '../timeline/schemas.js';
import './midi-board.css';


const audioSound = [Overdrive, Chant, Fx, Hat, Cymbals, Knock, Clap, Snare, Bell, Knaw, Hey, Blast, Triangle, Shaker, Timpani, Orchestra, Kick, Drop]

function useForceUpdate(){
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}

function MidiBoard(props) {
  // call your hook here
  const forceUpdate = useForceUpdate();

  const one = () => {
    let audio = new Audio(audioSound[midi[0].track])
    audio.play()
    const boxbass = [{"channelUuid":"0","id":"8","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#DC0385"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[0]
        midi[0] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    }  

  }

  const two = () => {
    let audio = new Audio(audioSound[midi[1].track])
    audio.play()
    const boxbass = [{"channelUuid":"1","id":"gshdth","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#FFCD33"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[1]
        midi[1] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    }
  }

  const three = () => {
    let audio = new Audio(audioSound[midi[2].track])
    audio.play()
    const boxbass = [{"channelUuid":"2","id":"gfhhgfx","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#663399"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[2]
        midi[2] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const four = () => {
    let audio = new Audio(audioSound[midi[3].track])
    audio.play()
    const boxbass = [{"channelUuid":"3","id":"gfhfx","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#02CED2"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[3]
        midi[3] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const five = () => {
    let audio = new Audio(audioSound[midi[4].track])
    audio.play()
    const boxbass = [{"channelUuid":"4","id":"ngfxg","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#FF5C5A"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[4]
        midi[4] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const six = () => {
    let audio = new Audio(audioSound[midi[5].track])
    audio.play()
    const boxbass = [{"channelUuid":"5","id":"thrtrh","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#8AC741"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[5]
        midi[5] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const seven = () => {
    let audio = new Audio(audioSound[midi[6].track])
    audio.play()
    const boxbass = [{"channelUuid":"6","id":"hdztht","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#EC2124"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[6]
        midi[6] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const eight = () => {
    let audio = new Audio(audioSound[midi[7].track])
    audio.play()
    const boxbass = [{"channelUuid":"7","id":"dthtz","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"blue"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[7]
        midi[7] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  const nine = () => {
    let audio = new Audio(audioSound[midi[8].track])
    audio.play()
    const boxbass = [{"channelUuid":"8","id":"waAdaFe","since":"2022-02-02T00:00:00","till":"2022-02-02T00:55:00","title":"","description":"","image":"","color":"#FF9A33"}]
    epg.push(boxbass[0])
    for (let i = 9; i < 17; i++){
      if (midi[i].select === true){
        var temp = midi[8]
        midi[8] = midi[i]
        midi[i] = temp
        forceUpdate()
        break
      }
    } 
  }

  return (
    <div className="midi-board" key={props}>
      <button id="1m" onClick={one}>{midi[0].name}</button>
      <button id="2m" onClick={two}>{midi[1].name}</button>
      <button id="3m" onClick={three}>{midi[2].name}</button>
      <button id="4m" onClick={four}>{midi[3].name}</button>
      <button id="5m" onClick={five}>{midi[4].name}</button>
      <button id="6m" onClick={six}>{midi[5].name}</button>
      <button id="7m" onClick={seven}>{midi[6].name}</button>
      <button id="8m" onClick={eight}>{midi[7].name}</button>
      <button id="9m" onClick={nine}>{midi[8].name}</button>
    </div>
  );

}
export default MidiBoard;