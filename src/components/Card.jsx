const Card = () => {
  return (
    <div className="self-stretch flex-1 relative rounded-2xl overflow-hidden bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-neutral-100 font-sf-pro-text">
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-2xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.8))] h-[73px]" />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-center p-4 box-border gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img className="w-6 relative h-6" alt="" src="/heart-icons.svg" />
          <div className="relative tracking-[-0.41px] leading-[24px]">783</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfaceoutlineeye.svg"
          />
          <div className="relative tracking-[-0.41px] leading-[24px]">1043</div>
        </div>
      </div>
      <div className="absolute top-[8px] right-[8px] rounded-xl bg-white-40 flex flex-row items-start justify-end p-2">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/hugeiconinterfacesolidmorehorizontal@2x.png"
        />
      </div>
    </div>
  );
};

export default Card;
