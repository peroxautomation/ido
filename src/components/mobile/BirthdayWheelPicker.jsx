import SelectedWheelDate from "./SelectedWheelDate";
import MonthWheelPicker from "./MonthWheelPicker";
import DayWheelPicker from "./DayWheelPicker";
import YearWheelPicker from "./YearWheelPicker";

const BirthdayWheelPicker = ({ className = ""}) => {
  return (
    <div
      className={`absolute top-[453px] left-[calc(50%_-_162.5px)] w-[324px] h-[174px] text-center text-lg-4 text-neutral-100 font-sf-pro-text ${className}`}
    >
      <SelectedWheelDate />
      <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_70px)] w-[140px] h-[174px]">
        <MonthWheelPicker />
        <DayWheelPicker />
        <YearWheelPicker />
      </div>
    </div>
  );
};

export default BirthdayWheelPicker;
