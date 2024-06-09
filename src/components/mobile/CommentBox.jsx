import UserComment from "./UserComment";
import CommentLikes from "./CommentLikes";
import CommentReply from "./CommentReply";
import PropTypes from "prop-types";
import CommentReplyInput from "./CommentReplyInput";

const CommentBox = ({ className = "", ellipse1198 }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start py-[1.5rem] px-[0rem] text-left text-[1rem] text-neutral-100 font-button-1-regular border-b-[1px] border-solid border-neutral-700 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <UserComment ellipse1198="/ellipse-1198@2x.png" />
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.312rem]">
          <CommentLikes />
          <CommentReply />
        </div>
        <CommentReplyInput />
      </div>
    </div>
  );
};

CommentBox.propTypes = {
  className: PropTypes.string,
  ellipse1198: PropTypes.string,
};

export default CommentBox;
