import { useEffect, useState } from 'react'
import words from "./words.json"
import Hangman from './components/Hangman'
import Hangmanword from './components/Hangmanword'
import Keyboard from './components/Keyboard'
import GameOverModal from './components/GameOverModel'

function App() {
  const [getOnClick, setOnClick] = useState<string[]>([]);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [randWord, setRandWord] = useState<string>(() =>
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const MAX_WRONG = 6;

  useEffect(() => {
    const wordLetters = randWord.split("");
    const allGuessed = wordLetters.every(letter => getOnClick.includes(letter));
    if (allGuessed) {
      setIsWinner(true);
      setIsGameOver(true);
    } else if (wrongCount >= MAX_WRONG) {
      setIsWinner(false);
      setIsGameOver(true);
    }
  }, [getOnClick, wrongCount]);

  function onGuess(letter: string) {
    if (getOnClick.includes(letter) || isGameOver) return;
    setOnClick([...getOnClick, letter]);
  }
  console.log(randWord)

  function onWrongUpdate(count: number) {
    setWrongCount(count);
  }

  function resetGame() {
    setRandWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setOnClick([]);
    setWrongCount(0);
    setIsGameOver(false);
    setIsWinner(false);
  }

 
  return (
    <>
      <div className='flex flex-col gap-[2rem] items-center mt-2 overflow-x-hidden min-h-screen'>
        <div className='flex gap-2 text-[2rem] text-center'>Hangman Game with TS</div>
        <Hangman numberOfGuesses={wrongCount} />
        <Hangmanword words={randWord} getWords={getOnClick} onwrong={onWrongUpdate} />
        <Keyboard onGuess={onGuess} guessedLetters={getOnClick} />
        

      

      </div>

      {isGameOver && (
        <GameOverModal isWinner={isWinner} word={randWord} onRestart={resetGame} />
      )}

    </>
  );
}

export default App;
