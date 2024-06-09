import PropTypes from "prop-types";

const CommentInput = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-[0.25rem] px-[0rem] gap-[1rem] z-[2] ${className}`}
    >
      <input
        className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 flex-1 rounded-xl flex flex-row items-start justify-start py-[0.5rem] px-[1rem] text-neutral-600"
        placeholder="Add your comment"
        type="text"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-[66.67%] w-[86.25%] top-[16.67%] right-[8.33%] bottom-[16.67%] left-[5.42%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/send-fast@2x.png"
        />
      </button>
    </div>
  );
};

CommentInput.propTypes = {
  className: PropTypes.string,
};

export default CommentInput;
