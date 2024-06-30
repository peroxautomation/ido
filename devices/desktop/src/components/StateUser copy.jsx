import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import MenuTablet from "./MenuTablet";
import PropTypes from "prop-types";

const StateUser = ({
  className = "",
  hugeIconinterfaceoutlineh,
  stateUserPosition,
  stateUserTop,
  stateUserLeft,
}) => {
  const stateUserStyle = useMemo(() => {
    return {
      position: stateUserPosition,
      top: stateUserTop,
      left: stateUserLeft,
    };
  }, [stateUserPosition, stateUserTop, stateUserLeft]);

  return (
    <div
      className={`bg-neutral-800 h-[1133px] flex flex-col items-start justify-start py-12 px-6 box-border gap-[24px] ${className}`}
      style={stateUserStyle}
    >
      <img
        className="w-11 relative h-11 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove2.svg"
      />
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
          text="Home"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-02.svg"
          text="Search"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidvideotick@2x.png"
          text="Moves"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="12px"
          stateDefaultBackgroundColor="#fff"
          homeColor="#1b1b1b"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicontime-and-dateoutlinetimequarter-past.svg"
          text="History"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/heart-icons.svg"
          text="Liked history"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinecard.svg"
          text="Payments"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinemoney-bagdollar.svg"
          text="Subscriptions"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <MenuTablet text="Chat" rightIcon={false} leftIcon />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicondeviceoutlinenotification-01.svg"
          text="Notifications"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicondeviceoutlinesetting.svg"
          text="Settings"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall.svg"
          text="Contact us"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation.svg"
          text="About us"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp.svg"
          text="FAQ"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
          text="Upgrade to"
          rightIcon
          leftIcon={false}
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconarrowssolidin2@2x.png"
          text="Log out"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
      </div>
    </div>
  );
};

StateUser.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,

  /** Style props */
  stateUserPosition: PropTypes.any,
  stateUserTop: PropTypes.any,
  stateUserLeft: PropTypes.any,
};

export default StateUser;
