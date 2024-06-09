import CommentBox from "./CommentBox";
import CommentInput from "./CommentInput";
import Exit from "./Exit";
import PropTypes from "prop-types";

const CommentContainer = ({ className = "" }) => {
  const onExitClick = (event) => {
    const element = event.currentTarget.parentElement;
    element.classList.toggle('hidden');
  }

  return (
    <div
      className={`z-10 hidden absolute w-full right-[0rem] bottom-[0rem] left-[0rem] rounded-t-13xl rounded-b-none bg-neutral-800 h-[38rem] flex flex-col items-start justify-start py-[2.5rem] px-[1.25rem] box-border gap-[1rem] text-center text-[1.25rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <Exit onClick={onExitClick} />
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 relative leading-[1.75rem] font-semibold">
          Comments
        </div>
      </div>
      <div className="self-stretch rounded-t-xl rounded-b-none h-[26.25rem] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1] text-left text-[1rem]">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
      <CommentInput />
    </div>
  );
};

CommentContainer.propTypes = {
  className: PropTypes.string,
};

export default CommentContainer;
