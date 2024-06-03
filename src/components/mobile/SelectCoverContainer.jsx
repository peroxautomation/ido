import { useMemo } from "react";
import PropTypes from "prop-types";

const SelectCoverContainer = ({
  className = "",
  choosingVideoContainer,
  choosingVideoContainerTop,
  choosingVideoContainerLeft,
  choosingVideoContainerBorderRadius,
  choosingVideoContainerWidth,
  choosingVideoContainerHeight,
}) => {
  const choosingVideoContainerStyle = useMemo(() => {
    return {
      top: choosingVideoContainerTop,
      left: choosingVideoContainerLeft,
      borderRadius: choosingVideoContainerBorderRadius,
      width: choosingVideoContainerWidth,
      height: choosingVideoContainerHeight,
    };
  }, [
    choosingVideoContainerTop,
    choosingVideoContainerLeft,
    choosingVideoContainerBorderRadius,
    choosingVideoContainerWidth,
    choosingVideoContainerHeight,
  ]);

  return (
    <img
      className={`absolute top-[5.5rem] left-[1.25rem] rounded-2xl w-[20.938rem] h-[29.188rem] overflow-hidden object-cover ${className}`}
      alt=""
      src={choosingVideoContainer}
      style={choosingVideoContainerStyle}
    />
  );
};

SelectCoverContainer.propTypes = {
  className: PropTypes.string,
  choosingVideoContainer: PropTypes.string,

  /** Style props */
  choosingVideoContainerTop: PropTypes.any,
  choosingVideoContainerLeft: PropTypes.any,
  choosingVideoContainerBorderRadius: PropTypes.any,
  choosingVideoContainerWidth: PropTypes.any,
  choosingVideoContainerHeight: PropTypes.any,
};

export default SelectCoverContainer;
