import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import PropTypes from "prop-types";

const Menus = ({
  className = "",
  hugeIconinterfaceoutlineh,
  propPosition,
  propHeight,
  propTop,
  propBottom,
  propLeft,
  propBackgroundColor,
  propPadding,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propBorderRadius,
  propBackgroundColor1,
  propWidth4,
  propWidth5,
  propWidth6,
}) => {
  const menusStyle = useMemo(() => {
    return {
      position: propPosition,
      height: propHeight,
      top: propTop,
      bottom: propBottom,
      left: propLeft,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [
    propPosition,
    propHeight,
    propTop,
    propBottom,
    propLeft,
    propBackgroundColor,
    propPadding,
  ]);

  const stateDefaultStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const stateDefaultStyle1 = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const stateDefaultStyle2 = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const stateDefaultStyle3 = useMemo(() => {
    return {
      width: propWidth3,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor1,
    };
  }, [propWidth3, propBorderRadius, propBackgroundColor1]);

  const stateDefaultStyle4 = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const stateDefaultStyle5 = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const stateDefaultStyle6 = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] ${className}`}
      style={menusStyle}
    >
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
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
        text="Upgrade to"
        rightIcon
        leftIcon={false}
        stateDefaultBorderRadius="unset"
        stateDefaultBackgroundColor="unset"
        homeColor="#fff"
      />
    </div>
  );
};

Menus.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propWidth3: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propWidth4: PropTypes.any,
  propWidth5: PropTypes.any,
  propWidth6: PropTypes.any,
};

export default Menus;
