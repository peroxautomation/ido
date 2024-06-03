import PropTypes from "prop-types";

const Radio = ({ className = "", question, radioButtonFilled, yes }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="w-[20.938rem] relative leading-[1.5rem] font-semibold hidden">
        {question}
      </div>
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={radioButtonFilled}
        />
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          {yes}
        </div>
      </div>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string,
  radioButtonFilled: PropTypes.string,
  yes: PropTypes.string,
};

export default Radio;
