import PropTypes from "prop-types";

const CommentReply = ({ className = "" }) => {
  const onReplyClick = (event) => {
    const element = event.currentTarget.parentElement.nextSibling;
    element.classList.toggle('hidden');
  }

  return (
    <button
      onClick={onReplyClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left inline-block ${className}`}
    >
      Reply
    </button>
  );
};

CommentReply.propTypes = {
  className: PropTypes.string,
};

export default CommentReply;
