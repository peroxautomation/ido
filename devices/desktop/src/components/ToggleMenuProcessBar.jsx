import PropTypes from "prop-types";

const ToggleMenuProcessBar = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[9px] text-center text-xs text-neutral-100 font-overline-regular self-stretch ${className}`}
    >
      <div className="flex-1 relative rounded-6xs bg-neutral-800 h-3.5 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-500 w-[135px] h-3.5 overflow-hidden" />
      </div>
      <div className="relative leading-[16px]">43%</div>
    </div>
  );
};

ToggleMenuProcessBar.propTypes = {
  className: PropTypes.string,
};

export default ToggleMenuProcessBar;
