import SelectedWheelDate from "./SelectedWheelDate";
import MonthWheelPicker from "./MonthWheelPicker";
import DayWheelPicker from "./DayWheelPicker";
import YearWheelPicker from "./YearWheelPicker";

//TODO: There is a bug with the day that sometimes does not render the days
const BirthdayWheelPicker = ({
  className = "",
  handleSetDate,
  selectedDate,
}) => {
  const selectedClass = "text-[1.5rem] opacity-[1]";

  const handleMonthSelect = (month) => {
    handleSetDate({ month });
  };

  const handleDaySelect = (day) => {
    handleSetDate({ day });
  };

  const handleYearSelect = (year) => {
    handleSetDate({ year });
  };

  return (
    <div
      className={`relative top-[453px] w-full h-[174px] text-center text-lg-4 text-neutral-100 font-sf-pro-text ${className} grid grid-flow-row justify-items-center`}
    >
      <div className="relative top-[calc(50%_-_87px)] w-[90%] h-[174px] grid grid-flow-col overflow-hidden justify-items-center">
        <SelectedWheelDate />
        <MonthWheelPicker
          selectedClass={selectedClass}
          id="birthdayMonth"
          onMonthSelect={handleMonthSelect}
        />
        <DayWheelPicker
          selectedClass={selectedClass}
          id="birthdayDay"
          onDaySelect={handleDaySelect}
          selectedMonth={selectedDate.month}
          selectedYear={selectedDate.year}
        />
        <YearWheelPicker
          selectedClass={selectedClass}
          id="birthdayYear"
          onYearSelect={handleYearSelect}
        />
      </div>
    </div>
  );
};

export default BirthdayWheelPicker;
