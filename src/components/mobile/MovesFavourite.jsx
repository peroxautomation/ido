const MovesFavourite = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100  `}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlinestar.svg"
      />
      <div className="relative leading-[1rem]">4.6</div>
    </div>
  );
};

export default MovesFavourite;
