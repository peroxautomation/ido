const CommentReply = () => {
  const {} = props;
  const onReplyClick = (event) => {
    const element = event.currentTarget.parentElement.nextSibling;
    element.classList.toggle("hidden");
  };

  return (
    <button
      onClick={onReplyClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left inline-block`}
    >
      Reply
    </button>
  );
};

export default CommentReply;
