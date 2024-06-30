import { useMemo } from "react";
import PropTypes from "prop-types";

const MenuItem = ({
  className = "",
  text = "Save to playlist",
  hugeIconecommerceoutlineb,
  menuItemPosition,
  menuItemTop,
  menuItemLeft,
  menuItemRight,
  menuItemMargin,
}) => {
  const menuItemStyle = useMemo(() => {
    return {
      position: menuItemPosition,
      top: menuItemTop,
      left: menuItemLeft,
      right: menuItemRight,
      margin: menuItemMargin,
    };
  }, [
    menuItemPosition,
    menuItemTop,
    menuItemLeft,
    menuItemRight,
    menuItemMargin,
  ]);

  return (
    <div
      className={`rounded-lg bg-neutral-800 h-10 flex flex-row items-center justify-center p-2 box-border gap-[8px] text-center text-sm text-neutral-100 font-overline-regular ${className}`}
      style={menuItemStyle}
    >
      <div className="relative leading-[20px]">{text}</div>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0"
        alt=""
        src={hugeIconecommerceoutlineb}
      />
    </div>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  hugeIconecommerceoutlineb: PropTypes.string,

  /** Style props */
  menuItemPosition: PropTypes.any,
  menuItemTop: PropTypes.any,
  menuItemLeft: PropTypes.any,
  menuItemRight: PropTypes.any,
  menuItemMargin: PropTypes.any,
};

export default MenuItem;
