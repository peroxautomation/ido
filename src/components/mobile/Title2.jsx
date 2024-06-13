import { useMemo } from "react";
import PropTypes from "prop-types";

const Title2 = ({
  className = "",
  titleWidth,
  titleTop,
  titleRight,
  titleLeft,
  pageName,
  showPageName,
  pageNameWidth,
  pageNameFontWeight,
  pageNameColor,
}) => {
  const title1Style = useMemo(() => {
    return {
      width: titleWidth,
      top: titleTop,
      right: titleRight,
      left: titleLeft,
    };
  }, [titleWidth, titleTop, titleRight, titleLeft]);

  const pageNameStyle = useMemo(() => {
    return {
      width: pageNameWidth,
      fontWeight: pageNameFontWeight,
      color: pageNameColor,
    };
  }, [pageNameWidth, pageNameFontWeight, pageNameColor]);

  return (
    <div
      className={`absolute w-[calc(100%_-_40px)] top-[5.25rem] right-[1.25rem] left-[1.25rem] h-[2.75rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border text-center text-[1.25rem] text-neutral-100 font-h3-semibold ${className}`}
      style={title1Style}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      {showPageName && (
        <div
          className="relative leading-[1.75rem] font-semibold"
          style={pageNameStyle}
        >
          {pageName}
        </div>
      )}
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-3@2x.png"
      />
    </div>
  );
};

Title2.propTypes = {
  className: PropTypes.string,
  pageName: PropTypes.string,
  showPageName: PropTypes.bool,

  /** Style props */
  titleWidth: PropTypes.any,
  titleTop: PropTypes.any,
  titleRight: PropTypes.any,
  titleLeft: PropTypes.any,
  pageNameWidth: PropTypes.any,
  pageNameFontWeight: PropTypes.any,
  pageNameColor: PropTypes.any,
};

export default Title2;
