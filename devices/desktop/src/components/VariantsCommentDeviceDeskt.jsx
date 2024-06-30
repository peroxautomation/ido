import ReplyOff from "./ReplyOff";
import StateDefaultVariantMessage from "./StateDefaultVariantMessage";
import PropTypes from "prop-types";

const VariantsCommentDeviceDeskt = ({ className = "", ellipse1198 }) => {
  return (
    <div
      className={`w-[518px] rounded-tl-13xl rounded-tr-none rounded-br-none rounded-bl-13xl bg-neutral-800 max-w-full h-[800px] flex flex-col items-start justify-between py-10 px-5 box-border relative text-center text-xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] z-[0]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[28px] font-semibold">
            Comments
          </div>
        </div>
        <div className="self-stretch rounded-t-xl rounded-b-none h-[420px] overflow-y-auto shrink-0 flex flex-col items-start justify-start">
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
        className="w-6 absolute !m-[0] top-[16px] right-[20px] h-6 overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/hugeiconinterfaceoutlineremove.svg"
      />
      <img
        className="w-0 absolute !m-[0] top-[85.5px] right-[8px] h-[235px] object-contain z-[3]"
        alt=""
        src="/line-511.svg"
      />
    </div>
  );
};

VariantsCommentDeviceDeskt.propTypes = {
  className: PropTypes.string,
  ellipse1198: PropTypes.string,
};

export default VariantsCommentDeviceDeskt;
