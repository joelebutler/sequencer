/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

const TempoKnob = React.memo(({ onChange }) => {
  const [value, setValue] = useState(120) // Default tempo value

  const debouncedOnChange = useCallback(
    debounce((newValue) => {
      onChange(newValue)
    }, 300),
    [onChange]
  )

  const handleChange = useCallback(
    (newValue) => {
      const roundedValue = Math.round(newValue)
      setValue(roundedValue)
      debouncedOnChange(roundedValue)
    },
    [debouncedOnChange]
  )

  return (
    <div className="bg-blue-400 control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={60}
        max={180}
        initialValue={120}
        onChange={handleChange}
      >
        <Scale tickWidth={2} tickHeight={2} radius={45} />
        <circle r="35" cx="50" cy="50" fill="#FC5A96" />
        <Pointer
          width={2}
          height={35}
          radius={10}
          type="rect"
          color="#FC5A96"
          percentage={(value - 60) / 120} // Ensure the pointer matches the knob value
        />
      </Knob>
      <label>Tempo: {value}</label>
    </div>
  )
})

export default TempoKnob
