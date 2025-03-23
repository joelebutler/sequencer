/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

const AdjustmentKnob = React.memo(({ setRecentAdjustment, recentAdjustment, recentInst, onChange }) => {
  const [value, setValue] = useState(0) // Default adjustment value
  const [recentInstLocal, setRecentInstLocal] = useState('')

  // Update the knob value when recentInst changes
  useEffect(() => {
    if (recentInst !== recentInstLocal) {
      setRecentInstLocal(recentInst) // Track the most recent instrument
      setValue(recentAdjustment) // Update the knob value to match the recent adjustment
    }
  }, [recentInst, recentAdjustment, recentInstLocal])

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
      setRecentAdjustment(roundedValue) // Update the parent state
    },
    [debouncedOnChange, setRecentAdjustment]
  )

  return (
    <div className="control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={0}
        max={100}
        className={'generalKnob'}
        value={value} // Bind the knob's value to the state
        onChange={handleChange}
      >
        <Scale tickWidth={2} tickHeight={2} radius={45} />
        <circle r="35" cx="50" cy="50" fill="#FC5A96" />
        <Pointer
          width={5}
          height={25}
          radius={20}
          type="rect"
          className={'generalPointer'}
          percentage={value / 100} // Map value to percentage
        />
      </Knob>
      <label>Adjustment: {value}</label>
    </div>
  )
})

export default AdjustmentKnob
