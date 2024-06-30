import PropTypes from "prop-types";

const Card = (props) => {
  const {
    className = "",
    likeText,
    viewText,
    sizeDesktopCardBackgroundImage,
  } = props;
  return (
    <div
      className={`self-stretch flex-1 relative rounded-xl overflow-hidden bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-sm text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.5))] h-[50px]" />
      <div className="absolute bottom-[10px] left-[24px] flex flex-row items-center justify-start gap-[2px]">
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlineeye.svg"
        />
        <div className="relative leading-[20px] font-semibold">122</div>
      </div>
      <div className="absolute right-[24px] bottom-[10px] flex flex-row items-center justify-start gap-[2px]">
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconhealthoutlineheart.svg"
        />
        <div className="relative leading-[20px] font-semibold">54</div>
      </div>
      <img
        className="absolute top-[8px] right-[8px] w-6 h-6 overflow-hidden object-cover"
        alt=""
        src="/hugeiconinterfacesolidmorehorizontal@2x.png"
      />
    </div>
  );
};

export default Card;
