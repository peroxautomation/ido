import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  cTAPosition,
  cTATop,
  cTARight,
  cTATransform,
  cTATransformOrigin,
  cTAPadding,
  cTAWidth,
  cTABorderRadius,
  cTALeft,
  viewStory,
  viewStoryFontSize,
  viewStoryLineHeight,
  viewStoryColor,
  viewStoryFontWeight,
}) => {
  const cTA1Style = useMemo(() => {
    return {
      position: cTAPosition,
      top: cTATop,
      right: cTARight,
      transform: cTATransform,
      transformOrigin: cTATransformOrigin,
      padding: cTAPadding,
      width: cTAWidth,
      borderRadius: cTABorderRadius,
      left: cTALeft,
    };
  }, [
    cTAPosition,
    cTATop,
    cTARight,
    cTATransform,
    cTATransformOrigin,
    cTAPadding,
    cTAWidth,
    cTABorderRadius,
    cTALeft,
  ]);

  const viewStoryStyle = useMemo(() => {
    return {
      fontSize: viewStoryFontSize,
      lineHeight: viewStoryLineHeight,
      color: viewStoryColor,
      fontWeight: viewStoryFontWeight,
    };
  }, [
    viewStoryFontSize,
    viewStoryLineHeight,
    viewStoryColor,
    viewStoryFontWeight,
  ]);

  return (
    <button
      className={`cursor-pointer [border:none] p-[0.5rem] bg-neutral-800 w-[6.313rem] rounded-md flex flex-row items-center justify-center box-border ${className}`}
      style={cTA1Style}
    >
      <div
        className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-center"
        style={viewStoryStyle}
      >
        {viewStory}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  viewStory: PropTypes.string,

  /** Style props */
  cTAPosition: PropTypes.any,
  cTATop: PropTypes.any,
  cTARight: PropTypes.any,
  cTATransform: PropTypes.any,
  cTATransformOrigin: PropTypes.any,
  cTAPadding: PropTypes.any,
  cTAWidth: PropTypes.any,
  cTABorderRadius: PropTypes.any,
  cTALeft: PropTypes.any,
  viewStoryFontSize: PropTypes.any,
  viewStoryLineHeight: PropTypes.any,
  viewStoryColor: PropTypes.any,
  viewStoryFontWeight: PropTypes.any,
};

export default Button;
