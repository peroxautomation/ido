import { useNavigate } from "react-router-dom";
import MovesSlider from "./MovesSlider";
import MovesBtn2 from "./MovesBtn2";
import MovesHeader2 from "./MovesHeader2";
import CommentContainer from "./CommentContainer";
import StoryContainer from "./StoryContainer";
import { useState } from "react";
import RatingsDropdown from "./RatingsDropdown";
import SaveToPlaylistPopup from "./SaveToPlaylistPopup";
import CoverBtn from "./CoverBtn";
import RotateScaleBtn from "./RotateScaleBtn";

/**
 * Moves component used in the Moves screen
 * @param {*} videoData The video data
 * @param handleUpdateData handler to update the data
 * @returns
 */
const Moves1 = (props) => {
  const { videoData, handleRelate, handleLikeVideo, handleRateVideo } = props;
  const navigate = useNavigate();
  const [isCommentContainerActive, setIsCommentContainerActive] =
    useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);
  const [isSaveToPlaylist, setIsSaveToPlaylits] = useState(false);
  const [isRatingActive, setIsRatingActive] = useState(false);

  /**
   * Show dancer's story
   */
  const onStoryClick = () => {
    setIsStoryActive(true);
  };

  /**
   * Show dancer's story
   */
  const onStoryExitClick = () => {
    setIsStoryActive(false);
  };

  /**
   * Show comment section
   */
  const onCommentClick = () => {
    setIsCommentContainerActive(true);
  };

  /**
   * Navigate to donate screen
   */
  const onDonateClick = () => {
    navigate("/donate");
  };

  /**
   * Navigate to donate screen
   */
  const onChallengeClick = () => {
    navigate("/create/challenge", { state: { flow: "challenge" } });
  };

  /**
   * Open save to playlist popup
   */
  const onSaveToPlaylistClick = () => {
    setIsSaveToPlaylits(!isSaveToPlaylist);
  };

  /**
   * Handle like video
   */
  const onLikeClick = () => {
    handleLikeVideo(videoData.id);
  };

  /**
   * Handle update rating
   */
  const onRatingsClick = () => {
    setIsRatingActive(!isRatingActive);
  };

  /* Navigate to Сomparison page */
  const onViewResultClick = () => {
    navigate("/moves/comparison-page");
  };

  /**
   * On playlist save click
   */
  const onSavePlaylistClick = () => {
    setIsSaveToPlaylits(false);
  };

  /**
   * Close comment container
   */
  const onCommentExitClick = () => {
    setIsCommentContainerActive(false);
  };

  /**
   * Handle relating
   */
  const onRelateClick = () => {
    handleRelate(videoData.id);
  };

  /**
   * Handle rating a move
   */
  const onRateClick = (value) => {
    handleRateVideo(videoData.id, value);
  };

  return (
    <div
      className={`w-[100%] relative h-full overflow-hidden shrink-0 bg-[url('/public/moves1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 `}
    >
      {isCommentContainerActive && (
        <CommentContainer onExitClick={onCommentExitClick} />
      )}
      {isStoryActive && <StoryContainer storyData={videoData.stroyData} onExitClick={onStoryExitClick}/>}
      <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start">
        <MovesHeader2
          isCreator={false}
          creatorName={videoData.creatorName}
          datePosted={videoData.datePosted}
          location={videoData.location}
          genre={videoData.genre}
          onRelateClick={onRelateClick}
          isRelating={videoData.isRelating}
        />
      </div>
      <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] flex flex-row items-end justify-start">
        <div className="flex-1 flex flex-col items-start justify-center py-[1rem] px-[1.187rem] gap-[1.5rem]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="w-full grid justify-start">
              <CoverBtn cta={"View story"} ctaClick={onStoryClick} />
            </div>
            <RotateScaleBtn />
          </div>
          <MovesSlider />
        </div>
        <div className="flex flex-col items-start justify-start py-[1rem] px-[1.25rem] gap-[1rem]">
          <MovesBtn2
            id="likeBtn"
            onClick={onLikeClick}
            imgSrc={
              !videoData.isLiked ? "/heart-icons.svg" : "/heart-icon-filled.svg"
            }
            count={videoData.likes}
          />
          <div className="relative grid-flow-row">
            {isRatingActive && (
              <RatingsDropdown
                className="!right-[4vh] !top-0"
                selectHandler={onRateClick}
              ></RatingsDropdown>
            )}
            <MovesBtn2
              id="rateBtn"
              onClick={onRatingsClick}
              imgSrc={videoData.isRated ? "/starIcon.svg" : "/star-2.svg"}
              count={videoData.ratings}
            />
          </div>
          <MovesBtn2
            id="viewBtn"
            imgSrc={"/views-icon.svg"}
            count={videoData.views}
          />
          <MovesBtn2
            id="commentBtn"
            onClick={onCommentClick}
            imgSrc={"/comments-icon.svg"}
          />
          <MovesBtn2
            id="saveBtn"
            onClick={onSaveToPlaylistClick}
            imgSrc={"/saveToPlaylist.svg"}
          />
          <MovesBtn2 id="shareBtn" onClick={null} imgSrc={"/share-icon.svg"} />
          <MovesBtn2
            id="challengeBtn"
            onClick={onChallengeClick}
            imgSrc={"/challenge-icon.svg"}
          />
          <MovesBtn2
            id="donateBtn"
            onClick={onDonateClick}
            imgSrc={"/donate.png"}
          />
        </div>
      </div>
      {isSaveToPlaylist && (
        <SaveToPlaylistPopup
          handleSave={onSavePlaylistClick}
        ></SaveToPlaylistPopup>
      )}
    </div>
  );
};

export default Moves1;
