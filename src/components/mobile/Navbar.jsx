import { useMemo } from "react";
import PropTypes from "prop-types";

const Navbar = ({
  className = "",
  searchBorderBottom,
  hugeIconinterfacebulksear,
  movesBorderBottom,
  hugeIconmultimediaAndAudi,
  profileBorderBottom,
  hugeIconinterfaceoutlineu,
}) => {
  const searchStyle = useMemo(() => {
    return {
      borderBottom: searchBorderBottom,
    };
  }, [searchBorderBottom]);

  const movesStyle = useMemo(() => {
    return {
      borderBottom: movesBorderBottom,
    };
  }, [movesBorderBottom]);

  const profileStyle = useMemo(() => {
    return {
      borderBottom: profileBorderBottom,
    };
  }, [profileBorderBottom]);

  return (
    <footer
      className={`absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [backdrop-filter:blur(20px)] h-[3.5rem] ${className}`}
    >
      <img
        className="relative w-[23.438rem] h-[3.5rem]"
        alt=""
        src="/union2.svg"
      />
      <div className="absolute top-[0rem] left-[0rem] w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] box-border">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlinehome-04.svg"
        />
      </div>
      <div
        className="absolute top-[0rem] left-[5rem] box-border w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] border-b-[3px] border-solid border-primary-500"
        style={searchStyle}
      >
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacebulksear}
        />
      </div>
      <div
        className="absolute top-[0rem] left-[13.438rem] w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] box-border"
        style={movesStyle}
      >
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={hugeIconmultimediaAndAudi}
        />
      </div>
      <div
        className="absolute top-[calc(50%_-_28px)] right-[0rem] w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] box-border"
        style={profileStyle}
      >
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfaceoutlineu}
        />
      </div>
      <div className="absolute top-[-2rem] left-[10.5rem] rounded-xl bg-primary-500 flex flex-row items-start justify-start p-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlineplus.svg"
        />
      </div>
    </footer>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacebulksear: PropTypes.string,
  hugeIconmultimediaAndAudi: PropTypes.string,
  hugeIconinterfaceoutlineu: PropTypes.string,

  /** Style props */
  searchBorderBottom: PropTypes.any,
  movesBorderBottom: PropTypes.any,
  profileBorderBottom: PropTypes.any,
};

export default Navbar;
