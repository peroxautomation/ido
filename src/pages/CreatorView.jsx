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
import MovesBtn from "../components/mobile/MovesBtn";

const CreatorView = () => {
  const navigate = useNavigate();

  /* Navigate to Сomparison page */
  const onViewResultClick = () => {
    navigate('/moves/comparison-page')
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] overflow-hidden bg-[url('/public/moves@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start">
          <MovesHeader />
        </div>
        <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] grid grif- box-border gap-[1rem]">
          <div className="self-stretch flex flex-col items-end justify-self-center gap-[1.5rem] w-[90vw]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <MovesBtn 
                placeholder={"View results"}
                onClick={onViewResultClick}
                className="text-nowrap w-[5.5rem] h-[2rem]"
              />
              <RotateScaleBtn />
            </div>
            <MovesSlider />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[1rem] px-[1.25rem] gap-[1rem]">
            <MovesLikes />
            <MovesRate />
            <MovesViews />
            <MovesComment />
            <MovesAddToPlaylist />
            <MovesShare />
            <MovesChallengeIcon />
            <MovesDonate donate={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorView;