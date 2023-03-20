import React from 'react';
import Header from '../components/header/header';
import TimelineT from '../components/timeline/timeline';
import TrackStatus from '../components/track-status/track-status';
import MidiBoard from '../components/midi-board/midi-board';
import AudioSelector from '../components/audio-selector/audio-selector';
import { midi } from '../assets/schemas.js';
import './window.css';

function Window() {

  return (
    <div className="window">
      <Header />
      <TimelineT />
      <TrackStatus />
      <MidiBoard midi={[...midi]}/>
      <AudioSelector midi={[...midi]}/>
    </div>
  ); 
}

export default Window;