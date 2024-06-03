import PropTypes from "prop-types";

const MovesComment1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconcommunicationoutlinechat-02.svg"
      />
      <div className="relative leading-[1rem]">12</div>
    </div>
  );
};

MovesComment1.propTypes = {
  className: PropTypes.string,
};

export default MovesComment1;
