import StorySection from "./StorySection";
import Exit from "./Exit";

/**
 * Creator dance story component
 * @param stroyData Moves story data
 * @param onExitClick on Exit icon click
 * @returns
 */
const StoryContainer = (props) => {
  /************************************************************************************ */
  /***************************{Component Variables & States}*************************** */
  /************************************************************************************ */
  const { storyData, onExitClick } = props;

  /************************************************************************* */
  /***************************{Component Methods}*************************** */
  /************************************************************************* */
  const renderStoryData = () => {
    return storyData.map((element, index) => (
      <StorySection
        key={index}
        question={element.question}
        answer={element.answer}
      ></StorySection>
    ));
  };

  return (
    <div
      className={`z-10 absolute w-full right-[0rem] bottom-[0rem] rounded-t-13xl rounded-b-none bg-neutral-800 h-[89%] flex flex-col items-start justify-start py-[2.5rem] px-[1.25rem] box-border gap-[1rem] text-center text-[1.25rem] text-neutral-100 font-button-1-regular `}
    >
      <Exit onClick={onExitClick} />
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        My story
      </div>
      <div className="self-stretch h-[90%] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1] text-left text-[1rem]">
        {renderStoryData()}
      </div>
      <img
        className="w-[0rem] absolute !m-[0] top-[5.344rem] right-[0.5rem] h-[14.688rem] object-contain z-[3]"
        alt=""
        src="/line-51.svg"
      />
    </div>
  );
};

export default StoryContainer;
