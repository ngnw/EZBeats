import React from 'react';
import './track-status.css';
import Pause from '../../assets/track-status/pause.png';
import Backward from '../../assets/track-status/backward.png';
import Play from '../../assets/track-status/play.png';
import Forward from '../../assets/track-status/forward.png';
import Record from '../../assets/track-status/record.png';

function TrackStatus() {

  const canvas = React.useRef();
  let ctx = null;
  let xPos = 0;
  let playing = false;
  
  React.useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  React.useEffect(() => {
    const r2Info = { w: 861, h: 178 };
    const r2Style = { borderColor: '#19f', borderWidth: 2 };
    updateVert(r2Info, r2Style);
 
  }, []);

  const updateVert = (info, style = {}) => {
    const { w, h } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;
    if(!playing) {
        window.cancelAnimationFrame(updateVert);
        return;
    }
    xPos = xPos + 1;

    if(xPos >= 861) {
        // stop animation...
        xPos = 0;
        playing = false;

    }

    // reset rectangle content to erase previous line...
    ctx.clearRect(0, 0, w, h);

    // draw new one...
    ctx.beginPath();

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.moveTo(xPos, 0);
    ctx.lineTo(xPos, h);
    ctx.stroke();

    if(playing) window.requestAnimationFrame(updateVert);
  }

  const pause = () => {
    playing = false;
    document.getElementById("play").style.background = "#CBA682";
    document.getElementById("pause").style.background = "#FFCB9B";
    document.getElementById("record").style.background = "#5B5B5B";
  }

  const backward = () => {
    xPos = xPos - 10
  }

  const play = () => {
      playing = true;
      const r3Info = { w: 861, h: 178 };
      const r3Style = { borderColor: '#19f', borderWidth: 2 };
      updateVert(r3Info, r3Style);
      document.getElementById("play").style.background = "#FFCB9B";
      document.getElementById("pause").style.background = "#5B5B5B";
      document.getElementById("record").style.background = "#5B5B5B";
  }

  const forward = () => {
    xPos = xPos + 10
  }

  const record = () => {
    playing = true;
    xPos = 0
    const r3Info = { w: 861, h: 178 };
    const r3Style = { borderColor: '#19f', borderWidth: 2 };
    updateVert(r3Info, r3Style);
    document.getElementById("record").style.background = "#FFCB9B";
    document.getElementById("pause").style.background = "#5B5B5B";
    document.getElementById("play").style.background = "#CBA682";
}


  return (
    <div className="track-status">
      <canvas ref={canvas}></canvas>
      <button id='pause' onClick={pause}>
      <img src={Pause} alt="pause"/>
      </button>
      <button id='backward' onClick={backward}>
      <img src={Backward} alt="backward"/>
      </button>
      <button id='play' onClick={play}>
      <img src={Play} alt="play"/>
      </button>
      <button id='forward' onClick={forward}>
      <img src={Forward} alt="forward"/>
      </button>
      <button id='record' onClick={record}>
      <img src={Record} alt="record"/>
      </button>
    </div>
  );
}

export default TrackStatus;