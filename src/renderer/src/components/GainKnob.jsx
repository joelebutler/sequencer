import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback } from 'react'

const GainKnob = React.memo(() => {
  const [value, setValue] = useState(0)

  const handleChange = useCallback((newValue) => {
    const roundedValue = Math.round(newValue)
    setValue(roundedValue)
  })

  return (
    <Knob
      size={100}
      angleOffset={220}
      angleRange={280}
      steps={10}
      min={0}
      max={100}
      className="gainKnob"
      onChange={(value) => console.log(value)}
    >
      <Scale tickWidth={2} tickHeight={2} radius={45} />
      <circle r="35" cx="50" cy="50" />,
      <Pointer width={2} height={35} radius={10} type="rect" color="#FC5A96" />
    </Knob>
  )
})

export default GainKnob
