import { useMemo } from "react";
import StateForMovesDeviceTablet1 from "./StateForMovesDeviceTablet1";
import HIndexIcon from "./HIndexIcon";
import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import VariantsCommentDeviceDeskt from "./VariantsCommentDeviceDeskt";

const UserPost = () => {
  return (
    <div
      // className={`relative w-[518px] max-w-full h-[800px] overflow-hidden bg-[url('/public/devicetablet-size--statehalf@3x.png')] bg-cover bg-no-repeat bg-[top]`}
      // style={deviceTabletSizeStateHaStyle}
      className={`relative w-[518px] max-w-full h-[800px] overflow-hidden`}
      style={{
        "background-image": `url('/moves@3x.png')`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "top",
        top: "148px",
        // "right":"329px",
        // "left":"593px"
        // "bottom":"76px"
      }}
    >
      <div
        className={`w-full absolute max-w-full flex flex-col items-start justify-start`}
      >
        {/* StateForMovesDeviceTablet */}
        <div
          className={`[background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-col items-start justify-center py-4 px-6 box-border gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular self-stretch`}
        >
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-end gap-[5px]">
              <HIndexIcon
                subtract="/subtract.svg"
                star5="/star-5.svg"
                hIndexIconPosition="relative"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[32px] font-semibold">
                  Ronald Hilson
                </div>
              </div>
              <div
                className={`w-[73px] rounded-md bg-[#1b1b1b] h-8 flex flex-row items-center justify-center p-1.5 box-border text-right text-sm text-neutral-100 font-overline-regular`}
              >
                <div className="relative leading-[20px]">{"Relate"}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch relative leading-[32px]">
              06.04.2024
            </div>
            <div className="self-stretch relative leading-[32px]">Hip-Hop</div>
            <div className="self-stretch relative leading-[32px]">Dehli</div>
          </div>
        </div>
      </div>
      {/* StateForMovesDeviceTablet1 */}
      <div
        className={`w-full absolute [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full h-full flex flex-row items-end justify-start text-center text-base text-neutral-100 font-overline-regular`}
      >
        <div className="flex-1 flex flex-col items-start justify-center py-4 px-[19px] gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div
              className={`w-[101px] rounded-md bg-neutral-800 flex flex-row items-center justify-center p-2 box-border text-center text-xs text-neutral-100 font-overline-regular`}
            >
              <div className="relative leading-[16px]">{"View story"}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start relative">
            <div className="self-stretch flex flex-col items-start justify-start z-[0]">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white-40" />
              <div className="w-8 relative box-border h-px border-t-[1px] border-solid border-neutral-100" />
            </div>
            <div className="w-[11px] absolute !m-[0] top-[-6px] left-[25px] rounded-[50%] bg-neutral-100 h-[11px] z-[1]" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={"/hugeiconarrowsoutlinezoom-outrectangle1.svg"}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-4 px-5 gap-[16px]">
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img className="w-8 relative h-8" alt="" src="/heart-icons1.svg" />
            <div className="relative leading-[24px]">63</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={"/hugeiconinterfaceoutlinestar3.svg"}
            />
            <div className="relative leading-[24px]">4.6</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src="/hugeiconinterfaceoutlineeye2.svg"
            />
            <div className="relative leading-[24px]">487</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={"/hugeiconcommunicationoutlinechat-021.svg"}
            />
            <div className="relative leading-[24px]">12</div>
          </div>
          <img
            className="w-8 relative h-8"
            alt=""
            src={"/content-container-conponents3.svg"}
          />
          <img
            className="w-8 relative h-8"
            alt=""
            src={"/content-container-conponents4.svg"}
          />
          <img
            className="w-8 relative h-8"
            alt=""
            src="/content-container-conponents2.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={"/hugeiconfinance-and-paymentoutlinedonate1.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPost;
