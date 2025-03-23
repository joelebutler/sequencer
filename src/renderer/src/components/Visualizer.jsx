import { useEffect } from 'react'
import { AudioVisualizer } from 'react-audio-visualize'

const Visualizer = ({ blob }) => {
  // Initialize the recorder controls using the hook

  // Get the recorded audio blob
  useEffect(() => {
    if (!blob || blob.type !== 'audio/wav') return

    //console.log(blob)
  }, [blob])

  return (
    <>
      <AudioVisualizer
        blob={blob.size > 0 && blob.type === 'audio/wav' ? blob : null}
        width={300}
        height={75}
        barWidth={1}
        gap={0}
        barColor={'#f76565'}
      />
    </>
  )
}

export default Visualizer
