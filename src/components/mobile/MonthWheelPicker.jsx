const MonthWheelPicker = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0.9px] w-[15px] h-[173px] text-right text-lg-4 text-neutral-100 font-sf-pro-text ${className}`}
    >
      <div className="absolute top-[calc(50%_-_11.6px)] left-[-101.7px] text-3xl-2">
        September
      </div>
      <div className="absolute top-[calc(50%_-_40.5px)] left-[-48px] opacity-[0.35]">
        August
      </div>
      <div className="absolute top-[calc(50%_-_62.3px)] left-[-14px] text-mini-6 opacity-[0.35]">
        July
      </div>
      <div className="absolute top-[calc(50%_-_80.9px)] left-[-11px] text-xs-4 opacity-[0.35]">
        June
      </div>
      <div className="absolute top-[calc(50%_-_85.5px)] left-[5px] text-7xs-1 opacity-[0.35]">
        May
      </div>
      <div className="absolute top-[calc(50%_+_20.6px)] left-[-59px] opacity-[0.35]">
        October
      </div>
      <div className="absolute top-[calc(50%_+_48.3px)] left-[-58px] text-mini-6 opacity-[0.35]">
        November
      </div>
      <div className="absolute top-[calc(50%_+_67.4px)] left-[-43px] text-xs-4 opacity-[0.35]">
        December
      </div>
      <div className="absolute top-[calc(50%_+_81.4px)] left-[-5px] text-7xs-1 opacity-[0.35]">
        January
      </div>
    </div>
  );
};

export default MonthWheelPicker;
