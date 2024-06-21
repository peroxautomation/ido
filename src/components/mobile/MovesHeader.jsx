import MovesTitle from "./MovesTitle";
import MovesInfo from "./MovesInfo";

/**
 *
 * @param movesInfo Moves info object consiting of date, location, genre
 * @param isCreator Boolean to flag if the video is in creator view or not
 * @returns
 */
const MovesHeader = (props) => {
  const { movesInfo, isCreator } = props;
  return (
    <div
      className={`self-stretch [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] flex flex-col items-end justify-start py-[1rem] px-[1.25rem] gap-[1rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular `}
    >
      <MovesTitle isCreator={isCreator} />
      <MovesInfo />
    </div>
  );
};

export default MovesHeader;
