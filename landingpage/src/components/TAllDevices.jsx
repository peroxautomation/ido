const TAllDevices = () => {
  return (
    <div
      className={`absolute top-[546px] left-[calc(50%_-_512px)] bg-neutral-100 w-[1024px] h-[718px] overflow-hidden text-center text-base text-neutral-600 font-button-1-regular`}>
      <div className="absolute top-[112px] left-[calc(50%_-_372px)] w-[744px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px]">
          Experience seamless connectivity and functionality with our app,
          designed to be fully responsive and compatible across all your
          devices. Whether you're at home, at work, or on the go, our app adapts
          perfectly to your lifestyle
        </div>
      </div>
      <div className="absolute top-[40px] left-[calc(50%_-_372px)] w-[744px] flex flex-row items-start justify-between py-4 px-0 box-border text-left text-5xl text-neutral-900">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[32px] font-semibold">
          Accessible on all devices
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <img
        className="absolute top-[184px] left-[calc(50%_-_372px)] w-[744px] h-[446px] object-cover"
        alt=""
        src="/mockups-1@2x.png"
      />
      <div className="absolute top-[630px] left-[calc(50%_-_302px)] leading-[24px] text-black inline-block w-[605px]">
        No matter which device you use, our app ensures a consistent and
        high-quality experience, so you can stay connected and efficient
        anytime, anywhere.
      </div>
    </div>
  );
};

export default TAllDevices;
