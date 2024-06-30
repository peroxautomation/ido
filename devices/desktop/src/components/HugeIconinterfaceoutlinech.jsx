import { useMemo } from "react";
import PropTypes from "prop-types";

const HugeIconinterfaceoutlinech = ({
  className = "",
  hugeIconinterfaceoutlinec,
  hugeIconinterfaceoutlinecWidth,
  hugeIconinterfaceoutlinecHeight,
  hugeIconinterfaceoutlinecPosition,
  hugeIconinterfaceoutlinecTop,
  hugeIconinterfaceoutlinecLeft,
}) => {
  const hugeIconinterfaceoutlinechStyle = useMemo(() => {
    return {
      width: hugeIconinterfaceoutlinecWidth,
      height: hugeIconinterfaceoutlinecHeight,
      position: hugeIconinterfaceoutlinecPosition,
      top: hugeIconinterfaceoutlinecTop,
      left: hugeIconinterfaceoutlinecLeft,
    };
  }, [
    hugeIconinterfaceoutlinecWidth,
    hugeIconinterfaceoutlinecHeight,
    hugeIconinterfaceoutlinecPosition,
    hugeIconinterfaceoutlinecTop,
    hugeIconinterfaceoutlinecLeft,
  ]);

  return (
    <img
      className={`w-6 max-w-full overflow-hidden h-6 ${className}`}
      alt=""
      src={hugeIconinterfaceoutlinec}
      style={hugeIconinterfaceoutlinechStyle}
    />
  );
};

HugeIconinterfaceoutlinech.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlinec: PropTypes.string,

  /** Style props */
  hugeIconinterfaceoutlinecWidth: PropTypes.any,
  hugeIconinterfaceoutlinecHeight: PropTypes.any,
  hugeIconinterfaceoutlinecPosition: PropTypes.any,
  hugeIconinterfaceoutlinecTop: PropTypes.any,
  hugeIconinterfaceoutlinecLeft: PropTypes.any,
};

export default HugeIconinterfaceoutlinech;
