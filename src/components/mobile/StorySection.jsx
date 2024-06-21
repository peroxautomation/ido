const StorySection = (props) => {
  const {} = props;
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[1rem] px-[0rem] text-left text-[1rem] text-neutral-100 font-button-1-regular border-b-[1px] border-solid border-neutral-700 `}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-[0.125rem] px-[0rem]">
        <b className="flex-1 relative leading-[1.5rem]">
          When did you start dancing?
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-[0.125rem] px-[0rem] text-neutral-500">
        <div className="flex-1 relative leading-[1.5rem]">2018</div>
      </div>
    </div>
  );
};

export default StorySection;
