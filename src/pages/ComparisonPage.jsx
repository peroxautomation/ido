import CompareFrame from "../components/mobile/CompareFrame";
import TitleOfChallengedVideo from "../components/mobile/TitleOfChallengedVideo";
import ResultHeading from "../components/mobile/ResultHeading";
import { useNavigate } from "react-router-dom";
import CoverBtn from "../components/mobile/CoverBtn";

const ComparisonPage = () => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();

  /************************************************************************* */
  /***************************{Component Methods}*************************** */
  /************************************************************************* */
  const onResultClick = () => {
    navigate("/moves/comparison-result");
  };
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <ResultHeading />
      <div className="relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-max h-[35vh] top-[50vh] left-[20vw] grid grid-flow-row justify-items-center">
        <TitleOfChallengedVideo userName="Kateryna Jukova" rate="64%" />
        <CompareFrame imgSrc="/frame-7135@2x.png" />
      </div>
      <div className="relative [transform:_rotate(-90deg)] [transform-origin:0_0] w-[40vh] h-[35vh] top-[60vh] left-[20vw] grid grid-flow-row justify-items-center">
        <TitleOfChallengedVideo userName="Ronald Hilson" rate="100%" />
        <CompareFrame imgSrc="/frame-7134@2x.png" />
      </div>
      <div className="absolute top-[10vh] right-[70w] [transform:_rotate(-90deg)] text-nowrap w-[5.5rem] h-[2.4em] text-[0.85rem] text-neutral-100">
        <CoverBtn cta={"View results"} ctaClick={onResultClick} />
      </div>
    </div>
  );
};

export default ComparisonPage;
