import { useEffect } from 'react'
import { AudioVisualizer } from 'react-audio-visualize'

const Visualizer = ({ blob, recentAdjustment }) => {
  // Initialize the recorder controls using the hook
  // Get the recorded audio blob
  useEffect(() => {
    console.log(blob)
    if (!blob || blob.type !== 'audio/wav') return

    //console.log(blob)
  }, [blob])

  return (
    <>
      <div
        className="absolute h-[70%] top-[15%] w-[2px] bg-stone-50"
        style={{ left: `${recentAdjustment}%` }}
      ></div>
      <AudioVisualizer
        blob={blob.size > 0 && blob.type !== 'text/html' ? blob : null}
        width={300}
        height={75}
        barWidth={1}
        gap={0}
        className={'visualizer'}
        barColor={'#f1f5f9'}
      />
    </>
  )
}

export default Visualizer
