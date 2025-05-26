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
      <div className='flex flex-col gap-[2rem] items-center mt-2'>
        <div className='flex gap-2 text-[2rem] text-center'>Hangman Game   </div>
        <Hangman numberOfGuesses={wrongCount} />
        <Hangmanword words={randWord} getWords={getOnClick} onwrong={onWrongUpdate} />
        <Keyboard onGuess={onGuess} guessedLetters={getOnClick} />
        <div className="fixed bottom-3 mt-2  flex items-center gap-2 text-black text-sm  bg-opacity-70 px-4 py-2 rounded-full shadow-md">
  <span>Made with ❤️ by Pushkar</span>
  <a
    href="https://github.com/your-username/your-repo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="GitHub"
      className="w-6 h-6 hover:scale-110 transition-transform duration-300"
    />
  </a>
</div>

      

      </div>

      {isGameOver && (
        <GameOverModal isWinner={isWinner} word={randWord} onRestart={resetGame} />
      )}

    </>
  );
}

export default App;
