/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const Metronome = ({ tempo, setCurrentCol, currentCol, paused, stopped }) => {
  const [ms, setMs] = useState(200)

  // Update the interval duration when the tempo changes
  useEffect(() => {
    setMs(60000 / tempo)
  }, [tempo])

  useEffect(() => {
    console.log('Effect triggered:', { paused, stopped }) // Debugging log

    // Clear any existing interval
    let interval

    if (stopped) {
      console.log('Metronome stopped') // Debugging log
      // Reset to the first column when stopped
      setCurrentCol(0)
      let allButtons = document.getElementsByClassName('beat-button')
      for (let button of allButtons) {
        button.classList.remove('active-beat-col')
      }

      let activeBeatButtons = document.getElementsByClassName('beat-col-1')
      for (let button of activeBeatButtons) {
        button.classList.add('active-beat-col')
      }
      return
    }
    if (paused) {
      return
    }
    console.log('Metronome running') // Debugging log
    // Start the interval if not paused or stopped
    interval = setInterval(() => {
      setCurrentCol((prevCol) => {
        // Clear active column styles
        let allButtons = document.getElementsByClassName('beat-button')
        for (let button of allButtons) {
          button.classList.remove('active-beat-col')
        }

        // Highlight the current column
        let nextCol = prevCol + 1 <= 16 ? prevCol + 1 : 1
        let activeBeatButtons = document.getElementsByClassName('beat-col-' + nextCol)
        for (let button of activeBeatButtons) {
          button.classList.add('active-beat-col')
        }

        return nextCol
      })
    }, ms / 4)

    // Cleanup the interval on component unmount or dependency change
    return () => clearInterval(interval)
  }, [ms, paused, stopped, setCurrentCol])

  return <span id="metronome"></span>
}

export default Metronome
