import RadioButtonDefault from "./RadioButtonDefault";
import PropTypes from "prop-types";

const Radio1 = ({ className = "", element, value, radioName, label, onRadioClick, radioId}) => {
  const Element = element;  //Radio element

  return (
    <label
      onClick={onRadioClick}
      className={`my-[1em] self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.5rem]">
        <Element name={radioName} value={value} className={radioId}/>
        <div className="flex-1 relative leading-[1.5rem] font-semibold">{label}</div>
      </div>
    </label>
  );
};

Radio1.propTypes = {
  className: PropTypes.string,
};

export default Radio1;
