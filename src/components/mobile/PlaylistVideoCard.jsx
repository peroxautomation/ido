import { useMemo } from "react";

const PlaylistVideoCard = () => {
  const { cardBackgroundImage } = props;
  const card1Style = useMemo(() => {
    return {
      backgroundImage: cardBackgroundImage,
    };
  }, [cardBackgroundImage]);

  return (
    <div
      className={`w-[10rem] relative rounded-xl h-[10rem] overflow-hidden shrink-0 bg-[url('/public/card4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[0.875rem] text-neutral-100 font-button-1-regular `}
      style={card1Style}
    >
      <div className="absolute top-[6.875rem] left-[0rem] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.5))] w-[10rem] h-[3.125rem]" />
      <div className="absolute top-[8.25rem] left-[1.5rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlineeye.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">122</div>
      </div>
      <div className="absolute top-[8.25rem] left-[6.313rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconhealthoutlineheart.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">54</div>
      </div>
      <img
        className="absolute top-[0.5rem] right-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden object-cover"
        alt=""
        src="/hugeiconinterfacesolidmorehorizontal@2x.png"
      />
    </div>
  );
};

export default PlaylistVideoCard;
