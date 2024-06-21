const MovesViews = (props) => {
  const { onClick, count } = props;
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-[58.33%] w-[83.33%] top-[20.83%] right-[8.33%] bottom-[20.83%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector10.svg"
        />
      </div>
      <div className="relative leading-[1rem]">487</div>
    </div>
  );
};

export default MovesViews;
