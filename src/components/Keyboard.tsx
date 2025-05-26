type Props = {
  onGuess: (letter: string) => void;
  guessedLetters: string[];
};

const keys = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

const Keyboard = ({ onGuess, guessedLetters }: Props) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center p-4'>
      {keys.map((value, index) => {
        const isGuessed = guessedLetters.includes(value);
        return (
          <span
            key={index}
            onClick={() => {
              if (!isGuessed) onGuess(value);
            }}
            className={`w-12 h-12 flex items-center justify-center rounded-md shadow text-lg font-bold cursor-pointer transition
              ${isGuessed ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}
            `}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default Keyboard;
