const SelectMusicButton = (props) => {
  const { onCTAClick } = props;
  return (
    <div
      onClick={onCTAClick}
      className={`absolute top-[18vh] flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-overline-semibold `}
    >
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">Add music</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectionright-011.svg"
        />
      </div>
    </div>
  );
};

export default SelectMusicButton;
