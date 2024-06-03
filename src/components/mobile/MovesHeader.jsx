import MovesTitle from "./MovesTitle";
import MovesInfo from "./MovesInfo";
import PropTypes from "prop-types";
import RelateBtn from "./MovesBtn";

const MovesHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] flex flex-col items-end justify-start py-[1rem] px-[1.25rem] gap-[1rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <MovesTitle />
      <MovesInfo />
    </div>
  );
};

MovesHeader.propTypes = {
  className: PropTypes.string,
};

export default MovesHeader;
