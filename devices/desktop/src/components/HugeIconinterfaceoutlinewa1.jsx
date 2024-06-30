import { useMemo } from "react";
import PropTypes from "prop-types";

const HugeIconinterfaceoutlinewa1 = ({
  className = "",
  hugeIconinterfaceoutlinew,
  hugeIconinterfaceoutlinewWidth,
  hugeIconinterfaceoutlinewHeight,
  hugeIconinterfaceoutlinewPosition,
}) => {
  const hugeIconinterfaceoutlinewaStyle = useMemo(() => {
    return {
      width: hugeIconinterfaceoutlinewWidth,
      height: hugeIconinterfaceoutlinewHeight,
      position: hugeIconinterfaceoutlinewPosition,
    };
  }, [
    hugeIconinterfaceoutlinewWidth,
    hugeIconinterfaceoutlinewHeight,
    hugeIconinterfaceoutlinewPosition,
  ]);

  return (
    <img
      className={`w-6 max-w-full overflow-hidden h-6 ${className}`}
      alt=""
      src={hugeIconinterfaceoutlinew}
      style={hugeIconinterfaceoutlinewaStyle}
    />
  );
};

HugeIconinterfaceoutlinewa1.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlinew: PropTypes.string,

  /** Style props */
  hugeIconinterfaceoutlinewWidth: PropTypes.any,
  hugeIconinterfaceoutlinewHeight: PropTypes.any,
  hugeIconinterfaceoutlinewPosition: PropTypes.any,
};

export default HugeIconinterfaceoutlinewa1;
