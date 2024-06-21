const MovesRate = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]`}
    >
      <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] rounded-sm max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star-2.svg"
        />
      </div>
      <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-center">
        4.6
      </div>
    </button>
  );
};

export default MovesRate;
