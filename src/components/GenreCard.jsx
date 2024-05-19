import { useMemo } from "react";

const GenreCard = ({ genreName, genreNameLeft }) => {
  const genreNameStyle = useMemo(() => {
    return {
      left: genreNameLeft,
    };
  }, [genreNameLeft]);

  return (
    <div className="self-stretch flex-auto relative rounded-2xl  bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-neutral-100 font-body-regular">
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] h-9" />
      <div
        className="absolute bottom-[7px] left-[32px] leading-[24px]"
        style={genreNameStyle}
      >
        {genreName}
      </div>
    </div>
  );
};

export default GenreCard;
