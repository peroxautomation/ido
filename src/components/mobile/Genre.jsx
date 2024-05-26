import { useMemo } from "react";

import PropTypes from "prop-types";

const Genre = ({ className = "", genresLeft }) => {
  const genresStyle = useMemo(() => {
    return {
      left: genresLeft,
    };
  }, [genresLeft]);

  return (
    <div
      className={`relative shadow-[0px_4px_10.4px_#000] rounded-xl box-border w-[10.5em] min-w-[10rem] h-[60%] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular border-[0.5px] border-solid border-neutral-800 ${className}`}
      style={genresStyle}
    >
      <img
        className="absolute h-full w-full rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-1974@2x.png"
      />
      <b className="absolute top-[38%] left-[34.5%] leading-[1.5rem]">
        Hip Hop
      </b>
    </div>
  );
};

Genre.propTypes = {
  className: PropTypes.string,

  /** Style props */
  genresLeft: PropTypes.any,
};

export default Genre;
