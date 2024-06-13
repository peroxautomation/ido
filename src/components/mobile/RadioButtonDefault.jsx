import PropTypes from "prop-types";

const RadioButtonDefault = ({ className = "", name, value, id }) => {
  return (
    <div
      className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className} ${id}`}
    >
      <input type="radio" name={name} value={value} className="absolute opacity-0 w-0 h-0"/>
      <img 
        className="absolute top-[0.125rem] left-[0.125rem] rounded-[50%] w-[1.25rem] h-[1.25rem]"
        src="/ellipse-1248.svg"
        alt="Default Radio"
      />
      <img 
         className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className} hidden`}
         alt="Selected Radio"
         src="/radio-button-filled.svg"
      />
    </div>
  );
};

RadioButtonDefault.propTypes = {
  className: PropTypes.string,
};

export default RadioButtonDefault;
