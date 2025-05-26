

type Props = {
  isWinner: boolean;
  word: string;
  onRestart: () => void;
}

export default function GameOverModal({ isWinner, word, onRestart }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 text-center shadow-xl max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4">{isWinner ? "🎉 You Win!" : "💀 You Lose!"}</h2>
        {!isWinner && <p className="mb-4 text-xl">The word was: <span className='font-mono'>{word}</span></p>}
        <button
          onClick={onRestart}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
