import { useEffect, useRef, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Month picker wheel for DatePicker
 * @param {*} selectedClass selected class css
 * @param {*} id Component Id
 * @param {*} onMonthSelect month select handler
 * @returns A JSX element
 */
const MonthWheelPicker = (props) => {
  /***************************************************************************** */
  /********************************{ Variables }******************************** */
  /***************************************************************************** */
  const { selectedClass, id, onMonthSelect } = props;
  const wheelRef = useRef(null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);

  /**************************************************************************** */
  /********************************{ Hooks }********************************* */
  /**************************************************************************** */
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
            const index = i % months.length;
            setSelectedMonthIndex(index);
            onMonthSelect(months[index]);
            foundSelected = true;
            break;
          }
        }

        if (!foundSelected) {
          setSelectedMonthIndex(null);
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
  }, []);

  /**************************************************************************** */
  /********************************{ Dynamic component }********************************* */
  /**************************************************************************** */
  const renderMonths = () => {
    return [...months, ...months, ...months].map((month, index) => (
      <div
        key={index}
        className={`relative text-[1rem] opacity-[0.35] ${
          selectedMonthIndex === index % months.length ? selectedClass : ""
        }`}
      >
        {month}
      </div>
    ));
  };

  return (
    <div ref={wheelRef} id={id} className={`no-scrollbar birthday-date-wheel`}>
      {renderMonths()}
    </div>
  );
};

export default MonthWheelPicker;