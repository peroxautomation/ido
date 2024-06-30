import { useMemo } from "react";
import StateRelateRequestDeviceD from "./StateRelateRequestDeviceD";

const VariantsRelating = (props) => {
  const {
    className = "",
    rectangle2002,
    rectangle20021,
    rectangle20022,
    rectangle20023,
    rectangle20024,
    variantsRelatingPosition,
    variantsRelatingTop,
    variantsRelatingLeft,
    closeModal,
  } = props;
  const variantsRelatingStyle = useMemo(() => {
    return {
      position: variantsRelatingPosition,
      top: variantsRelatingTop,
      left: variantsRelatingLeft,
    };
  }, [variantsRelatingPosition, variantsRelatingTop, variantsRelatingLeft]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] overflow-hidden flex flex-col items-center justify-center p-6 box-border text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsRelatingStyle}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
        <img
          className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidremove.svg"
          onClick={closeModal}
        />
        <div className="self-stretch bg-neutral-800 overflow-hidden flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[32px]">Relating</div>
          </div>
        </div>
        <div className="self-stretch h-[341px] overflow-y-auto shrink-0 flex flex-col items-end justify-start">
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20021@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20021@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20021@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20021@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20024@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20025@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20025@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20025@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
          <StateRelateRequestDeviceD
            rectangle2002="/rectangle-20025@2x.png"
            userName="User name"
            lastMessage="Desc"
          />
        </div>
      </div>
    </div>
  );
};

export default VariantsRelating;
