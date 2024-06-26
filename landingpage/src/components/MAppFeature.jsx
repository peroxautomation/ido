import MAppFeatures from "./MAppFeatures";

const MAppFeature = () => {
  return (
    <div
      className={`absolute top-[1130px] left-[calc(50%_-_215px)] bg-neutral-900 w-[430px] h-[1276px] overflow-hidden text-center text-xl text-neutral-100 font-button-2-regular`}
    >
      <div className="absolute top-[40px] left-[calc(50%_-_168px)] w-[335px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <b className="relative leading-[28px]">App features</b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-3@2x.png"
        />
      </div>
      <div className="absolute top-[84px] left-[calc(50%_-_168px)] w-[335px] flex flex-row items-center justify-center text-base">
        <div className="flex-1 relative leading-[24px]">
          Discover DanceApp's features designed to enhance your dance experience
        </div>
      </div>
      <MAppFeatures />
    </div>
  );
};

export default MAppFeature;
