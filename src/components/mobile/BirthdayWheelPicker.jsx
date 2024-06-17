import SelectedWheelDate from "./SelectedWheelDate";
import MonthWheelPicker from "./MonthWheelPicker";
import DayWheelPicker from "./DayWheelPicker";
import YearWheelPicker from "./YearWheelPicker";

/**
 * Dynamic DatePicker component//TODO: There is a bug with the day. It generates 30 days by default regardless of the month and year. Even for febuary until the both the year and the date are set
 * @param {*} param0 
 * @returns 
 */
const BirthdayWheelPicker = ({
  className = "",
  handleSetDate,
  selectedDate,
}) => {
  const selectedClass = "text-[1.5rem] opacity-[1]";

  /**
   * Update selected month
   * @param {*} month 
   */
  const handleMonthSelect = (month) => {
    handleSetDate({ month });
  };

  /**
   * Update selected day
   * @param {*} day 
   */
  const handleDaySelect = (day) => {
    handleSetDate({ day });
  };

  /**
   * Update selected year
   * @param {*} year 
   */
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
