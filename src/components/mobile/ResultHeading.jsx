import PropTypes from "prop-types";

const ResultHeading = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[95vh] top-[95vh] right-[-16.75rem] left-[1rem] h-[2.75rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border [transform:_rotate(-90deg)] [transform-origin:0_0] text-center text-[1.25rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        onClick={() => history.back()}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="relative leading-[1.75rem] font-semibold">Сomparison</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain [transform:_rotate(90deg)] opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-31@2x.png"
      />
    </div>
  );
};

ResultHeading.propTypes = {
  className: PropTypes.string,
};

export default ResultHeading;
