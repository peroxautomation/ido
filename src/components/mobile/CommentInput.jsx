/**
 * Comment container input field
 * @param {*} props
 * @returns
 */
const CommentInput = (props) => {
  const { value, handleSetValue } = props;
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-[0.25rem] px-[0rem] gap-[1rem] z-[2]`}
    >
      <input
        className="comments-container-input"
        placeholder="Add your comment"
        type="text"
        value={value}
        onInput={(e) => handleSetValue(e.currentTarget.value)}
      />
      <button className="comments-container-input-btn">
        <img
          className="absolute h-[66.67%] w-[86.25%] top-[16.67%] right-[8.33%] bottom-[16.67%] left-[5.42%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/send-fast@2x.png"
        />
      </button>
    </div>
  );
};

export default CommentInput;
