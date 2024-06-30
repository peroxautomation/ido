import React, { useState, useEffect, useMemo } from "react";
import DeviceTabletStateHalfMove from "./DeviceTabletStateHalfMove";
import StateMovesDeviceTablet from "./StateMovesDeviceTablet";

import StateForDefaultDeviceTabl from "./StateForDefaultDeviceTabl";
import StateDefaultSizeSmallVar1 from "./StateDefaultSizeSmallVar1";

const DesktopFullScreenMode = (props) => {
  const {
    className = "",
    // post,
    deviceTabletSizeStateFuWidth,
    deviceTabletSizeStateFuHeight,
    deviceTabletSizeStateFuBackgroundImage,
    deviceTabletSizeStateFuPosition,
    deviceTabletSizeStateFuTop,
    deviceTabletSizeStateFuRight,
    deviceTabletSizeStateFuBottom,
    deviceTabletSizeStateFuLeft,
    //======={new params}==========
    isComment,
    setIsComment,
    isStory,
    setIsStory,
    isLike,
    setIsLike,
    isRating,
    setIsRating,
    isView,
    setIsView,
    isPlaylist,
    setIsPlaylist,
    isShare,
    setIsShare,
    isChallengeOptions,
    setIsChallengeOptions,
    isDonate,
    setIsDonate,
    isZoom,
    setIsZoom,
    selectedPost,
    setSelectedPost,
    post,
  } = props;

  const showContentContainerConponent = true;
  const deviceTabletSizeStateFuStyle = useMemo(() => {
    return {
      width: deviceTabletSizeStateFuWidth,
      height: deviceTabletSizeStateFuHeight,
      backgroundImage: deviceTabletSizeStateFuBackgroundImage,
      position: deviceTabletSizeStateFuPosition,
      top: deviceTabletSizeStateFuTop,
      right: deviceTabletSizeStateFuRight,
      bottom: deviceTabletSizeStateFuBottom,
      left: deviceTabletSizeStateFuLeft,
    };
  }, [
    deviceTabletSizeStateFuWidth,
    deviceTabletSizeStateFuHeight,
    deviceTabletSizeStateFuBackgroundImage,
    deviceTabletSizeStateFuPosition,
    deviceTabletSizeStateFuTop,
    deviceTabletSizeStateFuRight,
    deviceTabletSizeStateFuBottom,
    deviceTabletSizeStateFuLeft,
  ]);

  const deviceTabletStateHalfMoveStyle = useMemo(() => {
    return {
      width: "100%",
      position: "absolute",
      top: "0px",
      right: "0px",
      left: "0px",
      height: "518px",
    };
  }, []);

  const stateMovesDeviceTabletStyle = useMemo(() => {
    return {
      width: "100%",
      position: "absolute",
      right: "0px",
      bottom: "-0.1px",
      left: "0px",
    };
  }, []);

  //=====function calls}==========================

  async function openLike() {
    setIsLike((prev) => !prev);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openView() {
    setIsLike(false);
    setIsView((prev) => !prev);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openComment() {
    setIsLike(false);
    setIsView(false);
    setIsComment((prev) => !prev);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openRating() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating((prev) => !prev);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openPlaylist() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist((prev) => !prev);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openShare() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare((prev) => !prev);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openChallengeOptions() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions((prev) => !prev);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom(false);
  }
  async function openDonate() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate((prev) => !prev);
    setIsStory(false);
    setIsZoom(false);
  }

  async function openStory() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory((prev) => !prev);
    setIsZoom(false);
  }

  async function openZoom() {
    setIsLike(false);
    setIsView(false);
    setIsComment(false);
    setIsRating(false);
    setIsPlaylist(false);
    setIsShare(false);
    setIsChallengeOptions(false);
    setIsDonate(false);
    setIsStory(false);
    setIsZoom((prev) => !prev);
  }

  // useEffect(() => {
  //   if (isZoom) {
  //     setSelectedPost(post);
  //   } else {
  //     setSelectedPost(null);
  //   }
  // }, [isZoom]);

  return (
    <div
      className={`w-[744px] max-w-full h-[1133px] overflow-hidden bg-[url('/public/devicetablet-size--statefull@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
      style={deviceTabletSizeStateFuStyle}
    >
      <div
        className={`w-[518px] h-[188px] max-w-full absolute flex flex-col items-start justify-start`}
        style={deviceTabletStateHalfMoveStyle}
      >
        <StateForDefaultDeviceTabl
          subtract="/subtract.svg"
          star5="/star-5.svg"
          unrelate="Relate"
          showMiniBtn
        />
      </div>

      <div
        className={`w-[744px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border gap-[16px] text-center text-base text-neutral-100 font-overline-regular ${className}`}
        style={stateMovesDeviceTabletStyle}
      >
        <div className="self-stretch flex flex-col items-end justify-start py-0 px-5 gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <StateDefaultSizeSmallVar1
              viewStoryText="View story"
              stateDefaultSizeSmallVarWidth="unset"
              stateDefaultSizeSmallVarBorderRadius="6px"
              stateDefaultSizeSmallVarPosition="unset"
              stateDefaultSizeSmallVarBottom="unset"
              stateDefaultSizeSmallVarLeft="unset"
              viewStoryFontSize="16px"
              viewStoryLineHeight="24px"
              viewStoryColor="#fff"
              viewStoryFontWeight="unset"
              viewStoryWidth="78px"
              viewStoryDisplay="inline-block"
            />
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src={"/content-container-conponents5.svg"}
              />
              <div className="" onClick={openZoom}>
                <img
                  className="cursor-pointer w-8 relative h-8 overflow-hidden shrink-0"
                  alt=""
                  src={"/hugeiconarrowsoutlinezoom-inrectangle.svg"}
                />
              </div>
              {/* <img
                className="cursor-pointer w-8 relative h-8 overflow-hidden shrink-0"
                alt=""
                src={"/hugeiconarrowsoutlinezoom-inrectangle.svg"}
                onClick={openZoom}
              /> */}
            </div>
          </div>
          <div className="w-[704px] h-1 flex flex-col items-start justify-start relative">
            <div className="w-[705px] relative box-border h-px z-[0] border-t-[1px] border-solid border-white-40" />
            <img
              className="w-[44.2px] relative h-[0.1px] object-contain z-[1]"
              alt=""
            />
            <div className="w-[11px] absolute !m-[0] top-[-6px] left-[25px] rounded-[50%] bg-neutral-100 h-[11px] z-[2]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-5 gap-[16px]">
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img className="w-8 relative h-8" alt="" src="/heart-icons1.svg" />
            <div className="relative leading-[24px]">63</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={"/hugeiconinterfaceoutlinestar3.svg"}
            />
            <div className="relative leading-[24px]">4.6</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src="/hugeiconinterfaceoutlineeye2.svg"
            />
            <div className="relative leading-[24px]">487</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={"/hugeiconcommunicationoutlinechat-021.svg"}
            />
            <div className="relative leading-[24px]">12</div>
          </div>
          <img
            className="w-8 relative h-8"
            alt=""
            src={"/content-container-conponents6.svg"}
          />
          <img
            className="w-8 relative h-8"
            alt=""
            src={"/content-container-conponents4.svg"}
          />
          <img
            className="w-8 relative h-8"
            alt=""
            src="/content-container-conponents7.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={"/hugeiconfinance-and-paymentoutlinedonate1.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopFullScreenMode;
