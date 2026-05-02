import GameHeader from './components/GameHeader'
import Card from './components/Card'
import WinMessage from './components/WinMessage';
import { useGameLogic } from './hooks/GameLogic';

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

  const {cards, score, moves, handleCardClick, initializeGame, isGameComplete} = useGameLogic(cardValues);

  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

        {
          isGameComplete ? <WinMessage moves={moves}/> : ""
        }

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
