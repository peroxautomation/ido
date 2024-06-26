const DFooterDowloadeButtons = () => {
  return (
    <div
      className={`absolute top-[80px] right-[80px] w-[411px] h-[136px] text-center text-5xl text-neutral-100 font-body-semibold`}
    >
      <div className="absolute top-[0px] left-[0px] w-[411px] flex flex-row items-center justify-center">
        <div className="w-[335px] relative leading-[32px] inline-block shrink-0">
          What are you waiting for? Download Now!
        </div>
      </div>
      <img
        className="desktop-btn-secondary absolute top-[80px] left-[218px] w-[194px] h-14"
        alt=""
        src="/google-play.svg"
      />
      <img
        className="desktop-btn-secondary absolute top-[80px] left-[0px] w-[194px] h-14"
        alt=""
        src="/app-store.svg"
      />
    </div>
  );
};

export default DFooterDowloadeButtons;
