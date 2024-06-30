import { useMemo } from "react";
import StateDefaultPropertyDeskto from "./StateDefaultPropertyDeskto";
import MenuDesktop1 from "./MenuDesktop1";
import PropTypes from "prop-types";

const StateUserDeviceHalf = ({
  className = "",
  hugeIconinterfaceoutlineh,
  hugeIcontimeAndDatesolidt,
  hugeIcondeviceoutlinenoti,
  menuDesktopBorderRadius,
  menuDesktopBackgroundColor,
}) => {
  const stateDefaultPropertyDeskto1Style = useMemo(() => {
    return {
      borderRadius: menuDesktopBorderRadius,
      backgroundColor: menuDesktopBackgroundColor,
    };
  }, [menuDesktopBorderRadius, menuDesktopBackgroundColor]);

  return (
    <div
      className={`bg-neutral-800 h-[916px] flex flex-col items-center justify-start py-12 px-6 box-border gap-[8px] ${className}`}
    >
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-02.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeicontime-and-datesolidtimequarter-past1@2x.png"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/heart-icons.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="unset"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinecard.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinemoney-bagdollar.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <MenuDesktop1 leftIcon />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeicondeviceoutlinenotification-01.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeicondeviceoutlinesetting.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinestar.svg"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
      <StateDefaultPropertyDeskto
        hugeIconinterfaceoutlineh="/hugeiconarrowssolidin2@2x.png"
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
      />
    </div>
  );
};

StateUserDeviceHalf.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,
  hugeIcontimeAndDatesolidt: PropTypes.string,
  hugeIcondeviceoutlinenoti: PropTypes.string,

  /** Style props */
  menuDesktopBorderRadius: PropTypes.any,
  menuDesktopBackgroundColor: PropTypes.any,
};

export default StateUserDeviceHalf;
