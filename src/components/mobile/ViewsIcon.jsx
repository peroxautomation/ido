import PropTypes from "prop-types";

const ViewsIcon = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start text-left text-[0.875rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineeye.svg"
      />
      <div className="relative leading-[1.25rem] font-semibold">122</div>
    </div>
  );
};

ViewsIcon.propTypes = {
  className: PropTypes.string,
};

export default ViewsIcon;
