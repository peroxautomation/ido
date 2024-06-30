import { useMemo } from "react";
import PropTypes from "prop-types";

const MessageFromAnotherUserDev = ({
  className = "",
  fromUserText = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary as necessary ",
  time = "18:35",
  messageFromAnotherUserDevWidth,
  messageFromAnotherUserDevPosition,
  messageFromAnotherUserDevTop,
  messageFromAnotherUserDevRight,
  messageFromAnotherUserDevLeft,
  messageFromAnotherUserDevBorderRadius,
  allTheLoremFlex,
  allTheLoremWidth,
  allTheLoremDisplay,
}) => {
  const messageFromAnotherUserDevStyle = useMemo(() => {
    return {
      width: messageFromAnotherUserDevWidth,
      position: messageFromAnotherUserDevPosition,
      top: messageFromAnotherUserDevTop,
      right: messageFromAnotherUserDevRight,
      left: messageFromAnotherUserDevLeft,
      borderRadius: messageFromAnotherUserDevBorderRadius,
    };
  }, [
    messageFromAnotherUserDevWidth,
    messageFromAnotherUserDevPosition,
    messageFromAnotherUserDevTop,
    messageFromAnotherUserDevRight,
    messageFromAnotherUserDevLeft,
    messageFromAnotherUserDevBorderRadius,
  ]);

  const allTheLoremStyle = useMemo(() => {
    return {
      flex: allTheLoremFlex,
      width: allTheLoremWidth,
      display: allTheLoremDisplay,
    };
  }, [allTheLoremFlex, allTheLoremWidth, allTheLoremDisplay]);

  return (
    <div
      className={`w-[420px] rounded-tl-none rounded-tr-2xl rounded-b-2xl bg-white-16 max-w-full flex flex-row items-center justify-center pt-2 px-3 pb-4 box-border relative gap-[8px] text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={messageFromAnotherUserDevStyle}
    >
      <div
        className="flex-1 relative leading-[28px] z-[0]"
        style={allTheLoremStyle}
      >
        {fromUserText}
      </div>
      <div className="w-8 absolute !m-[0] right-[8px] bottom-[4px] text-xs leading-[16px] text-right inline-block z-[1]">
        {time}
      </div>
    </div>
  );
};

MessageFromAnotherUserDev.propTypes = {
  className: PropTypes.string,
  fromUserText: PropTypes.string,
  time: PropTypes.string,

  /** Style props */
  messageFromAnotherUserDevWidth: PropTypes.any,
  messageFromAnotherUserDevPosition: PropTypes.any,
  messageFromAnotherUserDevTop: PropTypes.any,
  messageFromAnotherUserDevRight: PropTypes.any,
  messageFromAnotherUserDevLeft: PropTypes.any,
  messageFromAnotherUserDevBorderRadius: PropTypes.any,
  allTheLoremFlex: PropTypes.any,
  allTheLoremWidth: PropTypes.any,
  allTheLoremDisplay: PropTypes.any,
};

export default MessageFromAnotherUserDev;
