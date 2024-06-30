import { useMemo } from "react";
import PropTypes from "prop-types";

const HugeIconinterfacebulkloadi = ({
  className = "",
  hugeIconinterfacebulkload,
  hugeIconinterfacebulkloadWidth,
  hugeIconinterfacebulkloadHeight,
  hugeIconinterfacebulkloadPosition,
  hugeIconinterfacebulkloadTop,
  hugeIconinterfacebulkloadLeft,
}) => {
  const hugeIconinterfacebulkloadiStyle = useMemo(() => {
    return {
      width: hugeIconinterfacebulkloadWidth,
      height: hugeIconinterfacebulkloadHeight,
      position: hugeIconinterfacebulkloadPosition,
      top: hugeIconinterfacebulkloadTop,
      left: hugeIconinterfacebulkloadLeft,
    };
  }, [
    hugeIconinterfacebulkloadWidth,
    hugeIconinterfacebulkloadHeight,
    hugeIconinterfacebulkloadPosition,
    hugeIconinterfacebulkloadTop,
    hugeIconinterfacebulkloadLeft,
  ]);

  return (
    <img
      className={`w-6 max-w-full overflow-hidden h-6 ${className}`}
      alt=""
      src={hugeIconinterfacebulkload}
      style={hugeIconinterfacebulkloadiStyle}
    />
  );
};

HugeIconinterfacebulkloadi.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacebulkload: PropTypes.string,

  /** Style props */
  hugeIconinterfacebulkloadWidth: PropTypes.any,
  hugeIconinterfacebulkloadHeight: PropTypes.any,
  hugeIconinterfacebulkloadPosition: PropTypes.any,
  hugeIconinterfacebulkloadTop: PropTypes.any,
  hugeIconinterfacebulkloadLeft: PropTypes.any,
};

export default HugeIconinterfacebulkloadi;
