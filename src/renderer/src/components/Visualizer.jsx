import React, { useState, useRef } from 'react'
import { AudioVisualizer } from 'react-audio-visualize'

function Visualizer() {
  const [blob, setBlob] = useState(null)
  const visualizerRef = useRef(null)

  // set blob somewhere in code

  return (
    <div>
      {blob && (
        <AudioVisualizer
          ref={visualizerRef}
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={'#f76565'}
        />
      )}
    </div>
  )
}

export default Visualizer;
