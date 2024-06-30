import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import MenuTablet from "./MenuTablet";
import PropTypes from "prop-types";

const Menus1 = ({
  className = "",
  hugeIconinterfaceoutlineh,
  hugeIconinterfacesolidsea,
  hugeIcontimeAndDateoutlin,
  home,
  hugeIconfinanceAndPayment,
  hugeIconfinanceAndPayment1,
  hugeIcondeviceoutlinenoti,
  hugeIconcommunicationoutl,
  hugeIconinterfaceoutlinei,
  hugeIconinterfaceoutlineh1,
  hugeIconinterfaceoutlineh2,
  hugeIconinterfaceoutlineh3,
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
  propOverflow,
  propWidth5,
  propWidth6,
  propWidth7,
  propWidth8,
  propWidth9,
  propWidth10,
  propWidth11,
  propWidth12,
  propWidth13,
  propWidth14,
}) => {
  const menus1Style = useMemo(() => {
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

  const hugeIconinterfaceoutlineho2Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

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

  const menuTabletStyle = useMemo(() => {
    return {
      width: propWidth7,
    };
  }, [propWidth7]);

  const stateDefaultStyle7 = useMemo(() => {
    return {
      width: propWidth8,
    };
  }, [propWidth8]);

  const stateDefaultStyle8 = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  const stateDefaultStyle9 = useMemo(() => {
    return {
      width: propWidth10,
    };
  }, [propWidth10]);

  const stateDefaultStyle10 = useMemo(() => {
    return {
      width: propWidth11,
    };
  }, [propWidth11]);

  const stateDefaultStyle11 = useMemo(() => {
    return {
      width: propWidth12,
    };
  }, [propWidth12]);

  const stateDefaultStyle12 = useMemo(() => {
    return {
      width: propWidth13,
    };
  }, [propWidth13]);

  const stateDefaultStyle13 = useMemo(() => {
    return {
      width: propWidth14,
    };
  }, [propWidth14]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={menus1Style}
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
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
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
  );
};

Menus1.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,
  hugeIcontimeAndDateoutlin: PropTypes.string,
  home: PropTypes.string,
  hugeIconfinanceAndPayment: PropTypes.string,
  hugeIconfinanceAndPayment1: PropTypes.string,
  hugeIcondeviceoutlinenoti: PropTypes.string,
  hugeIconcommunicationoutl: PropTypes.string,
  hugeIconinterfaceoutlinei: PropTypes.string,
  hugeIconinterfaceoutlineh1: PropTypes.string,
  hugeIconinterfaceoutlineh2: PropTypes.string,
  hugeIconinterfaceoutlineh3: PropTypes.bool,

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
  propOverflow: PropTypes.any,
  propWidth5: PropTypes.any,
  propWidth6: PropTypes.any,
  propWidth7: PropTypes.any,
  propWidth8: PropTypes.any,
  propWidth9: PropTypes.any,
  propWidth10: PropTypes.any,
  propWidth11: PropTypes.any,
  propWidth12: PropTypes.any,
  propWidth13: PropTypes.any,
  propWidth14: PropTypes.any,
};

export default Menus1;
