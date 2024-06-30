import HugeIconsocialoutlinegmail from "./HugeIconsocialoutlinegmail";
import PropTypes from "prop-types";

const CTA = ({ className = "", text = "Message", icon = true }) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-neutral-800 flex flex-row items-center justify-center py-2.5 px-2 gap-[8px] text-center text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <HugeIconsocialoutlinegmail
        vector3014="/vector-30141.svg"
        hugeIconsocialoutlinegmaiPosition="relative"
        hugeIconsocialoutlinegmaiWidth="16px"
        hugeIconsocialoutlinegmaiHeight="16px"
        rectangleDivBorder="1.5px solid #cc0f3c"
        rectangleDivHeight="84.38%"
        rectangleDivWidth="92.5%"
        rectangleDivTop="8.13%"
        rectangleDivRight="3.75%"
        rectangleDivBottom="7.5%"
        rectangleDivLeft="3.75%"
        vectorIconHeight="33.13%"
        vectorIconWidth="83.13%"
        vectorIconTop="29.38%"
        vectorIconRight="8.75%"
        vectorIconLeft="8.13%"
      />
      <div className="relative leading-[24px] font-semibold">{text}</div>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.bool,
};

export default CTA;
