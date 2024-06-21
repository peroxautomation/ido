import MovesHeader from "../components/mobile/MovesHeader";
import RotateScaleBtn from "../components/mobile/RotateScaleBtn";
import MovesSlider from "../components/mobile/MovesSlider";
import MovesLikes from "../components/mobile/MovesLikes";
import MovesRate from "../components/mobile/MovesRate";
import MovesViews from "../components/mobile/MovesViews";
import MovesComment from "../components/mobile/MovesComment";
import MovesAddToPlaylist from "../components/mobile/MovesAddToPlaylist";
import MovesShare from "../components/mobile/MovesShare";
import MovesChallengeIcon from "../components/mobile/MovesChallengeIcon";
import MovesDonate from "../components/mobile/MovesDonate";
import { useNavigate } from "react-router-dom";
import CommentContainer from "../components/mobile/CommentContainer";
import StoryContainer from "../components/mobile/StoryContainer";
import MovesBtn from "../components/mobile/MovesBtn";

/**
 * Moves screen from another user's perspective
 * @returns A JSX element
 */
const OthersView = () => {
  const navigate = useNavigate();
  
  // Show comment section
  const onCommentClick = (event) => {
    const element =
      event.currentTarget.parentElement.parentElement.parentElement
        .parentElement.children[0];
    element.classList.toggle("hidden");
  };
  // Show dancer's story
  const onStoryClick = (event) => {
    const element =
      event.currentTarget.parentElement.parentElement.parentElement.parentElement
        .parentElement.children[1];
    element.classList.toggle("hidden");
  };

  /**
   * Navigate to donate screen
   */
  const onDonateClick = () => {
    navigate('/donate')
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[0.75rem] text-neutral-100 font-button-1-regular">
      <CommentContainer />
      <StoryContainer />
      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] overflow-hidden bg-[url('/public/moves@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <MovesHeader />
        <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] grid grif- box-border gap-[1rem]">
          <div className="self-stretch flex flex-col items-end justify-self-center gap-[1.5rem] w-[90vw]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <MovesBtn placeholder={"View story"} onClick={onStoryClick} />
              <RotateScaleBtn />
            </div>
            <MovesSlider />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[1rem] px-[1.25rem] gap-[1.25rem] max-w-[95vw]">
            <MovesLikes />
            <MovesRate />
            <MovesViews />
            <MovesComment onClick={onCommentClick} />
            <MovesAddToPlaylist />
            <MovesShare className="!block" />
            <MovesChallengeIcon className="!block" />
            <MovesDonate donate={true} onClick={onDonateClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersView;
