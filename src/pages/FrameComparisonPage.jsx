import TitleOfChallengedVideo from "../components/mobile/TitleOfChallengedVideo";
import ResultHeading from "../components/mobile/ResultHeading";
import CompareFrame from "../components/mobile/CompareFrame";
import PrevFrameBtn from "../components/mobile/PrevFrameBtn";
import NextFrameBtn from "../components/mobile/NextFrameBtn";
import { useState } from "react";

const FrameComparisonPage = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  /***************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Display next and prev buttons and make images opaque
   */
  const onScreenTouch = () => {
    // Add opacity
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div
      onClick={onScreenTouch}
      className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden"
    >
      <ResultHeading />
      {isButtonActive && <NextFrameBtn />}
      <div
        id="frameContainer-1"
        className={`relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-max h-[35vh] top-[50vh] left-[20vw] grid grid-flow-row justify-items-center ${
          isButtonActive ? "opacity-[0.4]" : ""
        }`}
      >
        <TitleOfChallengedVideo userName="Kateryna Jukova" rate="64%" />
        <CompareFrame imgSrc="/frame-7135@2x.png" />
      </div>
      <div
        id="frameContainer-2"
        className={`relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-[40vh] h-[35vh] top-[60vh] left-[20vw] grid grid-flow-row justify-items-center ${
          isButtonActive ? "opacity-[0.4]" : ""
        }`}
      >
        <TitleOfChallengedVideo userName="Ronald Hilson" rate="100%" />
        <CompareFrame imgSrc="/frame-7134@2x.png" />
      </div>
      {isButtonActive && <PrevFrameBtn />}
      <div className="absolute w-[90vh] [transform:_rotate(-90deg)] grid grid-flow-col items-start justify-between z-10"></div>
    </div>
  );
};

export default FrameComparisonPage;
