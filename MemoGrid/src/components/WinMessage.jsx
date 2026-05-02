import React from 'react'

function WinMessage({ moves }) {
  return (
    <div className='win-message'>
      <h2>You Wins Congratulations!</h2>
      <p>You Completed the in {moves} moves</p>
    </div>
  )
}

export default WinMessage
