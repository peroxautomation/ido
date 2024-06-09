import StorySection from "./StorySection";
import Exit from "./Exit";
import PropTypes from "prop-types";

const StoryContainer = ({ className = "" }) => {
  const onExitClick = (event) => {
    const element = event.currentTarget.parentElement;
    element.classList.toggle('hidden');
  }
  
  return (
    <div
      className={`z-10 hidden absolute w-full right-[0rem] bottom-[0rem] rounded-t-13xl rounded-b-none bg-neutral-800 h-[38rem] flex flex-col items-start justify-start py-[2.5rem] px-[1.25rem] box-border gap-[1rem] text-center text-[1.25rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <Exit onClick={onExitClick} />
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 relative leading-[1.75rem] font-semibold">
          My story
        </div>
      </div>
      <div className="self-stretch h-[90%] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1] text-left text-[1rem]">
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
        <StorySection />
      </div>
      <img
        className="w-[0rem] absolute !m-[0] top-[5.344rem] right-[0.5rem] h-[14.688rem] object-contain z-[3]"
        alt=""
        src="/line-51.svg"
      />
    </div>
  );
};

StoryContainer.propTypes = {
  className: PropTypes.string,
};

export default StoryContainer;
