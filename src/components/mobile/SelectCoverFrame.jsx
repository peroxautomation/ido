import { useMemo } from "react";
import PropTypes from "prop-types";

const SelectCoverFrame = ({ className = "", style }) => {


  return (
    <img
      className={`flex-shrink-0 relative w-[3.125rem] h-[3.5rem] overflow-hidden object-cover ${className}`}
      alt=""
      src="/edit-cover-img@2x.png"
      style={style}
    />
  );
};

SelectCoverFrame.propTypes = {
  className: PropTypes.string,

  /** Style props */
  editCoverImgLeft: PropTypes.any,
};

export default SelectCoverFrame;
