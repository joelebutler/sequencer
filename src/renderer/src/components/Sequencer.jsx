import { useState, useRef } from 'react'
import Buttons from './Buttons.jsx'
import GainKnob from './GainKnob.jsx'
import TempoKnob from './TempoKnob.jsx'
import PitchKnob from './PitchKnob.jsx'
import AdjustmentKnob from './AdjustmentKnob.jsx'
import GlobalKnob from './GlobalKnob.jsx'
import Visualizer from './Visualizer.jsx'
import { FaCircle } from 'react-icons/fa'
import { FaCirclePlay, FaCircleUp, FaCircleStop, FaCirclePause, FaSquare } from 'react-icons/fa6'
import BeatRow from './BeatRow.jsx'
import RecentSelection from './RecentSelection.jsx'
import Metronome from './Metronome.jsx'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

export function Sequencer() {
  const [tempo, setTempo] = useState(60)
  const [globalVol, setGlobalVol] = useState(80)
  const [recentInst, setRecentInst] = useState('') // State to track the most recent instrument
  const [recentVolume, setRecentVolume] = useState(0.8) // State to track the most recent volume
  const [recentPitch, setRecentPitch] = useState(10) // State to track the most recent pitch
  const [currentCol, setCurrentCol] = useState(0)
  const [recentAdjustment, setRecentAdjustment] = useState(0) // State to track the most recent adjustment
  const [recordedAudio, setRecordedAudio] = useState(null)
  const [paused, setPaused] = useState(false)
  const [stopped, setStopped] = useState(true)
  const [blob, setBlob] = useState(new Blob())

  const storeOneShot = useRef({})

  // Function to register a playOneShot function for a specific soundID
  const registerOneShot = (soundID, playOneShot) => {
    storeOneShot.current[soundID] = playOneShot
  }

  const handleGrabHit = (soundID) => {
    console.log(soundID)
    if (soundID) {
      storeOneShot.current[soundID]()
    }
    document.querySelectorAll('.inst-button').forEach((button) => {
      if (button.dataset.soundId === soundID) {
        button.callOneShot(soundID)
      }
    })
  }

  const recorderControls = useAudioRecorder()

  const handleTempoChange = (newTempo) => {
    // console.log(newTempo)
    setTempo(newTempo)
  }
  const handleGlobalVolChange = (newGlobalVol) => {
    // console.log(newGlobalVol)
    setGlobalVol(newGlobalVol)
  }

  const handleRecordingComplete = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob)
    setBlob(audioBlob)
    const audio = new Audio(audioUrl)
    setRecordedAudio(audio)
  }

  const handleStartRecording = () => {
    recorderControls.startRecording()
    console.log('recording audio...')
    console.log(recorderControls.isRecording)
    console.log(recorderControls)
  }

  const handleStopRecording = () => {
    recorderControls.stopRecording()
    console.log('recording stoppped...')
    console.log(recorderControls.isRecording)
  }

  return (
    <div id="main-content" className="flex flex-col h-full content-stretch">
      <Metronome
        tempo={tempo}
        setCurrentCol={setCurrentCol}
        currentCol={currentCol}
        paused={paused}
        stopped={stopped}
      />
      <div className="flex flex-row justify-between p-[20px] border-slate-900 border-b-[3px] mb-[10px]">
        <h2>Michaeland SEQ-01</h2>
        <h2>A sequencer by Joel Butler & Michael Vitale</h2>
      </div>
      <div
        id="controls"
        className="flex flex-row h-fit min-h-[25vh] border-slate-900 border-b-[3px] pb-[10px]  justify-around flex-wrap md:flex-nowrap"
      >
        <div
          id="active-controls"
          className="flex-grow flex flex-row justify-around flex-wrap h-fit items-center relative"
        >
          <div className="flex-grow flex flex-row flex-wrap">
            <h2 className="top-[15px] w-full text-center">Active Instrument Controls</h2>
            <div className="flex-grow flex flex-row justify-around items-center relative h-full">
              <GainKnob
                setRecentVolume={setRecentVolume}
                recentVolume={recentVolume}
                recentInst={recentInst}
              />
              <PitchKnob
                setRecentPitch={setRecentPitch}
                recentPitch={recentPitch}
                recentInst={recentInst}
              />
              <AdjustmentKnob
                setRecentAdjustment={setRecentAdjustment}
                recentAdjustment={recentAdjustment}
                recentInst={recentInst}
              />
            </div>
          </div>
          <div className="bg-stone-900 relative w-[400px] h-[200px] rounded-lg p-5">
            <RecentSelection recentInst={recentInst}></RecentSelection>
            <div className="relative w-full h-3/4">
              <Visualizer blob={blob} recentAdjustment={recentAdjustment} />
            </div>
            {/* Audio Controller */}
            <div className="flex flex-row justify-between">
              <div hidden>
                <AudioRecorder
                  onRecordingComplete={handleRecordingComplete}
                  recorderControls={recorderControls}
                />
              </div>
              <button
                className="waveform-control record-btn"
                onClick={recorderControls.isRecording ? handleStopRecording : handleStartRecording}
              >
                {recorderControls.isRecording ? <FaSquare /> : <FaCircle />}
              </button>
              <button
                onClick={function () {
                  setPaused(false)
                  setStopped(false)
                }}
                className="waveform-control play-btn"
              >
                <FaCirclePlay />
              </button>
              <button onClick={() => setStopped(true)} className="waveform-control stop-btn">
                <FaCircleStop />
              </button>
              <button className="waveform-control pause-btn">
                <FaCirclePause />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-grow flex flex-col flex-wrap">
          <h2 className="relative top-[15px] w-full text-center">Global Controls</h2>
          <div
            id="global-controls"
            className="flex-grow flex flex-row justify-around flex-wrap h-fit items-center relative"
          >
            <TempoKnob onChange={handleTempoChange} />
            <GlobalKnob onChange={handleGlobalVolChange} />
          </div>
        </div>
      </div>
      <div id="sequencing-view" className="flex flex-row">
        <div
          id="inst-button-container"
          className="min-w-[15vw] ml-[5px] flex flex-col items-center overflow-y-hidden"
        >
          <div className="beat-pos">
            <span>&nbsp;</span>
          </div>
          <Buttons
            setRecentInst={setRecentInst}
            recentInst={recentInst}
            recentVolume={recentVolume}
            setRecentVolume={setRecentVolume}
            recentPitch={recentPitch}
            setRecentPitch={setRecentPitch}
            recentAdjustment={recentAdjustment}
            setRecentAdjustment={setRecentAdjustment}
            globalVol={globalVol}
            registerOneShot={registerOneShot}
            recordedAudio={recordedAudio}
            setBlob={setBlob}
          />{' '}
        </div>
        <div
          id="beat-button-zone"
          className="pl-[10px] pr-[10px] flex-grow max-w-[85vw] overflow-y-hidden flex float-left"
        >
          <div id="beat-button-container" className="flex flex-col items-center w-full">
            <div className="beat-pos beat-row flex flex-row grow-0">
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
            <BeatRow soundID="1" handleGrabHit={handleGrabHit} currentCol={currentCol} />
            <BeatRow soundID="2" handleGrabHit={handleGrabHit} currentCol={currentCol} />
            <BeatRow soundID="3" handleGrabHit={handleGrabHit} currentCol={currentCol} />
            <BeatRow soundID="4" handleGrabHit={handleGrabHit} currentCol={currentCol} />
            <BeatRow soundID="5" handleGrabHit={handleGrabHit} currentCol={currentCol} />
            <BeatRow soundID="6" handleGrabHit={handleGrabHit} currentCol={currentCol} />
          </div>
        </div>
      </div>
    </div>
  )
}
