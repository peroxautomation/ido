const MAllDevices = () => {
  return (
    <div
      className={`absolute top-[625px] left-[calc(50%_-_215px)] bg-neutral-100 w-[430px] h-[505px] overflow-hidden text-center text-xl text-neutral-600 font-button-2-regular`}
    >
      <div className="absolute top-[24px] left-[calc(50%_-_168px)] w-[335px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border text-neutral-900">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <b className="relative leading-[28px]">Accessible on all devices</b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-3@2x.png"
        />
      </div>
      <div className="absolute top-[68px] left-[calc(50%_-_168px)] flex flex-row items-center justify-center text-sm">
        <div className="w-[335px] relative leading-[20px] inline-block shrink-0">
          Experience seamless connectivity and functionality with our app,
          designed to be fully responsive and compatible across all your
          devices. Whether you're at home, at work, or on the go, our app adapts
          perfectly to your lifestyle
        </div>
      </div>
      <img
        className="absolute top-[220px] left-[calc(50%_-_188px)] w-[375px] h-[225px] object-cover"
        alt=""
        src="/mockups-1@2x.png"
      />
      <div className="absolute top-[445px] left-[calc(50%_-_129px)] text-3xs leading-[12px] inline-block w-[258px]">
        No matter which device you use, our app ensures a consistent and
        high-quality experience, so you can stay connected and efficient
        anytime, anywhere.
      </div>
    </div>
  );
};

export default MAllDevices;
