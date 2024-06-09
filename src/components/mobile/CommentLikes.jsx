import PropTypes from "prop-types";

const CommentLikes = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.125rem] px-[0.375rem] bg-neutral-800 w-[2.5rem] rounded-3xs h-[1.25rem] flex flex-row items-start justify-start box-border gap-[0.25rem] ${className}`}
    >
      <img
        className="w-[1rem] relative h-[1rem]"
        alt=""
        src="/hugeiconhealthoutlineheart.svg"
      />
      <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-left">
        2
      </div>
    </button>
  );
};

CommentLikes.propTypes = {
  className: PropTypes.string,
};

export default CommentLikes;
