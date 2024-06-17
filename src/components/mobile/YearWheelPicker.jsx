import { useEffect, useRef, useState } from "react";

const generateYears = (startYear, endYear) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

/**
 * Year picker wheel for DatePicker
 * @param {*} param0 
 * @returns A JSX element
 */
const YearWheelPicker = ({
  className = "",
  selectedClass,
  id,
  onYearSelect,
}) => {
  const currentYear = new Date().getFullYear();
  const years = generateYears(1900, currentYear);
  const wheelRef = useRef(null);
  const [selectedYearIndex, setSelectedYearIndex] = useState(null);

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
            const index = i % years.length;
            setSelectedYearIndex(index);
            onYearSelect(years[index]);
            foundSelected = true;
            break;
          }
        }

        if (!foundSelected) {
          setSelectedYearIndex(null);
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

  const renderYears = () => {
    return [...years, ...years, ...years].map((year, index) => (
      <div
        key={index}
        className={`relative text-[1rem] opacity-[0.35] ${
          selectedYearIndex === index % years.length ? selectedClass : ""
        }`}
      >
        {year}
      </div>
    ));
  };

  return (
    <div
      ref={wheelRef}
      id={id}
      className={`no-scrollbar relative w-[15px] h-[173px] text-right text-lg-4 text-neutral-100 font-sf-pro-text ${className} grid grid-flow-row w-max overflow-y-scroll justify-items-center`}
    >
      {renderYears()}
    </div>
  );
};

export default YearWheelPicker;
