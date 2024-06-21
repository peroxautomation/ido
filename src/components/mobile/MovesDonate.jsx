const MovesDonate = (props) => {
  const { donate, onClick } = props;
  return (
    donate && (
      <button
        onClick={onClick}
        className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0`}
      >
        <img
          className="absolute h-[29.17%] w-[41.67%] top-[33.33%] right-[50%] bottom-[37.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-2066.svg"
        />
        <img
          className="absolute h-1/4 w-9/12 top-[58.33%] right-[16.67%] bottom-[16.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-2067.svg"
        />
        <img
          className="absolute h-[41.67%] w-[41.67%] top-[16.67%] right-[8.33%] bottom-[41.67%] left-[50%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-251.svg"
        />
      </button>
    )
  );
};

export default MovesDonate;
