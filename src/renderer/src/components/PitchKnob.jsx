/* eslint-disable react/prop-types */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

const PitchKnob = React.memo(({ setRecentPitch, recentPitch, recentInst, onChange }) => {
  const [value, setValue] = useState(10) // Default pitch value
  const [recentInstLocal, setRecentInstLocal] = useState('')

  // Update the knob value when recentInst changes
  useEffect(() => {
    if (recentInst !== recentInstLocal) {
      setRecentInstLocal(recentInst) // Track the most recent instrument
      setValue(recentPitch) // Update the knob value to match the recent pitch
    }
  }, [recentInst, recentPitch, recentInstLocal])

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
      setRecentPitch(roundedValue) // Update the parent state
    },
    [debouncedOnChange, setRecentPitch]
  )

  return (
    <div className="bg-blue-400 control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={5}
        max={20}
        initialValue={10}
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
          percentage={(value - 5) / 15}
        />
      </Knob>
      <label>Speed {value / 10}</label>
    </div>
  )
})

PitchKnob.displayName = 'PitchKnob'

export default PitchKnob
