const MovesShare = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] `}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/content-container-conponents.svg"
      />
    </button>
  );
};

export default MovesShare;
