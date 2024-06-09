import PropTypes from "prop-types";

const ChatBox = ({ className = "", source, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[23.438rem] flex flex-row items-center justify-start py-[0.75rem] px-[1.25rem] box-border gap-[1.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3rem] relative rounded-3xl h-[3rem] object-cover"
          alt=""
          src={source}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.5rem] font-semibold">
            User name
          </div>
          <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
            Desc
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-[0.5rem] text-right text-[0.75rem] text-neutral-500">
        <div className="relative leading-[1rem] font-light">09 Apr 2024</div>
        <div className="relative leading-[1rem] font-light">18:35</div>
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  className: PropTypes.string,
  rectangle2002: PropTypes.string,
};

export default ChatBox;
