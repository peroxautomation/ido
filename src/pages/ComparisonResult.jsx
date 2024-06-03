import ResultSegmentedPicker from "../components/mobile/ResultSegmentedPicker";
import Title from "../components/mobile/Title";
import ResultFrameRow from "../components/mobile/ResultFrameRow";

const ComparisonResult = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center items-baseline">
      <Title
        titleRight="1.313rem"
        titleLeft="1.188rem"
        pageName="Result"
        titleWidth="calc(100% - 40px)"
        direactionLeft="/direaction-left.svg"
      />
      <ResultSegmentedPicker />
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
