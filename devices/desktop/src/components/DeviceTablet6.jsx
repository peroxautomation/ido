const DeviceTablet6 = (props) => {
  const {
    className = "",
    numText = "32",
    following,
    openModalRelating,
    openModalPosts,
  } = props;
  return (
    <div
      className={`w-[340px] flex flex-row items-center justify-between text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div
        className="cursor-pointer hover:opacity-80 flex-1 flex flex-row items-center justify-start gap-[16px]"
        onClick={openModalPosts}
      >
        <div className="relative leading-[32px] font-semibold">{numText}</div>
        <div className="relative text-sm leading-[20px] text-neutral-400">
          Posts
        </div>
      </div>
      <div
        className="cursor-pointer hover:opacity-80 flex-1 flex flex-row items-center justify-start gap-[16px]"
        onClick={openModalRelating}
      >
        <div className="relative leading-[32px] font-semibold">{numText}</div>
        <div className="relative text-sm leading-[20px] text-neutral-400">
          {following}
        </div>
      </div>
    </div>
  );
};

export default DeviceTablet6;
