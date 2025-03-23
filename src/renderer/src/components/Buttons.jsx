/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import cowbell from '../assets/sounds/cowbell.wav'
import hi from '../assets/sounds/hi-hat.wav'
import kick from '../assets/sounds/kick.wav'
import snare from '../assets/sounds/snare.wav'

function Button({
  soundID,
  defaultSound,
  setRecentInst,
  recentInst,
  recentVolume,
  setRecentVolume,
  globalVol,
  recentPitch,
  setRecentPitch,
  currentCol
}) {
  const [enabled, toggleEnabled] = useState(false)
  const [recent, setRecent] = useState(false)
  const [localVolume, setLocalVolume] = useState(100)
  const [localPitch, setLocalPitch] = useState(10)
  let sound = null
  if (defaultSound === 'cowbell') {
    sound = new Audio(cowbell)
  } else if (defaultSound === 'hi') {
    sound = new Audio(hi)
  } else if (defaultSound === 'kick') {
    sound = new Audio(kick)
  } else if (defaultSound === 'snare') {
    sound = new Audio(snare)
  } else {
    sound = new Audio()
  }
  sound.preload = 'auto'
  sound.loop = 'false'
  sound.preservesPitch = 'false'

  // Set local volumes and pitches if they are different from recent
  if (recentInst === defaultSound && recentVolume !== localVolume) {
    setLocalVolume(recentVolume)
  }
  if (recentInst === defaultSound && recentPitch !== localPitch) {
    setLocalPitch(recentPitch)
  }

  const playOneShot = () => {
    sound.currentTime = 0
    sound.loop = false
    sound.volume = sound.volume * (globalVol / 100) * (localVolume / 100)
    sound.playbackRate = localPitch / 10
    sound.play()
  }
  const handleClick = () => {
    toggleEnabled(!enabled)
    playOneShot()
    const buttons = document.querySelectorAll('.inst-button')

    buttons.forEach((button) => {
      button.classList.remove('recent-inst')
    })

    setRecent(true)
    setRecentInst(defaultSound)
    setRecentVolume(localVolume)
    setRecentPitch(localPitch)
  }

  useEffect(() => {
    if (enabled && currentCol === parseInt(soundID)) {
      playOneShot()
    }
  }, [currentCol, enabled, soundID])

  return (
    <button
      className={`inst-button ${enabled ? 'active-inst' : ''} ${recent ? 'recent-inst' : ''}`}
      onClick={handleClick}
      id={'sound-' + soundID}
    >
      {defaultSound}
    </button>
  )
}

function Buttons({
  setRecentInst,
  recentInst,
  globalVol,
  recentVolume,
  setRecentVolume,
  recentPitch,
  setRecentPitch,
  currentCol
}) {
  return (
    <>
      <Button
        soundID="1"
        defaultSound="FX"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
      <Button
        soundID="2"
        defaultSound="FX2"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
      <Button
        soundID="3"
        defaultSound="cowbell"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
      <Button
        soundID="4"
        defaultSound="hi"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
      <Button
        soundID="5"
        defaultSound="kick"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
      <Button
        soundID="6"
        defaultSound="snare"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
        recentPitch={recentPitch}
        setRecentPitch={setRecentPitch}
        currentCol={currentCol}
      />
    </>
  )
}

export default Buttons
