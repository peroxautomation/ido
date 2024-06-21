const Radio1 = (props) => {
  const { element, value, radioName, label, onRadioClick, radioId } = props;
  const Element = element; //Radio element
  return (
    <label
      onClick={onRadioClick}
      className={`my-[1em] self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.5rem]">
        <Element name={radioName} value={value} id={radioId} />
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          {label}
        </div>
      </div>
    </label>
  );
};

export default Radio1;
