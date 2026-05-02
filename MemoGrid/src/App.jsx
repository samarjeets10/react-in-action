import { useEffect, useState } from 'react';
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
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] =  useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    // shuffel the cards
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    ));

    setCards(finalCards);
    setMoves(0);
    setScore(0);
    setMatchedCards([]);
    setFlippedCards([]);

  }


  // Render on page loade :
  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    // dont alow clicking if the card is already flipped or matched

    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) {
      return;
    }

    // update card flipped state:

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);
          const newMatchedCards = cards.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return {...c, isMatched: true };
            } else {
              return c;
            }
          });

          setCards((prev) => 
            prev.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return {...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 200);

      } else {
        // flip back card 1 and card 2 :

        setTimeout(() => {
          const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return {...c, isFlipped: false};
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);
          setIsLocked(false);
          setFlippedCards([]);

        }, 1000);
      }
    }

    setMoves((prev) => prev + 1);

  }

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

        <div className='cards-grid'>
          {
            cards.map((card) => (
              <Card card={card} onClick={handleCardClick} key={card.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
