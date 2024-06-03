import ResultFrame from "./ResultFrame";
import PropTypes from "prop-types";

const ResultFrameRow = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[0.125rem] text-center text-[0.875rem] text-neutral-100 font-button-1-regular w-full ${className}`}
    >
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
    </div>
  );
};

ResultFrameRow.propTypes = {
  className: PropTypes.string,
};

export default ResultFrameRow;
