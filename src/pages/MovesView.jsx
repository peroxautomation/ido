import MovesHeader from "../components/mobile/MovesHeader";
import RotateScaleBtn from "../components/mobile/RotateScaleBtn";
import MovesSlider from "../components/mobile/MovesSlider";
import CommentContainer from "../components/mobile/CommentContainer";
import StoryContainer from "../components/mobile/StoryContainer";
import SaveToPlaylistPopup from "../components/mobile/SaveToPlaylistPopup";
import MovesBtn2 from "../components/mobile/MovesBtn2";
import RatingsDropdown from "../components/mobile/RatingsDropdown";
import CoverBtn from "../components/mobile/CoverBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

/**
 * View a moves screen. Either from a creator's perspective or another person.
 * @returns A JSX element
 */
const MovesView = () => {
  const { view, videoId } = useParams();
  console.log(videoId);
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({
    videoSource: "",
    ratings: 4.5,
    likes: 63,
    views: 487,
    creatorName: "Ronald Hilson",
    datePosted: "06.04.2024",
    location: "Dehli",
    genre: "Hip-Hop",
    stroyData: [
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
      { question: "When did you start dancing?", answer: "2018" },
    ],
  });
  const [currentRating, setCurrentRating] = useState(0);
  const [isRelating, setIsRelating] = useState(false);
  const [isSaveToPlaylist, setIsSaveToPlaylits] = useState(false);
  const [isRatingActive, setIsRatingActive] = useState(false);
  const [isVideoLiked, setIsVideoLiked] = useState(false);
  const [isVideoRated, setIsVideoRated] = useState(false);
  const [isCommentContainerActive, setIsCommentContainerActive] =
    useState(false);
  const [isStoryActive, setIsStoryActive] = useState(false);
  /************************************************************************* */
  /***************************{Component Methods}*************************** */
  /************************************************************************* */
  /**
   * Show comment section
   */
  const onCommentClick = () => {
    setIsCommentContainerActive(true);
  };

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
    setIsVideoLiked(!isVideoLiked);

    if (!isVideoLiked) {
      setVideoData({
        ...videoData,
        likes: videoData.likes + 1,
      });
    } else {
      setVideoData({
        ...videoData,
        likes: videoData.likes - 1,
      });
    }
  };

  /**
   * Toggle ratings dropdown
   */
  const rateHandler = (value) => {
    const rating = value;
    setVideoData({
      ...videoData,
      ratings: (videoData.ratings / 2 + (5 * (rating - 1)) / 8).toFixed(1),
    });
    setCurrentRating(value); //Update the current rating
    setIsVideoRated(true);
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

  if (view === "others") {
    return (
      <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[0.75rem] text-neutral-100 font-button-1-regular">
        {isCommentContainerActive && (
          <CommentContainer onExitClick={onCommentExitClick} />
        )}
        {isStoryActive && (
          <StoryContainer
            storyData={videoData.stroyData}
            onExitClick={onStoryExitClick}
          />
        )}
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] overflow-hidden bg-[url('/public/moves@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <MovesHeader
            isCreator={false}
            creatorName={videoData.creatorName}
            datePosted={videoData.datePosted}
            location={videoData.location}
            genre={videoData.genre}
            onRelateClick={setIsRelating}
            isRelating={isRelating}
          />
          <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] grid grif- box-border gap-[1rem]">
            <div className="self-stretch flex flex-col items-end justify-self-center gap-[1.5rem] w-[90vw]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="w-full grid justify-start">
                  <CoverBtn cta={"View story"} ctaClick={onStoryClick} />
                </div>
                <RotateScaleBtn />
              </div>
              <MovesSlider />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[1rem] px-[1.25rem] gap-[1.25rem] max-w-[95vw]">
              <MovesBtn2
                id="likeBtn"
                onClick={onLikeClick}
                imgSrc={
                  !isVideoLiked ? "/heart-icons.svg" : "/heart-icon-filled.svg"
                }
                count={videoData.likes}
              />
              <MovesBtn2
                id="rateBtn"
                onClick={onRatingsClick}
                imgSrc={isVideoRated ? "/starIcon.svg" : "/star-2.svg"}
                count={videoData.ratings}
              />
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
              <MovesBtn2
                id="shareBtn"
                onClick={null}
                imgSrc={"/share-icon.svg"}
              />
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
          {isRatingActive && (
            <RatingsDropdown
              className="!top-[58vh] left-[4rem]"
              selectHandler={rateHandler}
            ></RatingsDropdown>
          )}
        </div>
        {isSaveToPlaylist && (
          <SaveToPlaylistPopup
            handleSave={onSavePlaylistClick}
          ></SaveToPlaylistPopup>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[0.75rem] text-neutral-100 font-button-1-regular">
        {isCommentContainerActive && (
          <CommentContainer onExitClick={onCommentExitClick} />
        )}
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] overflow-hidden bg-[url('/public/moves@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <MovesHeader
            isCreator={true}
            creatorName={videoData.creatorName}
            datePosted={videoData.datePosted}
            location={videoData.location}
            genre={videoData.genre}
            onRelateClick={setIsRelating}
            isRelating={isRelating}
          />
          <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] grid grif- box-border gap-[1rem]">
            <div className="self-stretch flex flex-col items-end justify-self-center gap-[1.5rem] w-[90vw]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="w-full grid justify-start">
                  <CoverBtn cta={"View results"} ctaClick={onViewResultClick} />
                </div>
                <RotateScaleBtn />
              </div>
              <MovesSlider />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[1rem] px-[1.25rem] gap-[1.25rem] max-w-[95vw]">
              <MovesBtn2
                id="likeBtn"
                onClick={onLikeClick}
                imgSrc={
                  !isVideoLiked ? "/heart-icons.svg" : "/heart-icon-filled.svg"
                }
                count={videoData.likes}
              />
              <MovesBtn2
                id="rateBtn"
                onClick={onRatingsClick}
                imgSrc={isVideoRated ? "/starIcon.svg" : "/star-2.svg"}
                count={videoData.ratings}
              />
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
              <MovesBtn2
                id="shareBtn"
                onClick={null}
                imgSrc={"/share-icon.svg"}
              />
            </div>
          </div>
          {isRatingActive && (
            <RatingsDropdown
              className="!top-[58vh] left-[4rem]"
              selectHandler={rateHandler}
            ></RatingsDropdown>
          )}
        </div>
        {isSaveToPlaylist && (
          <SaveToPlaylistPopup
            handleSave={onSavePlaylistClick}
          ></SaveToPlaylistPopup>
        )}
      </div>
    );
  }
};

export default MovesView;
