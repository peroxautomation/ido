import { useMemo } from "react";
import QuestionAnswer from "./QuestionAnswer";
import PropTypes from "prop-types";

const VariantsStoryDeviceTablet = ({
  className = "",
  variantsStoryDeviceTabletWidth,
  variantsStoryDeviceTabletHeight,
  variantsStoryDeviceTabletPosition,
  variantsStoryDeviceTabletTop,
  variantsStoryDeviceTabletRight,
  variantsStoryDeviceTabletBottom,
  variantsStoryDeviceTabletLeft,
}) => {
  const variantsStoryDeviceTabletStyle = useMemo(() => {
    return {
      width: variantsStoryDeviceTabletWidth,
      height: variantsStoryDeviceTabletHeight,
      position: variantsStoryDeviceTabletPosition,
      top: variantsStoryDeviceTabletTop,
      right: variantsStoryDeviceTabletRight,
      bottom: variantsStoryDeviceTabletBottom,
      left: variantsStoryDeviceTabletLeft,
    };
  }, [
    variantsStoryDeviceTabletWidth,
    variantsStoryDeviceTabletHeight,
    variantsStoryDeviceTabletPosition,
    variantsStoryDeviceTabletTop,
    variantsStoryDeviceTabletRight,
    variantsStoryDeviceTabletBottom,
    variantsStoryDeviceTabletLeft,
  ]);

  return (
    <div
      className={`w-[518px] rounded-t-13xl rounded-b-none bg-neutral-800 max-w-full h-[608px] flex flex-col items-start justify-start py-10 px-5 box-border relative gap-[16px] text-center text-xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsStoryDeviceTabletStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 relative leading-[28px] font-semibold">
          My story
        </div>
      </div>
      <div className="self-stretch h-[524px] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1]">
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
        <QuestionAnswer
          questionText="When did you start dancing?"
          answerText="2018"
        />
      </div>
      <img
        className="w-6 absolute !m-[0] top-[16px] right-[20px] h-6 overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/hugeiconinterfaceoutlineremove.svg"
      />
      <img
        className="w-0 absolute !m-[0] top-[85.5px] right-[8px] h-[235px] object-contain z-[3]"
        alt=""
        src="/line-51.svg"
      />
    </div>
  );
};

VariantsStoryDeviceTablet.propTypes = {
  className: PropTypes.string,

  /** Style props */
  variantsStoryDeviceTabletWidth: PropTypes.any,
  variantsStoryDeviceTabletHeight: PropTypes.any,
  variantsStoryDeviceTabletPosition: PropTypes.any,
  variantsStoryDeviceTabletTop: PropTypes.any,
  variantsStoryDeviceTabletRight: PropTypes.any,
  variantsStoryDeviceTabletBottom: PropTypes.any,
  variantsStoryDeviceTabletLeft: PropTypes.any,
};

export default VariantsStoryDeviceTablet;
