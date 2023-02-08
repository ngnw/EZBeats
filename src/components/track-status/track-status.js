import React from 'react';
import './track-status.css';
import pause from '../../assets/track-status/pause.png';
import backward from '../../assets/track-status/backward.png';
import play from '../../assets/track-status/play.png';
import forward from '../../assets/track-status/forward.png';
import record from '../../assets/track-status/record.png';

function TrackStatus() {
  return (
    <div className="track-status">
      <button id='pause'>
      <img src={pause} alt="pause"/>
      </button>
      <button id='backward'>
      <img src={backward} alt="backward"/>
      </button>
      <button id='play'>
      <img src={play} alt="play"/>
      </button>
      <button id='forward'>
      <img src={forward} alt="forward"/>
      </button>
      <button id='record'>
      <img src={record} alt="record"/>
      </button>
    </div>
  );
}

export default TrackStatus;