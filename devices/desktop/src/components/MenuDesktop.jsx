import { useMemo } from "react";
import HugeIconsocialoutlinegmail from "./HugeIconsocialoutlinegmail";
import PropTypes from "prop-types";

const MenuDesktop = ({
  className = "",
  text = "Chat",
  rightIcon = false,
  leftIcon = true,
  propBorder,
  propBackgroundColor,
}) => {
  const menuDesktopStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  return (
    <div
      className={`w-[168px] flex flex-row items-center justify-start py-3 pr-0 pl-4 box-border gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={menuDesktopStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[15px]">
        <HugeIconsocialoutlinegmail
          vector3014="/vector-3014.svg"
          hugeIconsocialoutlinegmaiPosition="relative"
          hugeIconsocialoutlinegmaiWidth="24px"
          hugeIconsocialoutlinegmaiHeight="24px"
          rectangleDivBorder="1.5px solid #fff"
          rectangleDivHeight="81.25%"
          rectangleDivWidth="89.58%"
          rectangleDivTop="9.58%"
          rectangleDivRight="5%"
          rectangleDivBottom="9.17%"
          rectangleDivLeft="5.42%"
          vectorIconHeight="33.33%"
          vectorIconWidth="83.33%"
          vectorIconTop="29.17%"
          vectorIconRight="8.33%"
          vectorIconLeft="8.33%"
        />
        <div className="relative leading-[24px]">{text}</div>
      </div>
      {rightIcon && (
        <div className="rounded-lg bg-primary-500 hidden flex-row items-center justify-center py-0 px-2">
          <div className="relative leading-[24px]">PRO</div>
        </div>
      )}
    </div>
  );
};

MenuDesktop.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,

  /** Style props */
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default MenuDesktop;
