import PropTypes from "prop-types";

import { useMemo } from "react";

const Checkbox2 = ({ className = "", vector }) => {

  return (
    <div
      className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
    >
      <img
        className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] rounded max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector}
      />
    </div>
  );
};

Checkbox2.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
};

export default Checkbox2;
