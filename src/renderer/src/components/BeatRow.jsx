/* eslint-disable react/prop-types */
import { useState } from 'react'

function Beat({ soundID, position }) {
  const [enabled, toggleEnabled] = useState(false)
  const handleClick = () => {
    toggleEnabled(!enabled)
  }
  return (
    <button
      className={`beat-button ${enabled ? 'beat-enabled' : ''} beat-col-${position}`}
      onClick={handleClick}
      id={'beat' + '-' + soundID + '-' + position}
    ></button>
  )
}
function BeatRow({ soundID }) {
  return (
    <div className="beat-row flex flex-row grow-0">
      <Beat soundID={`${soundID}`} position="1"></Beat>
      <Beat soundID={`${soundID}`} position="2"></Beat>
      <Beat soundID={`${soundID}`} position="3"></Beat>
      <Beat soundID={`${soundID}`} position="4"></Beat>
      <Beat soundID={`${soundID}`} position="5"></Beat>
      <Beat soundID={`${soundID}`} position="6"></Beat>
      <Beat soundID={`${soundID}`} position="7"></Beat>
      <Beat soundID={`${soundID}`} position="8"></Beat>
      <Beat soundID={`${soundID}`} position="9"></Beat>
      <Beat soundID={`${soundID}`} position="10"></Beat>
      <Beat soundID={`${soundID}`} position="11"></Beat>
      <Beat soundID={`${soundID}`} position="12"></Beat>
      <Beat soundID={`${soundID}`} position="13"></Beat>
      <Beat soundID={`${soundID}`} position="14"></Beat>
      <Beat soundID={`${soundID}`} position="15"></Beat>
      <Beat soundID={`${soundID}`} position="16"></Beat>
    </div>
  )
}

export default BeatRow
