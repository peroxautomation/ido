import PropTypes from "prop-types";

const RecordButton = ({ ctaClick, className = "" }) => {
  return (
    <div
      onClick={ctaClick}
      className={`w-[3rem] relative rounded-[50%] bg-danger-500 h-[3rem] ${className}`}
    />
  );
};

RecordButton.propTypes = {
  className: PropTypes.string,
};

export default RecordButton;
