import DAppFeatures from "./DAppFeatures";

const DAppFeature = () => {
  return (
    <div
      className={`absolute top-[1958px]  bg-neutral-900 w-screen h-[568px]  text-left text-5xl text-neutral-100 font-body-semibold`}
    >
      <div className="absolute h-[12.68%] top-[7.04%] bottom-[80.28%] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-start justify-between py-4 px-0 box-border text-13xl">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">
          App features
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <div className="absolute h-[11.27%] top-[19.72%] bottom-[69.01%] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-center justify-center text-center">
        <div className="flex-1 relative leading-[32px]">
          Discover DanceApp's features designed to enhance your dance experience
        </div>
      </div>
      <DAppFeatures />
    </div>
  );
};

export default DAppFeature;
