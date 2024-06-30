import { useMemo } from "react";
import Pro from "./Pro";

const StateDefaultPropertyDeskto1 = (props) => {
  const {
    hugeIconinterfaceoutlineh,
    text = "Home",
    leftIcon = true,
    hugeIconinterfaceoutlinehOverflow,
    homeColor,
    active,
    openPlans,
  } = props;

  const hugeIconinterfaceoutlinehoStyle = useMemo(() => {
    return {
      overflow: hugeIconinterfaceoutlinehOverflow,
    };
  }, [hugeIconinterfaceoutlinehOverflow]);

  const home1Style = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  return (
    <>
      {text == "Upgrade to" ? (
        <div
          className={`w-full flex flex-row items-center justify-start py-3 pr-0 pl-4 box-border gap-[8px] text-left text-base text-neutral-100 font-overline-regular cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#fff]/10 hover:rounded-[12px] ${
            active && "bg-[#fff] rounded-[12px]"
          }`}
          onClick={openPlans}
        >
          <div className="flex flex-row items-center justify-start gap-[15px]">
            {leftIcon && (
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src={hugeIconinterfaceoutlineh}
                style={hugeIconinterfaceoutlinehoStyle}
              />
            )}
            <div className="relative leading-[24px]" style={home1Style}>
              {text}
            </div>
          </div>
          {text == "Upgrade to" && (
            <>
              <Pro />
            </>
          )}
        </div>
      ) : (
        <div
          className={`w-full flex flex-row items-center justify-start py-3 pr-0 pl-4 box-border gap-[8px] text-left text-base text-neutral-100 font-overline-regular cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[#fff]/10 hover:rounded-[12px] ${
            active && "bg-[#fff] rounded-[12px]"
          }`}
        >
          <div className="flex flex-row items-center justify-start gap-[15px]">
            {leftIcon && (
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src={hugeIconinterfaceoutlineh}
                style={hugeIconinterfaceoutlinehoStyle}
              />
            )}
            <div className="relative leading-[24px]" style={home1Style}>
              {text}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StateDefaultPropertyDeskto1;
