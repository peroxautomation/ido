const MovesInfo = (props) => {
  const { date, location, genre } = props;

  return (
    <div
      className={`self-stretch grid grid-flow-row justify-items-start gap-[0.25rem] text-right text-[1rem] text-neutral-100 `}
    >
      <div className="moves-header-text">
        {date}
      </div>
      <div className="moves-header-text">
        {genre}
      </div>
      <div className="moves-header-text">
        {location}
      </div>
    </div>
  );
};

export default MovesInfo;
