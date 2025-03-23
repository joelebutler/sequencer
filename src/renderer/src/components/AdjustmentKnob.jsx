/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback, useEffect } from 'react'

const AdjustmentKnob = React.memo(({ setRecentAdjustment, recentAdjustment, recentInst }) => {
  const [value, setValue] = useState(0) // Default adjustment value
  const [recentInstLocal, setRecentInstLocal] = useState('')

  // Update the knob value when recentInst changes
  useEffect(() => {
    if (recentInst !== recentInstLocal) {
      setRecentInstLocal(recentInst) // Track the most recent instrument
      setValue(recentAdjustment) // Update the knob value to match the recent adjustment
    }
  }, [recentInst, recentAdjustment, recentInstLocal, setRecentAdjustment])

  const handleChange = useCallback((newValue) => {
    const roundedValue = Math.round(newValue)
    setValue(roundedValue) // Update the local state
    setRecentAdjustment(roundedValue)
  }, [])

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
      <label>Start Position</label>
    </div>
  )
})

export default AdjustmentKnob
