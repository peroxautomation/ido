import PropTypes from "prop-types";

const LikesForComment = ({ className = "", numOfLikes = "2" }) => {
  return (
    <div
      className={`w-10 rounded-3xs bg-neutral-800 h-5 flex flex-row items-start justify-start py-0.5 px-1.5 box-border gap-[4px] text-left text-xs text-neutral-100 font-overline-regular ${className}`}
    >
      <img
        className="w-4 relative h-4"
        alt=""
        src="/hugeiconhealthoutlineheart.svg"
      />
      <div className="relative leading-[16px]">{numOfLikes}</div>
    </div>
  );
};

LikesForComment.propTypes = {
  className: PropTypes.string,
  numOfLikes: PropTypes.string,
};

export default LikesForComment;
