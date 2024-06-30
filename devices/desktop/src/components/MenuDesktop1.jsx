import HugeIconsocialoutlinegmail from "./HugeIconsocialoutlinegmail";
import PropTypes from "prop-types";

const MenuDesktop1 = ({ className = "", leftIcon = true }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start py-3 px-4 ${className}`}
    >
      <div className="flex flex-row items-center justify-start">
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
      </div>
    </div>
  );
};

MenuDesktop1.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.bool,
};

export default MenuDesktop1;
