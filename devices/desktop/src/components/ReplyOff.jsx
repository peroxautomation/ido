import { useMemo } from "react";
import LikesForComment from "./LikesForComment";
import PropTypes from "prop-types";

const ReplyOff = ({
  className = "",
  ellipse1198,
  userName = "Viktoria Fedorova",
  date = "20 Apr 2024",
  comment = "Some comment to this postSome comment to this postSome comment to this post",
  replyOffAlignSelf,
  replyOffWidth,
}) => {
  const replyOffStyle = useMemo(() => {
    return {
      alignSelf: replyOffAlignSelf,
      width: replyOffWidth,
    };
  }, [replyOffAlignSelf, replyOffWidth]);

  return (
    <div
      className={`box-border flex flex-col items-end justify-start py-6 px-0 text-left text-base text-neutral-100 font-overline-regular self-stretch border-b-[1px] border-solid border-neutral-700 ${className}`}
      style={replyOffStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-6 relative rounded-[50%] h-6 object-cover"
                alt=""
                src={ellipse1198}
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                {userName}
              </div>
            </div>
            <div className="flex-1 relative text-sm leading-[20px] text-neutral-500 text-right">
              {date}
            </div>
          </div>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-400">
            {comment}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-xs text-neutral-500">
          <LikesForComment numOfLikes="2" />
          <div className="relative leading-[16px]">Reply</div>
        </div>
      </div>
    </div>
  );
};

ReplyOff.propTypes = {
  className: PropTypes.string,
  ellipse1198: PropTypes.string,
  userName: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,

  /** Style props */
  replyOffAlignSelf: PropTypes.any,
  replyOffWidth: PropTypes.any,
};

export default ReplyOff;
