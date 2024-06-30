import React, { useState, useEffect, useMemo } from "react";
import StateForMovesDeviceTablet1 from "./StateForMovesDeviceTablet1";
import HIndexIcon from "./HIndexIcon";
import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import VariantsCommentDeviceDeskt from "./VariantsCommentDeviceDeskt";
import VariantsStoryDeviceDesktop from "./VariantsStoryDeviceDesktop";

const UserPost = (props) => {
  const {
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
    //====={more}==========
    // openLike,
    // openView,
    // openComment,
    // openRating,
    // openPlaylist,
    // openShare,
    // openChallengeOptions,
    // openDonate,
    // openStory,
    // openZoom,
  } = props;
  console.log({ isComment });
  console.log({ isStory });
  console.log({ isRating });
  console.log({ isLike });
  console.log({ isView });
  console.log({ isPlaylist });
  console.log({ isShare });
  console.log({ isChallengeOptions });
  console.log({ isDonate });
  console.log({ isZoom });

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

  const userPostContainer = (
    <>
      <div
        className={`relative w-[518px] max-w-full h-[800px] overflow-hidden`}
        style={{
          "background-image": `url('/moves@3x.png')`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "top",
          top: "148px",
        }}
        onClick={() => setSelectedPost(post)}
      >
        <div
          className={`w-full absolute max-w-full flex flex-col items-start justify-start`}
        >
          <div
            className={`[background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-col items-start justify-center py-4 px-6 box-border gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular self-stretch`}
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-end gap-[5px]">
                <HIndexIcon
                  subtract="/subtract.svg"
                  star5="/star-5.svg"
                  hIndexIconPosition="relative"
                />
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[32px] font-semibold">
                    Ronald Hilson
                  </div>
                </div>
                <div
                  className={`w-[73px] rounded-md bg-[#1b1b1b] h-8 flex flex-row items-center justify-center p-1.5 box-border text-right text-sm text-neutral-100 font-overline-regular`}
                >
                  <div className="relative leading-[20px]">{"Relate"}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
              <div className="self-stretch relative leading-[32px]">
                06.04.2024
              </div>
              <div className="self-stretch relative leading-[32px]">
                Hip-Hop
              </div>
              <div className="self-stretch relative leading-[32px]">Dehli</div>
            </div>
          </div>
        </div>
        {selectedPost ? (
          <>
            {" "}
            <div
              className={`w-full absolute [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full h-full flex flex-row items-end justify-start text-center text-base text-neutral-100 font-overline-regular`}
            >
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-[19px] gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div
                    className={`cursor-pointer w-[101px] rounded-md bg-neutral-800 flex flex-row items-center justify-center p-2 box-border text-center text-xs text-neutral-100 font-overline-regular`}
                    onClick={openStory}
                  >
                    <div className="relative leading-[16px]">
                      {"View story"}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative">
                  <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                    <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white-40" />
                    <div className="w-8 relative box-border h-px border-t-[1px] border-solid border-neutral-100" />
                  </div>
                  <div className="w-[11px] absolute !m-[0] top-[-6px] left-[25px] rounded-[50%] bg-neutral-100 h-[11px] z-[1]" />
                </div>
                <div
                  className="cursor-pointer self-stretch flex flex-row items-start justify-start"
                  onClick={openZoom}
                >
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconarrowsoutlinezoom-outrectangle1.svg"}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-4 px-5 gap-[16px]">
                <div
                  className="cursor-pointer flex flex-col items-center justify-start gap-[4px]"
                  onClick={openLike}
                >
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/heart-icons1.svg"
                  />
                  <div className="relative leading-[24px]">63</div>
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start gap-[4px]"
                  onClick={openRating}
                >
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconinterfaceoutlinestar3.svg"}
                  />
                  <div className="relative leading-[24px]">4.6</div>
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start gap-[4px]"
                  onClick={openView}
                >
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/hugeiconinterfaceoutlineeye2.svg"
                  />
                  <div className="relative leading-[24px]">487</div>
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start gap-[4px]"
                  onClick={openComment}
                >
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconcommunicationoutlinechat-021.svg"}
                  />
                  <div className="relative leading-[24px]">12</div>
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start"
                  onClick={openPlaylist}
                >
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src={"/content-container-conponents3.svg"}
                  />
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start"
                  onClick={openShare}
                >
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src={"/content-container-conponents4.svg"}
                  />
                </div>
                <div
                  className="cursor-pointer flex flex-col items-center justify-start"
                  onClick={openChallengeOptions}
                >
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/content-container-conponents2.svg"
                  />
                </div>

                <div
                  className="cursor-pointer flex flex-col items-center justify-start"
                  onClick={openDonate}
                >
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconfinance-and-paymentoutlinedonate1.svg"}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div
              className={`w-full absolute [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full h-full flex flex-row items-end justify-start text-center text-base text-neutral-100 font-overline-regular`}
            >
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-[19px] gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div
                    className={`cursor-pointer w-[101px] rounded-md bg-neutral-800 flex flex-row items-center justify-center p-2 box-border text-center text-xs text-neutral-100 font-overline-regular`}
                  >
                    <div className="relative leading-[16px]">
                      {"View story"}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative">
                  <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                    <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white-40" />
                    <div className="w-8 relative box-border h-px border-t-[1px] border-solid border-neutral-100" />
                  </div>
                  <div className="w-[11px] absolute !m-[0] top-[-6px] left-[25px] rounded-[50%] bg-neutral-100 h-[11px] z-[1]" />
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-start justify-start">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconarrowsoutlinezoom-outrectangle1.svg"}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-4 px-5 gap-[16px]">
                <div className="cursor-pointer flex flex-col items-center justify-start gap-[4px]">
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/heart-icons1.svg"
                  />
                  <div className="relative leading-[24px]">63</div>
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start gap-[4px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconinterfaceoutlinestar3.svg"}
                  />
                  <div className="relative leading-[24px]">4.6</div>
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start gap-[4px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/hugeiconinterfaceoutlineeye2.svg"
                  />
                  <div className="relative leading-[24px]">487</div>
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start gap-[4px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconcommunicationoutlinechat-021.svg"}
                  />
                  <div className="relative leading-[24px]">12</div>
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start">
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src={"/content-container-conponents3.svg"}
                  />
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start">
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src={"/content-container-conponents4.svg"}
                  />
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-start">
                  <img
                    className="w-8 relative h-8"
                    alt=""
                    src="/content-container-conponents2.svg"
                  />
                </div>

                <div className="cursor-pointer flex flex-col items-center justify-start">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src={"/hugeiconfinance-and-paymentoutlinedonate1.svg"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      {isComment ||
      isStory ||
      isLike ||
      isRating ||
      isView ||
      isPlaylist ||
      isShare ||
      isChallengeOptions ||
      isDonate ||
      isZoom ? (
        <>
          {isComment && (
            <div className="flex flex-row items-center justify-center">
              <div className="top-[148px] relative">
                {" "}
                <VariantsCommentDeviceDeskt ellipse1198="/ellipse-1198@2x.png" />
              </div>
              {userPostContainer}
            </div>
          )}
          {isStory && (
            <div className="flex flex-row items-center justify-center">
              <div className="top-[148px] relative">
                {" "}
                <VariantsStoryDeviceDesktop
                  variantsStoryDeviceTabletWidth="518px"
                  variantsStoryDeviceTabletHeight="800px"
                />
              </div>
              {userPostContainer}
            </div>
          )}
          {isLike && (
            <div className="flex flex-row items-center justify-center">
              <div className="top-[148px] relative">
                {" "}
                <VariantsCommentDeviceDeskt ellipse1198="/ellipse-1198@2x.png" />
              </div>
              {userPostContainer}
            </div>
          )}
        </>
      ) : (
        <> {userPostContainer}</>
      )}
    </>
  );
};

export default UserPost;
