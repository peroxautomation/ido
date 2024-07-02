/**
 * Secondary button for moves
 * @param onClick On click function
 * @param imgSrc Button image source
 * @param count likes, views, rating counts
 * @returns
 */
const MovesBtn2 = (props) => {
  const { onClick, imgSrc, count = null, id } = props;
  return (
    <button
      id={id}
      onClick={onClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]`}
    >
      <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] rounded-sm max-w-full overflow-hidden max-h-full"
          alt=""
          src={imgSrc}
        />
      </div>
      {count && (
        <div className="relative text-[0.75rem] leading-[1rem]  text-neutral-100 text-center">
          {count}
        </div>
      )}
    </button>
  );
};

export default MovesBtn2;
