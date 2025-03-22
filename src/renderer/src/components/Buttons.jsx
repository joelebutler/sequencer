/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import cowbell from '../assets/sounds/cowbell.wav'
import hi from '../assets/sounds/hi-hat.wav'
import kick from '../assets/sounds/kick.wav'
import snare from '../assets/sounds/snare.wav'

function Button({ soundID, defaultSound }) {
  const [playing, togglePlay] = useState(false)
  let sound = null
  if (defaultSound === 'cowbell') {
    sound = new Audio(cowbell)
  } else if (defaultSound === 'hi') {
    sound = new Audio(hi)
  } else if (defaultSound === 'kick') {
    sound = new Audio(kick)
  } else if (defaultSound === 'snare') {
    sound = new Audio(snare)
  }

  const handleClick = () => {
    togglePlay(!playing)
  }

  useEffect(() => {
    const playSound = () => {
      sound.play()
    }
    let interval
    if (playing) {
      interval = setInterval(playSound, 500)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [playing, sound])

  return (
    <button
      className={`inst-button ${playing ? 'active-inst' : null}`}
      onClick={handleClick}
      id={'sound-' - soundID}
    >
      {defaultSound}
    </button>
  )
}

function Buttons() {
  return (
    <>
      <Button soundID="1" defaultSound="FX" />
      <Button soundID="2" defaultSound="FX2" />
      <Button soundID="3" defaultSound="cowbell" />
      <Button soundID="4" defaultSound="hi" />
      <Button soundID="5" defaultSound="kick" />
      <Button soundID="6" defaultSound="snare" />
    </>
  )
}

export default Buttons
