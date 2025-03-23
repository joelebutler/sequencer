/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

function Beat({ soundID, position, currentCol, handleGrabHit }) {
  const [enabled, toggleEnabled] = useState(false)
  const handleClick = () => {
    toggleEnabled(!enabled)
  }
  useEffect(() => {
    if (enabled && currentCol == position) {
      console.log('hit!' + soundID + position)
      handleGrabHit(soundID)
    }
  }, [currentCol, enabled, soundID, position, handleGrabHit])
  return (
    <button
      className={`beat-button ${enabled ? 'beat-enabled' : ''} beat-col-${position}`}
      onClick={handleClick}
      id={'beat' + '-' + soundID + '-' + position}
    ></button>
  )
}
function BeatRow({ soundID, currentCol, handleGrabHit }) {
  return (
    <div className="beat-row flex flex-row grow-0">
      <Beat
        soundID={`${soundID}`}
        position="1"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="2"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="3"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="4"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="5"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="6"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="7"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="8"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="9"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="10"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="11"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="12"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="13"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="14"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="15"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
      <Beat
        soundID={`${soundID}`}
        position="16"
        currentCol={currentCol}
        handleGrabHit={handleGrabHit}
      ></Beat>
    </div>
  )
}

export default BeatRow
