import ProcessBar from "./ProcessBar";
import PropTypes from "prop-types";

const UploadBar = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-[0.562rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <ProcessBar />
      <div className="relative leading-[1rem]">43%</div>
    </div>
  );
};

UploadBar.propTypes = {
  className: PropTypes.string,
};

export default UploadBar;
