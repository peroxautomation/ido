import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefaultPropertyDeskto = ({
  className = "",
  hugeIconinterfaceoutlineh,
  leftIcon = true,
  stateDefaultPropertyDesktBorderRadius,
  stateDefaultPropertyDesktBackgroundColor,
  hugeIconinterfaceoutlinehOverflow,
}) => {
  const stateDefaultPropertyDeskto1Style = useMemo(() => {
    return {
      borderRadius: stateDefaultPropertyDesktBorderRadius,
      backgroundColor: stateDefaultPropertyDesktBackgroundColor,
    };
  }, [
    stateDefaultPropertyDesktBorderRadius,
    stateDefaultPropertyDesktBackgroundColor,
  ]);

  const hugeIconinterfaceoutlineho1Style = useMemo(() => {
    return {
      overflow: hugeIconinterfaceoutlinehOverflow,
    };
  }, [hugeIconinterfaceoutlinehOverflow]);

  return (
    <div
      className={`flex flex-row items-center justify-start py-3 px-4 ${className}`}
      style={stateDefaultPropertyDeskto1Style}
    >
      <div className="flex flex-row items-center justify-start">
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfaceoutlineh}
            style={hugeIconinterfaceoutlineho1Style}
          />
        )}
      </div>
    </div>
  );
};

StateDefaultPropertyDeskto.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,
  leftIcon: PropTypes.bool,

  /** Style props */
  stateDefaultPropertyDesktBorderRadius: PropTypes.any,
  stateDefaultPropertyDesktBackgroundColor: PropTypes.any,
  hugeIconinterfaceoutlinehOverflow: PropTypes.any,
};

export default StateDefaultPropertyDeskto;
