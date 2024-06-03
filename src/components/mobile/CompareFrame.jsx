import PropTypes from "prop-types";

const CompareFrame = ({ className = "", frame7134 }) => {
  return (
    <img
      className={`relative rounded-lg overflow-hidden w-[13em] object-cover [transform:_rotate(90deg)] ${className}`}
      alt=""
      src={frame7134}
    />
  );
};

CompareFrame.propTypes = {
  className: PropTypes.string,
  frame7134: PropTypes.string,
};

export default CompareFrame;
