import ResultSegmentedPicker from "../components/mobile/ResultSegmentedPicker";
import Title from "../components/mobile/Title";
import ResultFrameRow from "../components/mobile/ResultFrameRow";
import { useState } from "react";

/**
 * Comparison result page
 * @returns
 */
const ComparisonResult = () => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [currentSegment, setCurrentSegment] = useState("all");

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center items-baseline">
      <Title pageName="Result" />
      <ResultSegmentedPicker
        currentSegment={currentSegment}
        setCurrent={setCurrentSegment}
      />
      <div className="relative overflow-y-auto flex flex-col items-start justify-start gap-[0.125rem] top-[8vh] h-[75vh]">
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
        <ResultFrameRow />
      </div>
    </div>
  );
};

export default ComparisonResult;
