const NextFrameBtn = (props) => {
  const { className = "" } = props;
  return (
    <button
      className={`hidden cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 left-[11em] bottom-[4em]`}
    >
      <img
        className="absolute h-[45.83%] w-9/12 top-[27.08%] right-[12.5%] bottom-[27.08%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector12.svg"
      />
    </button>
  );
};

export default NextFrameBtn;
