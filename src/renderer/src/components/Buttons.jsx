/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useRef } from 'react'
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
  registerOneShot,
  recordedAudio,
  setBlob
}) {
  const [localVolume, setLocalVolume] = useState(100) // Local volume for this button
  const [localPitch, setLocalPitch] = useState(10) // Local pitch for this button
  const [localAdjustment, setLocalAdjustment] = useState(0) // Local adjustment for this button
  const [enabled, toggleEnabled] = useState(false)
  const [recent, setRecent] = useState(false)
  const [duration, setDuration] = useState(0)
  const soundRef = useRef(null)
  const [soundName, setSoundName] = useState(defaultSound)

  useEffect(() => {
    if (defaultSound === 'cowbell') {
      soundRef.current = new Audio(cowbell)
    } else if (defaultSound === 'hi') {
      soundRef.current = new Audio(hi)
    } else if (defaultSound === 'kick') {
      soundRef.current = new Audio(kick)
    } else if (defaultSound === 'snare') {
      soundRef.current = new Audio(snare)
    } else {
      soundRef.current = new Audio()
    }

    soundRef.current.preload = 'auto'
    soundRef.current.loop = 'false'
    soundRef.current.preservesPitch = 'false'
    soundRef.onloadeddata = () => {
      setDuration(soundRef.current.duration)
    }
  }, [defaultSound])

  // Update local values when this button becomes the recent instrument
  useEffect(() => {
    if (recentInst === defaultSound && recentVolume !== localVolume) {
      setLocalVolume(recentVolume)
    }
    if (recentInst === defaultSound && recentPitch !== localPitch) {
      setLocalPitch(recentPitch)
    }
    if (recentInst === defaultSound && recentAdjustment !== localAdjustment) {
      console.log(recentAdjustment)
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

  // Update sound when recordedAudio changes and this button is the recent instrument
  useEffect(() => {
    if (recentInst === defaultSound && recordedAudio && enabled) {
      console.log(`Received audio: ${recordedAudio} setBlob={setBlob}`)
      soundRef.current = recordedAudio
    }
  }, [recordedAudio, recentInst, defaultSound, enabled])

  useEffect(() => {
    if (recentInst === defaultSound && recordedAudio && enabled) {
      setSoundName(`Custom ${soundID}`)
    }
  }, [recordedAudio])

  const playOneShot = useCallback(() => {
    const sound = soundRef.current
    if (!sound || !enabled) return
    const startTime = Math.max(0, Math.min(duration, duration * (localAdjustment / 100)))
    sound.currentTime = isFinite(startTime) ? startTime : 0
    sound.loop = false
    sound.volume = 1 * (globalVol / 100) * (localVolume / 100)
    sound.playbackRate = localPitch / 10
    sound.play()
  }, [globalVol, localVolume, localPitch, localAdjustment, enabled, duration])

  const playOneShotFlip = useCallback(() => {
    const sound = soundRef.current
    if (!sound || enabled) return
    const startTime = Math.max(0, Math.min(duration, duration * (localAdjustment / 100)))
    sound.currentTime = isFinite(startTime) ? startTime : 0
    sound.loop = false
    sound.volume = 1 * (globalVol / 100) * (localVolume / 100)
    sound.playbackRate = localPitch / 10
    sound.play()
  }, [globalVol, localVolume, localPitch, localAdjustment, enabled, duration])

  useEffect(() => {
    if (registerOneShot) {
      registerOneShot(soundID, playOneShot) // Register playOneShot with registerOneShot
    }
  }, [registerOneShot, soundID, playOneShot])

  const handleClick = () => {
    toggleEnabled(!enabled)
    playOneShotFlip(!enabled)
    const buttons = document.querySelectorAll('.inst-button')

    buttons.forEach((button) => {
      button.classList.remove('recent-inst')
    })

    setRecent(true)
    setRecentInst(defaultSound)
    setRecentVolume(localVolume)
    setRecentPitch(localPitch)
    setRecentAdjustment(localAdjustment)

    fetch(soundRef.current.src)
      .then((response) => response.blob())
      .then((audioBlob) => {
        setBlob(audioBlob)
      })
      .catch((error) => {
        console.error('Error fetching audio:', error)
      })
  }

  return (
    <button
      className={`inst-button ${enabled ? 'active-inst' : ''} ${recent ? 'recent-inst' : ''}`}
      onClick={handleClick}
      id={'sound-' + soundID}
    >
      {soundName}
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
  registerOneShot,
  recordedAudio,
  setBlob
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
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
        registerOneShot={registerOneShot}
        recordedAudio={recordedAudio}
        setBlob={setBlob}
      />
    </>
  )
}

export default Buttons
