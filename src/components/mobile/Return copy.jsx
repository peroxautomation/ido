import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Return = ({ className = "", hugeIconarrowssolHref, direactionLeft }) => {
  return (
    <Link
      className={`cursor-pointer [text-decoration:none] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      to={hugeIconarrowssolHref}
    >
      <img
        className="absolute h-[47.92%] w-[22.92%] top-[26.25%] right-[38.75%] bottom-[25.83%] left-[38.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={direactionLeft}
      />
    </Link>
  );
};

Return.propTypes = {
  className: PropTypes.string,
  hugeIconarrowssolHref: PropTypes.string.isRequired,
  direactionLeft: PropTypes.string,
};

export default Return;
