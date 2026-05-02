import React from 'react'

function Card({ card, onClick }) {
  return (
    <div className='card' onClick={() => onClick()}>
        <div className="card-front">
            ?
        </div>
        <div className="card-back">
            {card.value}
        </div>
    </div>
  )
}

export default Card
