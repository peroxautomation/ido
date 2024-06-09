import PropTypes from "prop-types";

const MessageInput = ({ className = "" }) => {
  return (
    <input
      className={`[border:none] [outline:none] font-button-1-regular text-[1rem] text-white bg-white-8 flex-1 rounded-xl flex flex-row items-start justify-start py-[0.5rem] px-[1rem] text-neutral-300-100 ${className}`}
      placeholder="Your message"
      type="text"
    />
  );
};

MessageInput.propTypes = {
  className: PropTypes.string,
};

export default MessageInput;
