import React, { useEffect, useState } from 'react'
import GameHeader from './components/GameHeader'
import Card from './components/Card'

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍋",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍋",
  "🍓",
  "🥝",
  "🍑",
  "🍒"
]

function App() {

  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    // shuffel the cards


    console.log(cardValues);
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFliped: false,
        isMatched: false
      }
    ));

    setCards(finalCards);
  }

  useEffect(() => {
    initializeGame();
  }, [])

  return (
    <>
      <div className="app">
        <GameHeader score={3} moves={10} />

        <div className='cards-grid'>
          {
            cards.map((card) => (
              <Card card={card} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
