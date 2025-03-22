export function Sequencer() {
  return (
    <div id="main-content" className="flex flex-col h-full content-stretch">
      <div id="controls" className="flex flex-row h-[25vh]">
        <div
          id="active-controls"
          className="bg-slate-500 flex-grow flex flex-row justify-around items-center"
        >
          <div className="bg-blue-400 control-knob-zone">
            <div className="bg-green-500 h-[100px]"></div>
            <label>Gain</label>
          </div>
          <div className="bg-blue-400 control-knob-zone">
            <div className="bg-green-500 h-[100px]"></div>
            <label>Pitch</label>
          </div>
          <div className="bg-blue-400 control-knob-zone">
            <div className="bg-green-500 h-[100px]"></div>
            <label>Timing</label>
          </div>
          <div className="bg-red-500 w-[300px] h-[200px]">
            <div className="bg-blue-800 w-full h-3/4">
              <label>Waveform</label>
            </div>
            <div className="flex flex-row justify-between">
              <button className="waveform-control">O</button>
              <button className="waveform-control">Upl</button>
              <button className="waveform-control">Upl</button>
              <button className="waveform-control">Upl</button>
              <button className="waveform-control">Upl</button>
            </div>
          </div>
        </div>
        <div
          id="global-controls"
          className=" bg-yellow-950 w-[30vw] flex flex-row justify-around items-center"
        >
          <div className="bg-blue-400 control-knob-zone">
            <div className="bg-green-500 h-[100px]"></div>
            <label>Timing</label>
          </div>
          <div className="bg-blue-400 control-knob-zone">
            <div className="bg-green-500 h-[100px]"></div>
            <label>Timing</label>
          </div>
        </div>
      </div>
      <div id="sequencing-view" className="h-[75vh] bg-green-800 flex flex-row">
        <div
          id="inst-button-container"
          className="bg-blue-400 m-[10px] min-w-[20vw] flex flex-col justify-around items-center"
        >
          <div className="beat-pos flex flex-row grow-0">
            <span>1</span>
          </div>
          <button className="inst-button">FX</button>
          <button className="inst-button">Bell</button>
          <button className="inst-button">Hat</button>
          <button className="inst-button">Snare</button>
          <button className="inst-button">Kick</button>
          <button className="inst-button">Kick</button>
        </div>
        <div
          id="beat-button-container"
          className="bg-red-400 m-[10px] flex-grow max-w-[80vw] overflow-y-auto flex flex-col justify-around items-center"
        >
          <div className="beat-pos flex flex-row grow-0">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
          <div className="beat-row flex flex-row grow-0">
            <button className="beat-button bg-orange-500"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
            <button className="beat-button"></button>
          </div>
        </div>
      </div>
    </div>
  )
}
