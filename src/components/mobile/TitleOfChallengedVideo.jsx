/**
 *  Video challenge title component
 * @param userName The creator's name
 * @param rate The similarty rate
 * @returns A JSX element
 */
const TitleOfChallengedVideo = (props) => {
  const { userName, rate } = props;
  return (
    <div
      className={`comparison-result-challenge-video-title`}
    >
      <div className="flex flex-row items-center justify-center gap-[0.5rem]">
        <div className="relative leading-[1.5rem] font-semibold text-left text-nowrap">
          {userName}
        </div>
        <div className="w-[1.5rem] relative h-[2.25rem] text-[0.75rem]">
          <img
            className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full [transform:_rotate(180deg)]"
            alt=""
            src="/star-5.svg"
          />
          <img
            className="relative w-[1.375rem] h-[0.875rem] top-[60%] left-[1.83%]"
            alt=""
            src="/subtract1.svg"
          />
          <div className="absolute top-[11.11%] left-[20.83%] leading-[1rem] font-semibold">
            17
          </div>
        </div>
        <div className="relative mr-6">Original</div>
        <div className="relative ">{rate}</div>
      </div>
    </div>
  );
};

export default TitleOfChallengedVideo;