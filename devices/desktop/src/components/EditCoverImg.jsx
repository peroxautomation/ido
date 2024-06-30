import { useMemo } from "react";
import PropTypes from "prop-types";

const EditCoverImg = ({
  className = "",
  editCoverImg,
  propWidth,
  propPosition,
  propMargin,
  propTop,
  propLeft,
  propHeight,
}) => {
  const editCoverImgStyle = useMemo(() => {
    return {
      width: propWidth,
      position: propPosition,
      margin: propMargin,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propWidth, propPosition, propMargin, propTop, propLeft, propHeight]);

  return (
    <img
      className={`w-14 absolute !m-[0] top-[-4px] left-[22px] h-16 overflow-hidden shrink-0 object-cover z-[7] ${className}`}
      alt=""
      src={editCoverImg}
      style={editCoverImgStyle}
    />
  );
};

EditCoverImg.propTypes = {
  className: PropTypes.string,
  editCoverImg: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propMargin: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
};

export default EditCoverImg;
