const TextArea = (props) => {
  const { whatAspectsAreInspiredFro } = props;
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="self-stretch flex flex-row items-start justify-end gap-[0.375rem]">
        <div className="flex-1 relative leading-[1.5rem]">
          {whatAspectsAreInspiredFro}
        </div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidinformation12.svg"
        />
      </div>
      <textarea
        className="[border:none] bg-white-8 font-button-1-regular text-[1rem] [outline:none] self-stretch rounded-xl h-[8.75rem] flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border text-neutral-600 w-[20.938rem]"
        placeholder="Answer for question"
      />
    </div>
  );
};
export default TextArea;
