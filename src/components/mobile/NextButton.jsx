const NextButton = (props) => {
  const { onNextClick, cta } = props;
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] leading-[1.5rem] font-semibold font-overline-semibold text-neutral-100 text-center inline-block `}
      onClick={onNextClick}
    >
      {cta}
    </button>
  );
};

export default NextButton;
