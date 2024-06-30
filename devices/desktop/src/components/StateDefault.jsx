import PropTypes from "prop-types";

const StateDefault = ({ className = "", replyToCommentReplyToComm }) => {
  return (
    <div
      className={`rounded-lg bg-white-8 flex flex-row items-start justify-between py-2 px-3 box-border text-left text-xs text-neutral-600 font-overline-regular self-stretch ${className}`}
    >
      <div className="flex-1 relative leading-[16px]">
        {replyToCommentReplyToComm}
      </div>
      <div className="relative leading-[16px] font-semibold text-neutral-100">
        Post
      </div>
    </div>
  );
};

StateDefault.propTypes = {
  className: PropTypes.string,
  replyToCommentReplyToComm: PropTypes.string,
};

export default StateDefault;
