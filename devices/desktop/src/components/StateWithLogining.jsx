import { useMemo } from "react";
import SearchBar from "./SearchBar";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import UserNameImg from "./UserNameImg";
import PropTypes from "prop-types";

const StateWithLogining = ({
  className = "",
  hugeIconinterfacesolidsea,
  ellipse1254,
  stateWithLoginingWidth,
  stateWithLoginingPosition,
  stateWithLoginingTop,
  stateWithLoginingRight,
  stateWithLoginingLeft,
  userNameImgTextDecoration,
}) => {
  const stateWithLoginingStyle = useMemo(() => {
    return {
      width: stateWithLoginingWidth,
      position: stateWithLoginingPosition,
      top: stateWithLoginingTop,
      right: stateWithLoginingRight,
      left: stateWithLoginingLeft,
    };
  }, [
    stateWithLoginingWidth,
    stateWithLoginingPosition,
    stateWithLoginingTop,
    stateWithLoginingRight,
    stateWithLoginingLeft,
  ]);

  const userNameImgStyle = useMemo(() => {
    return {
      textDecoration: userNameImgTextDecoration,
    };
  }, [userNameImgTextDecoration]);

  return (
    <div
      className={`w-[1440px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] bg-neutral-800 max-w-full flex flex-row items-center justify-between py-8 px-12 box-border text-center text-13xl text-neutral-100 font-overline-regular ${className}`}
      style={stateWithLoginingStyle}
    >
      <div className="relative leading-[40px] font-semibold">LOGO</div>
      <div className="flex flex-row items-center justify-start gap-[24px]">
        <SearchBar hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-02.svg" />
        <SizeSmallStatePrimaryDev
          text="Create challenge"
          hugeIconinterfacesolidplu="/hugeiconinterfaceoutlineplus.svg"
          rightIcon
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
        <div
          className="flex flex-row items-center justify-start"
          style={userNameImgStyle}
        >
          <UserNameImg ellipse1254="/ellipse-12542@2x.png" />
        </div>
      </div>
    </div>
  );
};

StateWithLogining.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,
  ellipse1254: PropTypes.string,

  /** Style props */
  stateWithLoginingWidth: PropTypes.any,
  stateWithLoginingPosition: PropTypes.any,
  stateWithLoginingTop: PropTypes.any,
  stateWithLoginingRight: PropTypes.any,
  stateWithLoginingLeft: PropTypes.any,
  userNameImgTextDecoration: PropTypes.any,
};

export default StateWithLogining;
