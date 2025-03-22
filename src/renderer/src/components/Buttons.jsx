/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import cowbell from '../assets/sounds/cowbell.wav'
import hi from '../assets/sounds/hi-hat.wav'
import kick from '../assets/sounds/kick.wav'
import snare from '../assets/sounds/snare.wav'

function Button({ name }) {
  const [playing, togglePlay] = useState(false)
  let sound = null
  if (name === 'cowbell') {
    sound = new Audio(cowbell)
  } else if (name === 'hi') {
    sound = new Audio(hi)
  } else if (name === 'kick') {
    sound = new Audio(kick)
  } else if (name === 'snare') {
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
    <button className="inst-button" onClick={handleClick} id={playing ? 'active-inst' : null}>
      {name}
    </button>
  )
}

function Buttons() {
  return (
    <>
      <Button name="FX" />
      <Button name="FX2" />
      <Button name="cowbell" />
      <Button name="hi" />
      <Button name="kick" />
      <Button name="snare" />
    </>
  )
}

export default Buttons
