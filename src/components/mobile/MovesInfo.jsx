const MovesInfo = (props) => {
  const { date, location, genre } = props;

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[0.25rem] text-right text-[1rem] text-neutral-100 font-button-1-regular`}
    >
      <div className="self-stretch relative leading-[1.5rem] font-semibold">
        06.04.2024
      </div>
      <div className="self-stretch relative leading-[1.5rem] font-semibold">
        Hip-Hop
      </div>
      <div className="self-stretch relative leading-[1.5rem] font-semibold">
        Dehli
      </div>
    </div>
  );
};

export default MovesInfo;
