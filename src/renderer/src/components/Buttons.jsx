import React from 'react'
import cowbell from '../assets/sounds/cowbell.wav'
import kick from '../assets/sounds/kick.wav'

function Button({ name, sound }) {
    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
    }
  return <button className="sound-btn" onClick={playSound}>{name}</button>
}

function Buttons() {
  return (
    <div className='buttons'>
        <Button name="cowbell" sound={cowbell}/>
        <Button name="kick" sound={kick} />
    </div>
    )
}

export default Buttons
