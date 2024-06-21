import MovesLikes from "./MovesLikes";
import MovesFavourite from "./MovesFavourite";
import MovesViews from "./MovesViews";
import MovesShare from "./MovesShare";
import MovesChallenge from "./MovesChallenge";
import MovesDonate from "./MovesDonate";
import MovesAddToPlaylist from "./MovesAddToPlaylist";
import MovesComment from "./MovesComment";
import { useNavigate } from "react-router-dom";
import MovesSlider from "./MovesSlider";
import MovesHeader from "./MovesHeader";

/**
 * Moves component used in the Moves screen
 * @param {*} param0
 * @returns
 */
const Moves1 = (props) => {
  const {} = props;
  const navigate = useNavigate();

  // Navigate to create challenge
  const onChallengeClick = () => {
    navigate("/create/challenge", { state: { flow: "challenge" } });
  };

  /**
   * Navigate to donate screen
   */
  const onDonateClick = () => {
    navigate("/donate");
  };

  return (
    <div
      className={`w-[100%] relative h-[100%] overflow-hidden shrink-0 bg-[url('/public/moves1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 font-button-1-regular`}
    >
      <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start">
        <MovesHeader />
      </div>
      <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] flex flex-row items-end justify-start">
        <div className="flex-1 flex flex-col items-start justify-center py-[1rem] px-[1.187rem] gap-[1.5rem]">
          <div className="self-stretch h-[2rem] flex flex-row items-center justify-start"></div>
          <MovesSlider />
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/hugeiconarrowsoutlinezoom-outrectangle.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[1rem] px-[1.25rem] gap-[1rem]">
          <MovesLikes />
          <MovesFavourite />
          <MovesViews />
          <MovesComment />
          <MovesAddToPlaylist />
          <MovesShare />
          <MovesChallenge onCTAClick={onChallengeClick} />
          <MovesDonate donate={true} onClick={onDonateClick} />
        </div>
      </div>
    </div>
  );
};

export default Moves1;
