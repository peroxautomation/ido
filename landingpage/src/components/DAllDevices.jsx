const DAllDevices = () => {
  return (
    <div
      className={`absolute top-[934px] bg-neutral-100 w-screen h-[1024px] overflow-hidden text-center text-13xl text-neutral-600 font-body-semibold`}
    >
      <img
        className="absolute top-[216px] left-[calc(50%_-_624px)] w-[1248px] h-[748px] object-cover"
        alt=""
        src="/mockups-1@2x.png"
      />
      <div className="absolute top-[40px] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-start justify-between py-4 px-0 box-border text-left text-neutral-900">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">
          Accessible on all devices
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <div className="absolute top-[112px] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-center justify-center text-5xl">
        <div className="flex-1 relative leading-[32px]">
          Experience seamless connectivity and functionality with our app,
          designed to be fully responsive and compatible across all your
          devices. Whether you're at home, at work, or on the go, our app adapts
          perfectly to your lifestyle
        </div>
      </div>
      <div className="absolute top-[916px] left-[calc(50%_-_294px)] text-base leading-[24px] inline-block w-[605px]">
        No matter which device you use, our app ensures a consistent and
        high-quality experience, so you can stay connected and efficient
        anytime, anywhere.
      </div>
    </div>
  );
};

export default DAllDevices;
