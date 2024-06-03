import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Return = ({ className = "" }) => {

  const onClick = () => {
    history.back()
  }

  return (
    <div
      className={`cursor-pointer [text-decoration:none] w-6 relative h-6 overflow-hidden shrink-0 ${className}`}
      onClick={onClick}
    >
      <img
        className="absolute h-[47.92%] w-[22.92%] top-[26.25%] right-[38.75%] bottom-[25.83%] left-[38.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/direaction-left.svg"
      />
    </div>
  );
};

export default Return;
