import { useMemo } from "react";
import Return from "./Return";
import PropTypes from "prop-types";

const Title = ({
  className = "",
  titleRight,
  titleLeft,
  hugeIconarrowssolHref,
  pageName,
  titleWidth,
  direactionLeft,
}) => {
  const titleStyle = useMemo(() => {
    return {
      right: titleRight,
      left: titleLeft,
      width: titleWidth,
    };
  }, [titleRight, titleLeft, titleWidth]);

  return (
    <header
      className={`absolute w-[calc(100%_-_40px)] top-[2.5rem] right-[1.25rem] left-[1.25rem] h-[2.75rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border text-center text-[1.25rem] text-neutral-100 font-button-2-bold ${className}`}
      style={titleStyle}
    >
      <Return hugeIconarrowssolHref="/" direactionLeft="/direaction-left.svg" />
      <div className="relative leading-[1.75rem] font-semibold">{pageName}</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-3@2x.png"
      />
    </header>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  hugeIconarrowssolHref: PropTypes.string.isRequired,
  pageName: PropTypes.string,
  direactionLeft: PropTypes.string,

  /** Style props */
  titleRight: PropTypes.any,
  titleLeft: PropTypes.any,
  titleWidth: PropTypes.any,
};

export default Title;
