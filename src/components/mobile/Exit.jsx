import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Exit = ({ className = "", onClick=null}) => {
  const navigate = useNavigate();

  const onHugeIconinterfaceoutlinereClick = useCallback(() => {
    navigate("/sign-up/info");
  }, [navigate]);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
      onClick={(onClick)? onClick : onHugeIconinterfaceoutlinereClick}
    >
      <img
        className="absolute h-[35.42%] w-[35.42%] top-[32.5%] right-[32.08%] bottom-[32.08%] left-[32.5%] rounded-12xs max-w-full overflow-hidden max-h-full"
        alt=""
        src="/exitIcon.svg"
      />
    </button>
  );
};

Exit.propTypes = {
  className: PropTypes.string,
};

export default Exit;
