import PropTypes from "prop-types";

const MovesSlider1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start relative ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start z-[0]">
        <div className="self-stretch relative box-border h-[0.063rem] border-t-[1px] border-solid border-white-40" />
        <div className="w-[2rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-neutral-100" />
      </div>
      <div className="w-[0.688rem] absolute !m-[0] top-[-0.375rem] left-[1.563rem] rounded-[50%] bg-neutral-100 h-[0.688rem] z-[1]" />
    </div>
  );
};

MovesSlider1.propTypes = {
  className: PropTypes.string,
};

export default MovesSlider1;
