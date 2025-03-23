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
  globalVol
}) {
  const [enabled, toggleEnabled] = useState(false)
  const [recent, setRecent] = useState(false)
  const [localVolume, setLocalVolume] = useState(100)
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

  if (recentInst === defaultSound && recentVolume !== localVolume) {
    setLocalVolume(recentVolume)
  }

  const playOneShot = () => {
    sound.currentTime = 0
    sound.loop = false
    sound.volume = sound.volume * (globalVol / 100) * (localVolume / 100)
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
  }

  useEffect(() => {}, [])

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

function Buttons({ setRecentInst, recentInst, globalVol, recentVolume, setRecentVolume }) {
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
      />
      <Button
        soundID="2"
        defaultSound="FX2"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
      />
      <Button
        soundID="3"
        defaultSound="cowbell"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
      />
      <Button
        soundID="4"
        defaultSound="hi"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
      />
      <Button
        soundID="5"
        defaultSound="kick"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
      />
      <Button
        soundID="6"
        defaultSound="snare"
        setRecentInst={setRecentInst}
        recentInst={recentInst}
        globalVol={globalVol}
        recentVolume={recentVolume}
        setRecentVolume={setRecentVolume}
      />
    </>
  )
}

export default Buttons
