/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import cowbell from '../assets/sounds/cowbell.wav'
import hi from '../assets/sounds/hi-hat.wav'
import kick from '../assets/sounds/kick.wav'
import snare from '../assets/sounds/snare.wav'

function Button({ soundID, defaultSound, setRecentInst }) {
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

  const playOneShot = () => {
    sound.currentTime = 0
    sound.loop = false
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

function Buttons({ setRecentInst }) {
  return (
    <>
      <Button soundID="1" defaultSound="FX" setRecentInst={setRecentInst} />
      <Button soundID="2" defaultSound="FX2" setRecentInst={setRecentInst} />
      <Button soundID="3" defaultSound="cowbell" setRecentInst={setRecentInst} />
      <Button soundID="4" defaultSound="hi" setRecentInst={setRecentInst} />
      <Button soundID="5" defaultSound="kick" setRecentInst={setRecentInst} />
      <Button soundID="6" defaultSound="snare" setRecentInst={setRecentInst} />
    </>
  )
}

export default Buttons
