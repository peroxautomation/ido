import RelateBtn from "./MovesBtn";
import PropTypes from "prop-types";

const MovesTitle1 = ({ className = "", unrelate }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="flex flex-row items-center justify-end gap-[0.312rem]">
        <div className="w-[1.5rem] relative h-[2.25rem]">
          <img
            className="relative w-[1.375rem] h-[0.875rem]"
            alt=""
            src="/subtract1.svg"
          />
          <img
            className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-5.svg"
          />
          <div className="absolute top-[11.11%] left-[20.83%] leading-[1rem] font-semibold">
            17
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-left text-[1rem]">
          <div className="relative leading-[1.5rem] font-semibold">
            Ronald Hilson
          </div>
        </div>
        <RelateBtn unrelate="Relate" />
      </div>
    </div>
  );
};

MovesTitle1.propTypes = {
  className: PropTypes.string,
  unrelate: PropTypes.string,
};

export default MovesTitle1;
