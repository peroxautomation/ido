import { useMemo } from "react";
import PropTypes from "prop-types";

const MovesInfo = ({
  className = "",
  divTextAlign,
  hipHopTextAlign,
  dehliTextAlign,
}) => {
  const div3Style = useMemo(() => {
    return {
      textAlign: divTextAlign,
    };
  }, [divTextAlign]);

  const hipHopStyle = useMemo(() => {
    return {
      textAlign: hipHopTextAlign,
    };
  }, [hipHopTextAlign]);

  const dehliStyle = useMemo(() => {
    return {
      textAlign: dehliTextAlign,
    };
  }, [dehliTextAlign]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[0.25rem] text-right text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div
        className="self-stretch relative leading-[1.5rem] font-semibold"
        style={div3Style}
      >
        06.04.2024
      </div>
      <div
        className="self-stretch relative leading-[1.5rem] font-semibold"
        style={hipHopStyle}
      >
        Hip-Hop
      </div>
      <div
        className="self-stretch relative leading-[1.5rem] font-semibold"
        style={dehliStyle}
      >
        Dehli
      </div>
    </div>
  );
};

MovesInfo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  divTextAlign: PropTypes.any,
  hipHopTextAlign: PropTypes.any,
  dehliTextAlign: PropTypes.any,
};

export default MovesInfo;
