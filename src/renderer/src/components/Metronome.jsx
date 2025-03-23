import { useState, useEffect } from 'react'

const Metronome = ({ tempo }) => {
  const [currentCol, setCurrentCol] = useState(0)
  const [ms, setMs] = useState(200)
  const rows = []

  useEffect(() => {
    setMs(60000 / tempo)
  }, [tempo])

  useEffect(() => {
    const interval = setInterval(() => {
      let allButtons = document.getElementsByClassName('beat-button')
      for (let button of allButtons) {
        button.classList.remove('active-beat-col')
      }

      let activeBeatButtons = document.getElementsByClassName('beat-col-' + currentCol)

      for (let button of activeBeatButtons) {
        button.classList.add('active-beat-col')
      }
      setCurrentCol(currentCol + 1 <= 16 ? currentCol + 1 : 1)
    }, ms / 4)

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [rows.length, currentCol, ms])

  return <span id="metronome"></span>
}

export default Metronome
