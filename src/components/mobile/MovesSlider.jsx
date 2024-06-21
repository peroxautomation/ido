const MovesSlider = (props) => {
  const { onSlide } = props;
  return (
    <div
      className={`flex flex-col items-start justify-start relative  w-[100%]`}
    >
      <div className="w-full relative box-border h-[0.063rem] z-[0] border-t-[1px] border-solid border-white-40" />
      <div className="w-[2rem] relative box-border h-[0.063rem] z-[1] border-t-[1px] border-solid border-neutral-100" />
      <div className="w-[0.688rem] absolute !m-[0] top-[-0.375rem] left-[1.563rem] rounded-[50%] bg-neutral-100 h-[0.688rem] z-[2]" />
    </div>
  );
};

export default MovesSlider;
