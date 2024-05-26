import PropTypes from "prop-types";

const Checkbox1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[335px] rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 box-border gap-[8px] text-left text-base text-white font-button-2-semibold ${className}`}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlinecheckrectangle1.svg"
      />
      <div className="flex-1 relative leading-[24px] font-semibold">
        I have always loved dancing
      </div>
    </div>
  );
};

Checkbox1.propTypes = {
  className: PropTypes.string,
};

export default Checkbox1;
