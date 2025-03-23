/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

const GainKnob = React.memo(({ setRecentVolume, recentVolume, recentInst, onChange }) => {
  const [value, setValue] = useState(0) // Default volume value
  const [recentInstLocal, setRecentInstLocal] = useState('')

  // Update the knob value when recentInst changes
  useEffect(() => {
    if (recentInst !== recentInstLocal) {
      setRecentInstLocal(recentInst) // Track the most recent instrument
      setValue(recentVolume) // Update the knob value to match the recent volume
    }
  }, [recentInst, recentVolume, recentInstLocal])

  const debouncedOnChange = useCallback(
    debounce((newValue) => {
      console.log('Volume changed:', newValue)
    }, 300),
    [onChange]
  )

  const handleChange = useCallback(
    (newValue) => {
      const roundedValue = Math.round(newValue)
      setValue(roundedValue) // Update the local state
      setRecentVolume(roundedValue) // Update the parent state
      debouncedOnChange(roundedValue)
    },
    [debouncedOnChange, setRecentVolume]
  )

  return (
    <div className="bg-blue-400 control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={0}
        max={100}
        value={value} // Bind the knob's value to the state
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
          percentage={value / 100}
        />
      </Knob>
      <label>Volume: {value}</label>
    </div>
  )
})

export default GainKnob
