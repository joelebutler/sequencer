import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback } from 'react'

const PitchKnob = React.memo(() => {
  const [value, setValue] = useState(-50)

  const handleChange = useCallback((newValue) => {
    const roundedValue = Math.round(newValue)
    setValue(roundedValue)
  })

  return (
    <div className="bg-blue-400 control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={-50}
        max={100}
        onChange={handleChange}
      >
        <Scale tickWidth={2} tickHeight={2} radius={45} />
        <circle r="35" cx="50" cy="50" fill="#FC5A96" />,
        <Pointer width={2} height={35} radius={10} type="rect" color="#FC5A96" />
      </Knob>
      <label>Pitch: {value}</label>
    </div>
  )
})

export default PitchKnob
