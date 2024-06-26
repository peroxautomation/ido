const MFooterDownload = () => {
  return (
    <div
      className={`absolute top-[375px] left-[calc(50%_-_147px)] w-[292px] h-[104px] text-center text-base text-neutral-100 font-button-2-regular`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_122px)] w-[244px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px]">
          What are you waiting for? Download Now!
        </div>
      </div>
      <img
        className="absolute top-[64px] left-[0px] w-[138px] h-10 active:opacity-70"
        alt=""
        src="/app-store1.svg"
      />
      <img
        className="absolute top-[64px] left-[154px] w-[138px] h-10 active:opacity-70"
        alt=""
        src="/google-play1.svg"
      />
    </div>
  );
};

export default MFooterDownload;
