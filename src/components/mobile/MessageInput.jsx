
const MessageInput = (props) => {
  const { className = "" } = props;
  return (
    <input
      className={`[border:none] [outline:none]  text-[1rem] text-white bg-white-8 flex-1 rounded-xl flex flex-row items-start justify-start py-[0.5rem] px-[1rem] text-neutral-300-100`}
      placeholder="Your message"
      type="text"
    />
  );
};


export default MessageInput;
