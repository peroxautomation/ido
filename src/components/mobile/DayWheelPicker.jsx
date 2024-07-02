import { useEffect, useRef, useState } from "react";

/**
 * Get the number of days for the month
 * @param {*} month The month
 * @param {*} year the year of the month
 * @returns
 */
const getDaysInMonth = (month, year) => {
  if (year && month !== null) {
    return new Date(year, month + 1, 0).getDate();
  }
  return 31; // Default to 31 days if no valid month/year provided
};

/**
 * Day picker wheel for DatePicker
 * @param {*} selectedMonth the selected month
 * @param {*} selectedYear the selecetd year
 * @param {*} onDaySelect selected day handler
 * @param {*} id component id
 * @param {*} selectedClass selected class css
 * @returns A JSX element
 */
const DayWheelPicker = (props) => {
  /***************************************************************************** */
  /********************************{ Variables }******************************** */
  /***************************************************************************** */
  const { selectedClass, id, onDaySelect, selectedMonth, selectedYear } = props;
  const wheelRef = useRef(null);
  const [days, setDays] = useState(Array.from({ length: 30 }, (v, i) => i + 1)); //TODO: Initalize this to an empty array to have the day and year chosen before the day can be rendered
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);

  /**************************************************************************** */
  /********************************{ Hooks }********************************* */
  /**************************************************************************** */
  useEffect(() => {
    if (selectedMonth !== null && selectedYear !== null) {
      const monthIndex = new Date(
        Date.parse(selectedMonth + " 1, 2020")
      ).getMonth();
      const daysInMonth = getDaysInMonth(monthIndex, selectedYear);
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (wheel) {
      wheel.scrollTop = wheel.scrollHeight / 3;

      const handleScroll = () => {
        const selectedDateElement = document.getElementById("selectedDate");
        if (!selectedDateElement) return;

        const selectedDatePosition =
          selectedDateElement.getBoundingClientRect();
        const wheelChildren = wheel.children;

        let foundSelected = false;

        for (let i = 0; i < wheelChildren.length; i++) {
          const child = wheelChildren[i];
          const childPosition = child.getBoundingClientRect();

          if (
            childPosition.top >= selectedDatePosition.top &&
            childPosition.bottom <= selectedDatePosition.bottom
          ) {
            const index = i % days.length;
            setSelectedDayIndex(index);
            onDaySelect(days[index]);
            foundSelected = true;
            break;
          }
        }

        if (!foundSelected) {
          setSelectedDayIndex(null);
        }

        const scrollTop = wheel.scrollTop;
        const scrollHeight = wheel.scrollHeight;
        const clientHeight = wheel.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
          wheel.scrollTop = scrollTop - scrollHeight / 3;
        } else if (scrollTop <= 0) {
          wheel.scrollTop = scrollTop + scrollHeight / 3;
        }
      };

      wheel.addEventListener("scroll", handleScroll);
      return () => wheel.removeEventListener("scroll", handleScroll);
    }
  }, [days]);

  /***************************************************************************** */
  /********************************{ Dynamic component }*********************** */
  /**************************************************************************** */
  const renderDays = () => {
    return [...days, ...days, ...days].map((day, index) => (
      <div
        key={index}
        className={`relative text-[1rem] opacity-[0.35] ${
          selectedDayIndex === index % days.length ? selectedClass : ""
        }`}
      >
        {day}
      </div>
    ));
  };

  return (
    <div ref={wheelRef} id={id} className={`no-scrollbar birthday-date-wheel`}>
      {renderDays()}
    </div>
  );
};

export default DayWheelPicker;
