export function Sequencer() {
  return (
    <div id="main-content" className="flex flex-col h-full content-stretch">
      <div id="controls" className="flex flex-row h-[25vh]">
        <div className="bg-slate-950 flex-grow">
          <h1>Active:</h1>
        </div>
        <div className=" bg-yellow-950 w-[30vw]">
          <h1>Global:</h1>
        </div>
      </div>
      <div id="sequencing-view" className="h-[75vh] bg-green-800 flex flex-row">
        <div
          id="inst-button-container"
          className="bg-blue-400 w-[20vw] flex flex-col justify-around items-center"
        >
          <button className="inst-button">FX</button>
          <button className="inst-button">Bell</button>
          <button className="inst-button">Hat</button>
          <button className="inst-button">Snare</button>
          <button className="inst-button">Kick</button>
        </div>
        <div id="beat-button-container" className="bg-red-400 flex-grow">
          <button></button>
        </div>
      </div>
    </div>
  )
}
