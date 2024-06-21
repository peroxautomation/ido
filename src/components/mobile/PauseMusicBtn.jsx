const PauseMusicBtn = () => {
  const {} = props;
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[2rem] relative h-[2rem] overflow-hidden shrink-0 `}
    >
      <img
        className="absolute h-[58.44%] w-[66.56%] top-[20.94%] right-[16.88%] bottom-[20.63%] left-[16.56%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/pauseMusic.svg"
      />
    </button>
  );
};

export default PauseMusicBtn;
