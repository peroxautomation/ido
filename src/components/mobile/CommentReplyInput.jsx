
const CommentReplyInput = (props) => {
  const {} = props;
  return (
    <div
      className={`self-stretch rounded-lg bg-white-8 flex flex-row items-start justify-between py-[0.5rem] px-[0.75rem]`}
    >
      <input
        className="comment-box-input"
        placeholder="Reply to comment"
        type="text"
      />
      <button className="comment-box-input-btn">
        Post
      </button>
    </div>
  );
};

export default CommentReplyInput;
