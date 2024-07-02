import { useState } from "react";
import CommentBox from "./CommentBox";
import CommentInput from "./CommentInput";
import Exit from "./Exit";

/**
 * Moves comments container
 * @param {*} props
 * @returns A SJX element
 */
const CommentContainer = (props) => {
  /**************************************************************************** */
  /**************************{Props and Variables}****************************** */
  /*************************************************************************** */
  const { onExitClick } = props;
  /**TODO: Move this to parent component calling this component */
  const [commentsData, setCommentLikes] = useState([
    {
      id: 1,
      comment:
        "Some comment to this postSome comment to this postSome comment to this post",
      datePosted: "20 Apr 2024",
      userInfo: {
        profileImageSrc: "/ellipse-1198@2x.png",
        username: "Viktoria Fedorova",
      },
      likes: 2,
    },
    {
      id: 2,
      comment:
        "Some comment to this postSome comment to this postSome comment to this post",
      datePosted: "20 Apr 2024",
      userInfo: {
        profileImageSrc: "/ellipse-1198@2x.png",
        username: "Viktoria Fedorova",
      },
      likes: 2,
      replies: [],
    },
    {
      id: 3,
      comment:
        "Some comment to this postSome comment to this postSome comment to this post",
      datePosted: "20 Apr 2024",
      userInfo: {
        profileImageSrc: "/ellipse-1198@2x.png",
        username: "Viktoria Fedorova",
      },
      likes: 2,
      replies: {},
    },
    {
      id: 4,
      comment:
        "Some comment to this postSome comment to this postSome comment to this post",
      datePosted: "20 Apr 2024",
      userInfo: {
        profileImageSrc: "/ellipse-1198@2x.png",
        username: "Viktoria Fedorova",
      },
      likes: 2,
      replies: {},
    },
    {
      id: 5,
      comment:
        "Some comment to this postSome comment to this postSome comment to this post",
      datePosted: "20 Apr 2024",
      userInfo: {
        profileImageSrc: "/ellipse-1198@2x.png",
        username: "Viktoria Fedorova",
      },
      likes: 2,
      replies: {},
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /*************************************************************************** */
  /**
   * Handle updating comment likes
   * @param {*} isLike Boolean to flag if the action a like or unlike
   * @param {*} commentId The id of the comment to update
   */
  const handleLikeComment = (isLike, commentId) => {
    const newComments = [...commentsData];
    const commentToUpdate = newComments.find((c) => c.id == commentId);
    if (isLike) {
      commentToUpdate.likes += 1;
    } else {
      //Only update if likes is greater than 0
      if (commentToUpdate.likes > 0) {
        commentToUpdate.likes -= 1;
      }
    }
    setCommentLikes(newComments);
  };

  /**************************************************************************** */
  /********************************{Components}******************************** */
  /*************************************************************************** */
  const renderComments = () => {
    return commentsData.map((element, index) => (
      <CommentBox
        key={index}
        comment={element.comment}
        datePosted={element.datePosted}
        userInfo={element.userInfo}
        likes={element.likes}
        updateLikes={handleLikeComment}
        id={element.id}
        replies={element.replies}
      ></CommentBox>
    ));
  };

  return (
    <div
      className={`comments-container z-10`}
    >
      <Exit onClick={onExitClick} />
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 relative leading-[1.75rem] font-semibold">
          Comments
        </div>
      </div>
      <div className="self-stretch rounded-t-xl rounded-b-none max-h-[99%] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1] text-left text-[1rem]">
        {renderComments()}
      </div>
      <CommentInput value={inputValue} handleSetValue={setInputValue} />
    </div>
  );
};

export default CommentContainer;
