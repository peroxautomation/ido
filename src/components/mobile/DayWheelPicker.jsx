const DayWheelPicker = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[53.2px] w-7 h-[173px] text-center text-lg-4 text-neutral-100 font-sf-pro-text ${className}`}
    >
      <div className="absolute top-[calc(50%_-_11.6px)] left-[calc(50%_-_12px)] text-3xl-2">
        16
      </div>
      <div className="absolute top-[calc(50%_-_40.5px)] left-[calc(50%_-_10.8px)] opacity-[0.35]">
        15
      </div>
      <div className="absolute top-[calc(50%_-_62.3px)] left-[calc(50%_-_8.1px)] text-mini-6 opacity-[0.35]">
        14
      </div>
      <div className="absolute top-[calc(50%_-_80.9px)] left-[calc(50%_-_6.2px)] text-xs-4 opacity-[0.35]">
        13
      </div>
      <div className="absolute top-[calc(50%_-_85.5px)] left-[calc(50%_-_3.5px)] text-7xs-1 opacity-[0.35]">
        12
      </div>
      <div className="absolute top-[calc(50%_+_20.6px)] left-[calc(50%_-_9.4px)] opacity-[0.35]">
        17
      </div>
      <div className="absolute top-[calc(50%_+_48.3px)] left-[calc(50%_-_8.3px)] text-mini-6 opacity-[0.35]">
        18
      </div>
      <div className="absolute top-[calc(50%_+_67.4px)] left-[calc(50%_-_6px)] text-xs-4 opacity-[0.35]">
        19
      </div>
      <div className="absolute top-[calc(50%_+_81.5px)] left-[calc(50%_-_3.1px)] text-7xs-1 opacity-[0.35]">
        20
      </div>
    </div>
  );
};

export default DayWheelPicker;
