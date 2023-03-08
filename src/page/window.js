import React from 'react';
import Header from '../components/header/header';
import Timeline from '../components/timeline/timeline';
import TrackStatus from '../components/track-status/track-status';
import MidiBoard from '../components/midi-board/midi-board';
import AudioSelector from '../components/audio-selector/audio-selector';
import './window.css';
import TimelineT from '../components/timeline/timeline';

function Window() {
  return (
    <div className="window">
      <Header />
      <TimelineT />
      <TrackStatus />
      <MidiBoard />
      <AudioSelector />
    </div>
  );
}

export default Window;