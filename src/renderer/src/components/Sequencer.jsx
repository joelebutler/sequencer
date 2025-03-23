import React, { useState } from 'react'
import Buttons from './Buttons.jsx'
import GainKnob from './GainKnob.jsx'
import TempoKnob from './TempoKnob.jsx'
import PitchKnob from './PitchKnob.jsx'
import TimingKnob from './TimingKnob.jsx'
import GlobalKnob from './GlobalKnob.jsx'
import Visualizer from './Visualizer.jsx'
import { FaCircle } from 'react-icons/fa'
import { FaCirclePlay, FaCircleUp, FaCircleStop, FaCirclePause } from 'react-icons/fa6'
import BeatRow from './BeatRow.jsx'
import RecentSelection from './RecentSelection.jsx'
import Metronome from './Metronome.jsx'

export function Sequencer() {
  const [tempo, setTempo] = useState(60)
  const [recentInst, setRecentInst] = useState('') // State to track the most recent instrument

  const handleTempoChange = (newTempo) => {
    setTempo(newTempo)
  }

  return (
    <div id="main-content" className="flex flex-col h-full content-stretch">
      <Metronome tempo={tempo} />
      <div className="flex flex-row justify-between p-[20px]">
        <h2>Michaeland TR-909</h2>
        <h2>A sequencer by Joel Butler & Michael Vitale</h2>
      </div>
      <div id="controls" className="flex flex-row h-[25vh]">
        <div
          id="active-controls"
          className="flex-grow flex flex-row justify-around items-center relative"
        >
          <RecentSelection recentInst={recentInst} /> {/* Pass recentInst as a prop */}
          <GainKnob />
          <PitchKnob />
          <TimingKnob />
          <div className="bg-red-500 w-[300px] h-[200px]">
            <div className="bg-blue-800 w-full h-3/4">
              <label>Waveform</label>
              <Visualizer />
            </div>
            <div className="flex flex-row justify-between">
              <button className="waveform-control record-btn">
                <FaCircle />
              </button>
              <button className="waveform-control pause-btn">
                <FaCirclePause />
              </button>
              <button className="waveform-control play-btn">
                <FaCirclePlay />
              </button>
              <button className="waveform-control stop-btn">
                <FaCircleStop />
              </button>
              <button className="waveform-control upload-btn">
                <FaCircleUp />
              </button>
            </div>
          </div>
        </div>
        <div id="global-controls" className=" w-[30vw] flex flex-row justify-around items-center">
          <TempoKnob onChange={handleTempoChange} />
          <GlobalKnob />
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
          <Buttons setRecentInst={setRecentInst} /> {/* Pass setRecentInst as a prop */}
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
            <BeatRow soundID="1" />
            <BeatRow soundID="2" />
            <BeatRow soundID="3" />
            <BeatRow soundID="4" />
            <BeatRow soundID="5" />
            <BeatRow soundID="6" />
          </div>
        </div>
      </div>
    </div>
  )
}
