import React, { useState, useEffect, useMemo } from "react";
import StateDefaultSizeSmallVar1 from "./StateDefaultSizeSmallVar1";

const StateMovesDeviceTablet = (props) => {
  const {
    className = "",
    viewStory,
    contentContainerConponent,
    hugeIconarrowsoutlinezoom,
    hugeIconinterfaceoutlines,
    hugeIconcommunicationoutl,
    contentContainerConponent1,
    contentContainerConponent2,
    hugeIconfinanceAndPayment,
    showContentContainerConponent,
    stateMovesDeviceTabletWidth,
    stateMovesDeviceTabletPosition,
    stateMovesDeviceTabletRight,
    stateMovesDeviceTabletBottom,
    stateMovesDeviceTabletLeft,
    viewStoryWidth,
    viewStoryDisplay,
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
//     openLike,
// openView,
// openComment,
// openRating,
// openPlaylist,
// openShare,
// openChallengeOptions,
// openDonate,
// openStory,
// openZoom
  } = props;
  const stateMovesDeviceTabletStyle = useMemo(() => {
    return {
      width: stateMovesDeviceTabletWidth,
      position: stateMovesDeviceTabletPosition,
      right: stateMovesDeviceTabletRight,
      bottom: stateMovesDeviceTabletBottom,
      left: stateMovesDeviceTabletLeft,
    };
  }, [
    stateMovesDeviceTabletWidth,
    stateMovesDeviceTabletPosition,
    stateMovesDeviceTabletRight,
    stateMovesDeviceTabletBottom,
    stateMovesDeviceTabletLeft,
  ]);

  const viewStoryStyle = useMemo(() => {
    return {
      width: viewStoryWidth,
      display: viewStoryDisplay,
    };
  }, [viewStoryWidth, viewStoryDisplay]);


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

  useEffect(() => {
    if (isZoom) {
      setSelectedPost(post);
    } else {
      setSelectedPost(null);
    }
  }, [isZoom]);

  return (
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
            {showContentContainerConponent && (
              <img
                className="w-6 relative h-6"
                alt=""
                src={contentContainerConponent}
              />
            )}
            <img
              className="w-8 relative h-8 overflow-hidden shrink-0"
              alt=""
              src={hugeIconarrowsoutlinezoom}
            />
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
            src={hugeIconinterfaceoutlines}
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
            src={hugeIconcommunicationoutl}
          />
          <div className="relative leading-[24px]">12</div>
        </div>
        <img
          className="w-8 relative h-8"
          alt=""
          src={contentContainerConponent1}
        />
        <img
          className="w-8 relative h-8"
          alt=""
          src={contentContainerConponent2}
        />
        <img
          className="w-8 relative h-8"
          alt=""
          src="/content-container-conponents7.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconfinanceAndPayment}
        />
      </div>
    </div>
  );
};

export default StateMovesDeviceTablet;
