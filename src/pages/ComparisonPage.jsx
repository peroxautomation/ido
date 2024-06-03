import CompareFrame from "../components/mobile/CompareFrame";
import TitleOfChallengedVideo from "../components/mobile/TitleOfChallengedVideo";
import ResultHeading from "../components/mobile/ResultHeading";
import { useNavigate } from "react-router-dom";
import MovesBtn from "../components/mobile/MovesBtn";

const ComparisonPage = () => {
  const navigate = useNavigate();
  const onResultClick = () => {
    navigate('/moves/comparison-result')
  }
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <ResultHeading />
      <div className="relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-max h-[35vh] top-[50vh] left-[20vw] grid grid-flow-row justify-items-center">
        <TitleOfChallengedVideo userName="Kateryna Jukova" rate="64%" />
        <CompareFrame frame7134="/frame-7135@2x.png" />
      </div>
      <div className="relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-[40vh] h-[35vh] top-[60vh] left-[20vw] grid grid-flow-row justify-items-center">
        <TitleOfChallengedVideo userName="Ronald Hilson" rate="100%" />
        <CompareFrame frame7134="/frame-7134@2x.png" />
      </div>
      <MovesBtn
        className="absolute top-[10vh] right-[70w] bottom-0 [transform:_rotate(-90deg)] text-nowrap w-[5.5rem] h-[2.4em]"
        placeholder={"View results"}
        onClick={onResultClick}
      />
    </div>
  );
};

export default ComparisonPage;
