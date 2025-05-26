import { useEffect } from "react";

const Hangmanword = ({
  words,
  getWords,
  onwrong,
}: {
  words: string;
  getWords: string[];
  onwrong: (wrongCount: number) => void;
}) => {
  const word = words.toUpperCase();

  useEffect(() => {
    const wrongLetters = getWords.filter((letter) => !word.includes(letter));
    onwrong(wrongLetters.length);
  }, [getWords, word, onwrong]);

  return (
    <div className='flex gap-3 font-bold text-center font-mono uppercase text-5xl'>
      {word.split("").map((letter, index) => (
        <div key={index}>
          {getWords.includes(letter) ? letter : "_"}
        </div>
      ))}
    </div>
  );
};

export default Hangmanword;
