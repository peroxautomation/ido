import PropTypes from "prop-types";

const Dropdown1 = ({ className = "", dropdown }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <div className="flex-1 relative leading-[1.5rem]">{dropdown}</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectiondown-01.svg"
      />
    </div>
  );
};

Dropdown1.propTypes = {
  className: PropTypes.string,
  dropdown: PropTypes.string,
};

export default Dropdown1;
