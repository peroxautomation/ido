/**
 * Music timeline component 
 * @returns 
 */
const MusicTimeline = (props) => {
  const { } = props;
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[1rem] text-center text-[1rem] text-neutral-900  `}
    >
      <div className="rounded-8xl bg-neutral-100 flex flex-row items-center justify-center py-[0.25rem] px-[1rem]">
        <div className="relative leading-[1.5rem] font-semibold">0:49</div>
      </div>
      <div className="flex flex-col items-center justify-start relative gap-[0.062rem]">
        <img
          className="w-[11.75rem] relative max-h-full z-[0]"
          alt=""
          src="/line-52.svg"
        />
        <img
          className="w-[5.875rem] absolute !m-[0] top-[0rem] left-[2.938rem] max-h-full z-[1]"
          alt=""
          src="/line-53.svg"
        />
      </div>
    </div>
  );
};


export default MusicTimeline;
