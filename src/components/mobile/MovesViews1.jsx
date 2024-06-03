import PropTypes from "prop-types";

const MovesViews1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineeye1.svg"
      />
      <div className="relative leading-[1rem]">487</div>
    </div>
  );
};

MovesViews1.propTypes = {
  className: PropTypes.string,
};

export default MovesViews1;
