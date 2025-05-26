const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[50px] right-[-20px]" />
);

const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0" />
);

const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[115px] right-[-85px] rotate-[-30deg] origin-left-bottom" />
);

const LEFT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[112px] right-[0px] rotate-[30deg] origin-right-bottom" />
);

const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[230px] right-[-70px] rotate-[60deg] origin-left-bottom" />
);

const LEFT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[230px] right-[-20px] rotate-[-60deg] origin-right-bottom" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function Hangman({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative mr-20">
    {
      BODY_PARTS.slice(0,numberOfGuesses)
    }
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}
