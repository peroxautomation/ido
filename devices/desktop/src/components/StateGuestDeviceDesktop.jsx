import { useMemo } from "react";
import StateDefaultPropertyDeskto1 from "./StateDefaultPropertyDeskto1";
import PropTypes from "prop-types";

const StateGuestDeviceDesktop = ({
  className = "",
  hugeIconinterfaceoutlineh,
  hugeIconinterfacesolidsea,
  hugeIconmultimediaAndAudi,
  hugeIconcommunicationoutl,
  hugeIconinterfaceoutlinei,
  hugeIconinterfaceoutlineh1,
  hugeIconinterfaceoutlineh2,
  stateGuestDeviceDesktopPosition,
  stateGuestDeviceDesktopBottom,
  stateGuestDeviceDesktopLeft,
  stateGuestDeviceDesktopHeight,
  stateGuestDeviceDesktopTop,
  menuDesktopBorderRadius,
  menuDesktopBackgroundColor,
  homeColor,
  menuDesktopBorderRadius1,
  menuDesktopBackgroundColor1,
  homeColor1,
}) => {
  const stateGuestDeviceDesktopStyle = useMemo(() => {
    return {
      position: stateGuestDeviceDesktopPosition,
      bottom: stateGuestDeviceDesktopBottom,
      left: stateGuestDeviceDesktopLeft,
      height: stateGuestDeviceDesktopHeight,
      top: stateGuestDeviceDesktopTop,
    };
  }, [
    stateGuestDeviceDesktopPosition,
    stateGuestDeviceDesktopBottom,
    stateGuestDeviceDesktopLeft,
    stateGuestDeviceDesktopHeight,
    stateGuestDeviceDesktopTop,
  ]);

  const stateDefaultPropertyDesktoStyle = useMemo(() => {
    return {
      borderRadius: menuDesktopBorderRadius,
      backgroundColor: menuDesktopBackgroundColor,
    };
  }, [menuDesktopBorderRadius, menuDesktopBackgroundColor]);

  const home1Style = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const stateDefaultPropertyDesktoStyle1 = useMemo(() => {
    return {
      borderRadius: menuDesktopBorderRadius1,
      backgroundColor: menuDesktopBackgroundColor1,
    };
  }, [menuDesktopBorderRadius1, menuDesktopBackgroundColor1]);

  const home1Style1 = useMemo(() => {
    return {
      color: homeColor1,
    };
  }, [homeColor1]);

  return (
    <div
      className={`bg-neutral-800 h-[916px] flex flex-col items-center justify-start p-12 box-border gap-[8px] ${className}`}
      style={stateGuestDeviceDesktopStyle}
    >
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
        text="Home"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-02.svg"
        text="Search"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidvideotick@2x.png"
        text="Moves"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="12px"
        stateDefaultPropertyDesktBackgroundColor="#fff"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#1b1b1b"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall.svg"
        text="Contact us"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="12px"
        stateDefaultPropertyDesktBackgroundColor="rgba(255, 255, 255, 0.08)"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation.svg"
        text="About us"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp.svg"
        text="FAQ"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
        text="Upgrade to"
        rightIcon
        leftIcon={false}
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
    </div>
  );
};

StateGuestDeviceDesktop.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,
  hugeIconmultimediaAndAudi: PropTypes.string,
  hugeIconcommunicationoutl: PropTypes.string,
  hugeIconinterfaceoutlinei: PropTypes.string,
  hugeIconinterfaceoutlineh1: PropTypes.string,
  hugeIconinterfaceoutlineh2: PropTypes.string,

  /** Style props */
  stateGuestDeviceDesktopPosition: PropTypes.any,
  stateGuestDeviceDesktopBottom: PropTypes.any,
  stateGuestDeviceDesktopLeft: PropTypes.any,
  stateGuestDeviceDesktopHeight: PropTypes.any,
  stateGuestDeviceDesktopTop: PropTypes.any,
  menuDesktopBorderRadius: PropTypes.any,
  menuDesktopBackgroundColor: PropTypes.any,
  homeColor: PropTypes.any,
  menuDesktopBorderRadius1: PropTypes.any,
  menuDesktopBackgroundColor1: PropTypes.any,
  homeColor1: PropTypes.any,
};

export default StateGuestDeviceDesktop;
