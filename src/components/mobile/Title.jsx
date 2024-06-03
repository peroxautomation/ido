import { useMemo } from "react";
import Return from "./Return";
import PropTypes from "prop-types";

const Title = ({
  className = "",
  returnPage,
  pageName,
}) => {
  


  return (
    <header
      className={`absolute w-[calc(100%_-_40px)] top-[40px] right-[20px] left-[20px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border text-center text-xl text-white font-button-1-semibold ${className}`}
    >
      <Return />
      <div className="relative leading-[28px] font-semibold">{pageName}</div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-3@2x.png"
      />
    </header>
  );
};

export default Title;
