import SearchBar from "./SearchBar";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import UserNameImg from "./UserNameImg";
import PropTypes from "prop-types";

const Header11 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] bg-neutral-800 w-screen flex flex-row items-center justify-between py-8 px-12 box-border text-center text-13xl text-neutral-100 font-overline-regular ${className}`}
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
        <div className="flex flex-row items-center justify-start">
          <UserNameImg ellipse1254="/ellipse-12542@2x.png" />
        </div>
      </div>
    </div>
  );
};

Header11.propTypes = {
  className: PropTypes.string,
};

export default Header11;
