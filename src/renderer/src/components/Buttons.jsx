/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react'
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
  recentPitch,
  setRecentPitch,
  recentAdjustment,
  setRecentAdjustment,
  globalVol,
  currentCol,
  recordedAudio
}) {
  const [localVolume, setLocalVolume] = useState(100) // Local volume for this button
  const [localPitch, setLocalPitch] = useState(10) // Local pitch for this button
  const [localAdjustment, setLocalAdjustment] = useState(0) // Local adjustment for this button
  const [enabled, toggleEnabled] = useState(false)
  const [recent, setRecent] = useState(false)

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

  // Update local values when this button becomes the recent instrument
  useEffect(() => {
    if (recentInst === defaultSound && recentVolume !== localVolume) {
      setLocalVolume(recentVolume)
    }
    if (recentInst === defaultSound && recentPitch !== localPitch) {
      setLocalPitch(recentPitch)
    }
    if (recentInst === defaultSound && recentAdjustment !== localAdjustment) {
      setLocalAdjustment(recentAdjustment)
    }
  }, [
    recentInst,
    defaultSound,
    recentVolume,
    recentPitch,
    recentAdjustment,
    localVolume,
    localPitch,
    localAdjustment
  ])

  useEffect(() => {
    if (recentInst === defaultSound && recordedAudio) {
      sound = recordedAudio
    }
  }, [recordedAudio, recentInst, defaultSound])

  const playOneShot = useCallback(() => {
    console.log(Math.round(localAdjustment / 100))
    const startTime = Math.max(
      0,
      Math.min(sound.duration, sound.duration * (localAdjustment / 100))
    )
    sound.currentTime = isFinite(startTime) ? startTime : 0
    sound.loop = false
    sound.volume = sound.volume * (globalVol / 100) * (localVolume / 100)
    sound.playbackRate = localPitch / 10
    sound.play()
  }, [globalVol, localVolume, localPitch, sound, localAdjustment])

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
    setRecentAdjustment(localAdjustment)
  }

  useEffect(() => {
    if (enabled && currentCol === parseInt(soundID)) {
      playOneShot()
    }
  }, [currentCol, enabled, soundID, playOneShot])

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
  recentAdjustment,
  setRecentAdjustment,
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
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
        recentAdjustment={recentAdjustment}
        setRecentAdjustment={setRecentAdjustment}
        currentCol={currentCol}
      />
    </>
  )
}

export default Buttons
