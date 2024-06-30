import { useMemo } from "react";
import ReplyOff from "./ReplyOff";
import StateDefaultVariantMessage from "./StateDefaultVariantMessage";
import PropTypes from "prop-types";

const VariantsCommentDeviceTable = ({
  className = "",
  ellipse1198,
  variantsCommentDeviceTablWidth,
  variantsCommentDeviceTablHeight,
  variantsCommentDeviceTablPosition,
  variantsCommentDeviceTablTop,
  variantsCommentDeviceTablRight,
  variantsCommentDeviceTablBottom,
  variantsCommentDeviceTablLeft,
}) => {
  const variantsCommentDeviceTableStyle = useMemo(() => {
    return {
      width: variantsCommentDeviceTablWidth,
      height: variantsCommentDeviceTablHeight,
      position: variantsCommentDeviceTablPosition,
      top: variantsCommentDeviceTablTop,
      right: variantsCommentDeviceTablRight,
      bottom: variantsCommentDeviceTablBottom,
      left: variantsCommentDeviceTablLeft,
    };
  }, [
    variantsCommentDeviceTablWidth,
    variantsCommentDeviceTablHeight,
    variantsCommentDeviceTablPosition,
    variantsCommentDeviceTablTop,
    variantsCommentDeviceTablRight,
    variantsCommentDeviceTablBottom,
    variantsCommentDeviceTablLeft,
  ]);

  return (
    <div
      className={`w-[518px] rounded-t-13xl rounded-b-none bg-neutral-800 max-w-full h-[608px] flex flex-col items-start justify-start py-10 px-5 box-border relative gap-[16px] text-center text-xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsCommentDeviceTableStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 relative leading-[28px] font-semibold">
          Comments
        </div>
      </div>
      <div className="self-stretch rounded-t-xl rounded-b-none h-[420px] overflow-y-auto shrink-0 flex flex-col items-start justify-start z-[1]">
        <ReplyOff
          ellipse1198="/ellipse-1198@2x.png"
          userName="Viktoria Fedorova"
          date="20 Apr 2024"
          comment="Some comment to this postSome comment to this postSome comment to this post"
          replyOffAlignSelf="stretch"
          replyOffWidth="unset"
        />
        <ReplyOff
          ellipse1198="/ellipse-1198@2x.png"
          userName="Viktoria Fedorova"
          date="20 Apr 2024"
          comment="Some comment to this postSome comment to this postSome comment to this post"
          replyOffAlignSelf="stretch"
          replyOffWidth="unset"
        />
        <ReplyOff
          ellipse1198="/ellipse-1198@2x.png"
          userName="Viktoria Fedorova"
          date="20 Apr 2024"
          comment="Some comment to this postSome comment to this postSome comment to this post"
          replyOffAlignSelf="stretch"
          replyOffWidth="unset"
        />
        <ReplyOff
          ellipse1198="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
          userName="Viktoria Fedorova"
          date="20 Apr 2024"
          comment="Some comment to this postSome comment to this postSome comment to this post"
          replyOffAlignSelf="stretch"
          replyOffWidth="unset"
        />
      </div>
      <StateDefaultVariantMessage
        yourMessage="Add your comment"
        hugeIconcommunicationsoli="/hugeiconcommunicationsolidsentfast@2x.png"
        stateDefaultVariantMessagPosition="unset"
        stateDefaultVariantMessagWidth="unset"
        stateDefaultVariantMessagRight="unset"
        stateDefaultVariantMessagBottom="unset"
        stateDefaultVariantMessagLeft="unset"
        stateDefaultVariantMessagAlignSelf="stretch"
        searchInputWidth="unset"
        searchInputFlex="1"
        searchInputPadding="8px 16px"
        yourMessageFlex="unset"
        yourMessageFontSize="16px"
        yourMessageLineHeight="24px"
        yourMessageColor="#424242"
        yourMessageWidth="263px"
        yourMessageDisplay="inline-block"
        hugeIconcommunicationsoliWidth="24px"
        hugeIconcommunicationsoliHeight="24px"
      />
      <img
        className="w-6 absolute !m-[0] top-[16px] right-[20px] h-6 overflow-hidden shrink-0 z-[3]"
        alt=""
        src="/hugeiconinterfaceoutlineremove.svg"
      />
      <img
        className="w-0 absolute !m-[0] top-[85.5px] right-[8px] h-[235px] object-contain z-[4]"
        alt=""
        src="/line-511.svg"
      />
    </div>
  );
};

VariantsCommentDeviceTable.propTypes = {
  className: PropTypes.string,
  ellipse1198: PropTypes.string,

  /** Style props */
  variantsCommentDeviceTablWidth: PropTypes.any,
  variantsCommentDeviceTablHeight: PropTypes.any,
  variantsCommentDeviceTablPosition: PropTypes.any,
  variantsCommentDeviceTablTop: PropTypes.any,
  variantsCommentDeviceTablRight: PropTypes.any,
  variantsCommentDeviceTablBottom: PropTypes.any,
  variantsCommentDeviceTablLeft: PropTypes.any,
};

export default VariantsCommentDeviceTable;
