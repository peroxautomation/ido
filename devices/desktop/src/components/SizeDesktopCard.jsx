import { useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SizeDesktopCard = (props) => {
  const {
    className = "",
    likeText = "783",
    viewText = "1043",
    sizeDesktopCardBackgroundImage,
    onClick,
  } = props;
  const navigate = useNavigate();

  const sizeDesktopCardStyle = useMemo(() => {
    return {
      backgroundImage: sizeDesktopCardBackgroundImage,
    };
  }, [sizeDesktopCardBackgroundImage]);

  async function redirectUser() {
    navigate("/d-moves");
  }

  return (
    <div
      className={`w-[252px] rounded-2xl relative stretch flex-1 h-[252px] overflow-hidden bg-[url('/public/sizedesktop-card@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-neutral-100 font-sf-pro-text ${className}`}
      style={sizeDesktopCardStyle}
    >
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.8))] h-[73px]" />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-center p-4 box-border gap-[24px]">
        <div className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-start gap-[8px]">
          <img className="w-6 relative h-6" alt="" src="/heart-icons.svg" />
          <div className="relative tracking-[-0.41px] leading-[24px]">
            {likeText}
          </div>
        </div>
        <div className="cursor-pointer hover:opacity-80 flex flex-row items-start justify-end gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfaceoutlineeye1.svg"
          />
          <div className="relative tracking-[-0.41px] leading-[24px]">
            {viewText}
          </div>
        </div>
      </div>
      <div
        className="absolute top-[8px] right-[8px] rounded-xl bg-white-40 flex flex-row items-start justify-end p-2"
        onClick={redirectUser}
      >
        <img
          className="cursor-pointer hover:opacity-80 w-6 relative h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/hugeiconinterfacesolidmorehorizontal1@2x.png"
        />
      </div>
    </div>
  );
};

export default SizeDesktopCard;
