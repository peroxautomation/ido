import PropTypes from "prop-types";

const CommentReplyInput = ({ className = "" }) => {
  return (
    <div
      className={`hidden self-stretch rounded-lg bg-white-8 flex flex-row items-start justify-between py-[0.5rem] px-[0.75rem] ${className}`}
    >
      <input
        className="[border:none] [outline:none] font-button-1-regular text-[0.75rem] bg-[transparent] flex-1 relative leading-[1rem] text-neutral-600 text-left"
        placeholder="Reply to comment"
        type="text"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.75rem] leading-[1rem] font-semibold font-button-1-regular text-neutral-100 text-left inline-block">
        Post
      </button>
    </div>
  );
};

CommentReplyInput.propTypes = {
  className: PropTypes.string,
};

export default CommentReplyInput;
