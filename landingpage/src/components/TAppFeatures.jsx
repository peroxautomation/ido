import TAppFeatures1 from "./TAppFeatures1";
const TAppFeatures = () => {
  return (
    <div
      className={`absolute top-[1264px] left-[calc(50%_-_512px)] bg-neutral-900 w-[1024px] h-[768px] overflow-hidden text-center text-5xl text-neutral-100 font-button-1-regular`}>
      <TAppFeatures1 />
      <div className="absolute top-[112px] left-[calc(50%_-_374px)] w-[696px] flex flex-row items-center justify-center text-base">
        <div className="flex-1 relative leading-[24px]">
          Discover DanceApp's features designed to enhance your dance experience
        </div>
      </div>
      <div className="absolute top-[40px] left-[calc(50%_-_398px)] w-[744px] flex flex-row items-start justify-between py-4 px-0 box-border">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[32px] font-semibold">
          App features
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-2@2x.png"
        />
      </div>
    </div>
  );
};

export default TAppFeatures;
