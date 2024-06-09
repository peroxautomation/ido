import { useMemo } from "react";
import PropTypes from "prop-types";

const ProfileMenuItem = ({
  className = "",
  menuItemGap,
  menuItemAlignSelf,
  saveToPlaylist,
  hugeIconinterfaceoutlinet,
  onClick
}) => {
  const menuItemStyle = useMemo(() => {
    return {
      gap: menuItemGap,
      alignSelf: menuItemAlignSelf,
    };
  }, [menuItemGap, menuItemAlignSelf]);

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-[0.5rem] bg-neutral-800 h-[2.5rem] grid grid-flow-col items-center box-border gap-[0.5rem] ${className}`}
      style={menuItemStyle}
    >
      <div className="relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-center justify-self-start">
        {saveToPlaylist}
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfaceoutlinet}
      />
    </button>
  );
};

ProfileMenuItem.propTypes = {
  className: PropTypes.string,
  saveToPlaylist: PropTypes.string,
  hugeIconinterfaceoutlinet: PropTypes.string,

  /** Style props */
  menuItemGap: PropTypes.any,
  menuItemAlignSelf: PropTypes.any,
};

export default ProfileMenuItem;
