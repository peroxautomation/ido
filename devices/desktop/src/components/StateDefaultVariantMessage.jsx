import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefaultVariantMessage = ({
  className = "",
  yourMessage,
  hugeIconcommunicationsoli,
  stateDefaultVariantMessagPosition,
  stateDefaultVariantMessagWidth,
  stateDefaultVariantMessagRight,
  stateDefaultVariantMessagBottom,
  stateDefaultVariantMessagLeft,
  stateDefaultVariantMessagAlignSelf,
  searchInputWidth,
  searchInputFlex,
  searchInputPadding,
  yourMessageFlex,
  yourMessageFontSize,
  yourMessageLineHeight,
  yourMessageColor,
  yourMessageWidth,
  yourMessageDisplay,
  hugeIconcommunicationsoliWidth,
  hugeIconcommunicationsoliHeight,
}) => {
  const stateDefaultVariantMessageStyle = useMemo(() => {
    return {
      position: stateDefaultVariantMessagPosition,
      width: stateDefaultVariantMessagWidth,
      right: stateDefaultVariantMessagRight,
      bottom: stateDefaultVariantMessagBottom,
      left: stateDefaultVariantMessagLeft,
      alignSelf: stateDefaultVariantMessagAlignSelf,
    };
  }, [
    stateDefaultVariantMessagPosition,
    stateDefaultVariantMessagWidth,
    stateDefaultVariantMessagRight,
    stateDefaultVariantMessagBottom,
    stateDefaultVariantMessagLeft,
    stateDefaultVariantMessagAlignSelf,
  ]);

  const searchInput1Style = useMemo(() => {
    return {
      width: searchInputWidth,
      flex: searchInputFlex,
      padding: searchInputPadding,
    };
  }, [searchInputWidth, searchInputFlex, searchInputPadding]);

  const yourMessageStyle = useMemo(() => {
    return {
      flex: yourMessageFlex,
      fontSize: yourMessageFontSize,
      lineHeight: yourMessageLineHeight,
      color: yourMessageColor,
      width: yourMessageWidth,
      display: yourMessageDisplay,
    };
  }, [
    yourMessageFlex,
    yourMessageFontSize,
    yourMessageLineHeight,
    yourMessageColor,
    yourMessageWidth,
    yourMessageDisplay,
  ]);

  const hugeIconcommunicationsolidStyle = useMemo(() => {
    return {
      width: hugeIconcommunicationsoliWidth,
      height: hugeIconcommunicationsoliHeight,
    };
  }, [hugeIconcommunicationsoliWidth, hugeIconcommunicationsoliHeight]);

  return (
    <div
      className={`max-w-full flex flex-row items-center justify-start py-1 px-0 box-border gap-[16px] text-left text-xl text-neutral-300 font-overline-regular ${className}`}
      style={stateDefaultVariantMessageStyle}
    >
      <div
        className="w-[648px] rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 box-border"
        style={searchInput1Style}
      >
        <div
          className="flex-1 relative leading-[28px]"
          style={yourMessageStyle}
        >
          {yourMessage}
        </div>
      </div>
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconcommunicationsoli}
        style={hugeIconcommunicationsolidStyle}
      />
    </div>
  );
};

StateDefaultVariantMessage.propTypes = {
  className: PropTypes.string,
  yourMessage: PropTypes.string,
  hugeIconcommunicationsoli: PropTypes.string,

  /** Style props */
  stateDefaultVariantMessagPosition: PropTypes.any,
  stateDefaultVariantMessagWidth: PropTypes.any,
  stateDefaultVariantMessagRight: PropTypes.any,
  stateDefaultVariantMessagBottom: PropTypes.any,
  stateDefaultVariantMessagLeft: PropTypes.any,
  stateDefaultVariantMessagAlignSelf: PropTypes.any,
  searchInputWidth: PropTypes.any,
  searchInputFlex: PropTypes.any,
  searchInputPadding: PropTypes.any,
  yourMessageFlex: PropTypes.any,
  yourMessageFontSize: PropTypes.any,
  yourMessageLineHeight: PropTypes.any,
  yourMessageColor: PropTypes.any,
  yourMessageWidth: PropTypes.any,
  yourMessageDisplay: PropTypes.any,
  hugeIconcommunicationsoliWidth: PropTypes.any,
  hugeIconcommunicationsoliHeight: PropTypes.any,
};

export default StateDefaultVariantMessage;
