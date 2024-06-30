import { useMemo } from "react";
import PropTypes from "prop-types";

const HeartIcons = ({
  className = "",
  hugeIconecommerceoutlinef,
  propWidth,
  propHeight,
}) => {
  const heartIconsStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-8 ${className}`}
      style={heartIconsStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={hugeIconecommerceoutlinef}
      />
    </button>
  );
};

HeartIcons.propTypes = {
  className: PropTypes.string,
  hugeIconecommerceoutlinef: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default HeartIcons;
