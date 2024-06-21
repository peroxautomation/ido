const RotateScaleBtn = (props) => {
  const {} = props;
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[0.875rem] `}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] hidden"
        alt=""
        src="/content-container-conponents.svg"
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsoutlinezoom-inrectangle.svg"
      />
    </button>
  );
};

export default RotateScaleBtn;
