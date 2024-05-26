const YearWheelPicker = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[105.4px] w-[33.6px] h-[173px] text-center text-lg-4 text-neutral-100 font-sf-pro-text ${className}`}
    >
      <div className="absolute top-[calc(50%_-_11.7px)] right-[-20px] text-3xl-2 tracking-[-0.95px] text-left">
        2024
      </div>
      <div className="absolute top-[calc(50%_-_40.6px)] right-[-11.4px] tracking-[-0.95px] text-left opacity-[0.35]">
        2023
      </div>
      <div className="absolute top-[calc(50%_-_62.4px)] right-[11.6px] text-mini-6 hidden opacity-[0.35]">
        am
      </div>
      <div className="absolute top-[calc(50%_-_80.9px)] right-[16.6px] text-xs-4 hidden opacity-[0.35]">
        am
      </div>
      <div className="absolute top-[calc(50%_-_85.5px)] right-[25.6px] text-7xs-1 hidden opacity-[0.35]">
        am
      </div>
      <div className="absolute top-[calc(50%_+_20.6px)] right-[3.6px] tracking-[-0.95px] text-left hidden opacity-[0.35]">
        pm
      </div>
      <div className="absolute top-[calc(50%_+_48.2px)] right-[9.6px] text-mini-6 hidden opacity-[0.35]">
        pm
      </div>
      <div className="absolute top-[calc(50%_+_67.4px)] right-[14.6px] text-xs-4 hidden opacity-[0.35]">
        pm
      </div>
      <div className="absolute top-[calc(50%_+_81.5px)] right-[24.6px] text-7xs-1 hidden opacity-[0.35]">
        pm
      </div>
    </div>
  );
};

export default YearWheelPicker;
