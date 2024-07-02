import MovesInfo from "./MovesInfo";
import MovesBtn from "./MovesBtn";

/**
 * Moves title component
 * @param isCreator Boolean to flag if the video is in creator view or not
 * @param creatorName Dance creator name
 * @param datePosted Date the dance was posted
 * @param location Dance location origin
 * @param genre Genre the dance belongs to
 * @param onRelateClick On relate click function
 * @param isRelating Boolean to check if the user is already relating to creator
 * @returns A JSX element
 */
const MovesHeader2 = (props) => {
  const {
    creatorName,
    datePosted,
    location,
    genre,
    onRelateClick,
    isRelating,
  } = props;
  return (
    <div
      className={`moves-header [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))]`}
    >
      <div className={`moves-header-title  `}>
        <div className="flex flex-row items-center justify-end gap-[0.312rem]">
          <div className="w-[1.5rem] relative h-[2.25rem] grid grid-flow-row justify-items-center">
            <img
              className="absolute w-[1.375rem] h-[0.875rem] top-5"
              alt=""
              src="/subtract1.svg"
            />
            <img
              className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star-5.svg"
            />
            <div className="absolute top-[11.11%] left-[20.83%] leading-[1rem] font-semibold">
              17
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-left text-[1rem]">
            <div className="relative leading-[1.5rem] font-semibold">
              {creatorName}
            </div>
          </div>
          <MovesBtn handleRelate={onRelateClick} isRelating={isRelating} />
        </div>
      </div>
      <MovesInfo date={datePosted} location={location} genre={genre} />
    </div>
  );
};

export default MovesHeader2;
