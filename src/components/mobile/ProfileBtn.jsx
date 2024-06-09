import { useMemo } from "react";
import PropTypes from "prop-types";

const ProfileBtn = ({
  onClick,
  className = "",
  cTABackgroundColor,
  cTALeft,
  hugeIconeducationsolidpen,
  cTA,
}) => {
  const cTA4Style = useMemo(() => {
    return {
      backgroundColor: cTABackgroundColor,
      left: cTALeft,
    };
  }, [cTABackgroundColor, cTALeft]);

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 absolute top-[5.5rem] left-[1rem] rounded-xl w-[6.313rem] flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
      style={cTA4Style}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src={hugeIconeducationsolidpen}
      />
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};

ProfileBtn.propTypes = {
  className: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,
  cTA: PropTypes.string,

  /** Style props */
  cTABackgroundColor: PropTypes.any,
  cTALeft: PropTypes.any,
};

export default ProfileBtn;
