/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback } from 'react'
import { debounce } from 'lodash'

const GainKnob = React.memo(({ setRecentVolume, recentVolume, recentInst }) => {
  const [value, setValue] = useState(0)
  const [recentInstLocal, setRecentInstLocal] = useState('')

  if (recentInst !== recentInstLocal) {
    setRecentInstLocal(recentInst)
    setValue(recentVolume)
  }

  const handleChange = useCallback(
    (newValue) => {
      const roundedValue = Math.round(newValue)
      setValue(roundedValue)
      setRecentVolume(roundedValue)
    },
    [setRecentVolume]
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
        initialValue={0}
        className="gainKnob"
        onChange={handleChange}
      >
        <Scale tickWidth={2} tickHeight={2} radius={45} />
        <circle r="35" cx="50" cy="50" />,
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
