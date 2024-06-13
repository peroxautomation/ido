import { useMemo } from "react";
import MovesTitle1 from "./MovesTitle1";
import MovesInfo from "./MovesInfo";
import MovesSlider1 from "./MovesSlider1";
import MovesLike from "./MovesLike";
import MovesFavourite from "./MovesFavourite";
import MovesViews1 from "./MovesViews1";
import MovesComment1 from "./MovesComment1";
import MovesAddToPlaylist1 from "./MovesAddToPlaylist1";
import MovesShare1 from "./MovesShare1";
import MovesChallenge from "./MovesChallenge";
import MovesDonate1 from "./MovesDonate1";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

/**
 * Moves component used in the Moves screen
 * @param {*} param0 
 * @returns 
 */
const Moves1 = ({ className = "" }) => {
  const navigate = useNavigate();

  // Navigate to create challenge
  const onChallengeClick = () => {
    navigate('/create/challenge', {state : {flow: "challenge"}});
  }

  /**
   * Navigate to donate screen
   */
  const onDonateClick = () => {
    navigate('/donate')
  }

  return (
    <div
      className={`w-[100%] relative h-[100%] overflow-hidden shrink-0 bg-[url('/public/moves1@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] flex flex-col items-start justify-start">
        <div className="self-stretch [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] flex flex-col items-start justify-center py-[1rem] px-[1.25rem] gap-[1rem]">
          <MovesTitle1 unrelate="Relate" />
          <MovesInfo
            divTextAlign="left"
            hipHopTextAlign="left"
            dehliTextAlign="left"
          />
        </div>
      </div>
      <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] flex flex-row items-end justify-start">
        <div className="flex-1 flex flex-col items-start justify-center py-[1rem] px-[1.187rem] gap-[1.5rem]">
          <div
            className="self-stretch h-[2rem] flex flex-row items-center justify-start"
          >
          </div>
          <MovesSlider1 />
          <div className="self-stretch flex flex-row items-start justify-start">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/hugeiconarrowsoutlinezoom-outrectangle.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[1rem] px-[1.25rem] gap-[1rem]">
          <MovesLike />
          <MovesFavourite />
          <MovesViews1 />
          <MovesComment1 />
          <MovesAddToPlaylist1 />
          <MovesShare1 />
          <MovesChallenge onCTAClick={onChallengeClick} />
          <MovesDonate1  onClick={onDonateClick} />
        </div>
      </div>
    </div>
  );
};

Moves1.propTypes = {
  className: PropTypes.string,
  unrelate: PropTypes.string,
  cTA: PropTypes.bool,
  showCTA: PropTypes.bool,

  /** Style props */
  btnIconsHeight: PropTypes.any,
};

export default Moves1;
