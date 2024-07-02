import UserComment from "./UserComment";
import CommentReplyInput from "./CommentReplyInput";
import { useState } from "react";

/**
 * Comment box component
 * @param comment The comment message/text
 * @param datePosted The date the comment was posted
 * @param userInfo A object of the user who posted the comment. { profileImageSrc, username, }
 * @param likes The number of like sthe comment has
 * @param updateLikes function to update likes
 * @param id the id of the comment
 * @param replies Array of comments
 * @returns
 */
const CommentBox = (props) => {
  /************************************************************************* */
  /********************************{Props}********************************** */
  /************************************************************************* */
  const { comment, datePosted, userInfo, likes, updateLikes, id, replies } =
    props;
  const [isReplyActive, setIsReplyActive] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  /************************************************************************* */
  /********************************{Methods}******************************** */
  /************************************************************************* */
  /**
   * Update comment like and apply css
   */
  const onLikeClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      updateLikes(true, id);
    } else {
      setIsLiked(false);
      updateLikes(false, id);
    }
  };

  /**
   * Toggle reply input
   */
  const onReplyClick = () => {
    setIsReplyActive(!isReplyActive);
  };

  /**
   * TODO: Render comment replies
   */
  const renderReplies = () => {};

  return (
    <div className={`comment-box`}>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <UserComment
          imageSrc={userInfo.profileImageSrc}
          username={userInfo.username}
          date={datePosted}
          comment={comment}
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.312rem]">
          <button onClick={onLikeClick} className={`comment-box-likes`}>
            <img
              src={isLiked ? "/heart-icon-filled.svg" : "/heart-icons.svg"}
              alt=""
              className="w-[16px] h-[16px]"
            />
            <div className="relative text-[0.75rem] leading-[1rem]  text-neutral-100 text-left">
              {likes}
            </div>
          </button>
          <button onClick={onReplyClick} className={`comment-box-reply-btn`}>
            Reply
          </button>
        </div>
        {isReplyActive && <CommentReplyInput />}
      </div>
    </div>
  );
};

export default CommentBox;
