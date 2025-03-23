import { useEffect } from 'react'
import { AudioVisualizer } from 'react-audio-visualize'

const Visualizer = ({ blob }) => {
  // Initialize the recorder controls using the hook

  // Get the recorded audio blob
  useEffect(() => {
    if (!blob) return

    console.log(new Blob())
    console.log(blob)
  }, [blob])

  return (
    <>
      <audio src={blob} />

      <AudioVisualizer
        blob={blob.size > 0 ? blob : null}
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
