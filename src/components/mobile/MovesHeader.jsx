import MovesTitle from "./MovesTitle";

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
const MovesHeader = (props) => {
  const {
    isCreator,
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
      <MovesTitle
        isCreator={isCreator}
        creatorName={creatorName}
        onRelateClick={onRelateClick}
        isRelating={isRelating}
      />
      <div
        className={`self-stretch flex flex-col items-end justify-start gap-[0.25rem] text-right text-[1rem] text-neutral-100 `}
      >
        <div className="moves-header-text">
          {datePosted}
        </div>
        <div className="moves-header-text">
          {location}
        </div>
        <div className="moves-header-text">
          {genre}
        </div>
      </div>
    </div>
  );
};

export default MovesHeader;
