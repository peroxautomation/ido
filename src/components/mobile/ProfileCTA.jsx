import { useMemo } from "react";
import PropTypes from "prop-types";

const ProfileCTA = ({
  className = "",
  hugeIconeducationoutlinep,
  hugeIconeducationoutlinepOverflow,
  cTA,
}) => {
  const hugeIconeducationoutlineplStyle = useMemo(() => {
    return {
      overflow: hugeIconeducationoutlinepOverflow,
    };
  }, [hugeIconeducationoutlinepOverflow]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 w-[6.313rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <img
        className="w-[1rem] relative h-[1rem]"
        alt=""
        src={hugeIconeducationoutlinep}
        style={hugeIconeducationoutlineplStyle}
      />
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};

ProfileCTA.propTypes = {
  className: PropTypes.string,
  hugeIconeducationoutlinep: PropTypes.string,
  cTA: PropTypes.string,

  /** Style props */
  hugeIconeducationoutlinepOverflow: PropTypes.any,
};

export default ProfileCTA;
