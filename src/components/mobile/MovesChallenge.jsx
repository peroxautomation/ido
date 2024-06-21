const MovesChallenge = (props) => {
  const { onCTAClick } = props;
  return (
    <img
      onClick={onCTAClick}
      className={`w-[1.5rem] relative h-[1.5rem] `}
      alt=""
      src="/content-container-conponents2.svg"
    />
  );
};

export default MovesChallenge;
