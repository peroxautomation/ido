/**
 * Input component for cover
 * @param label input label
 * @param placeholder input placeholder
 * @param value input value
 * @param valueHandler handler to set the input value
 * @returns A JSX element
 */
const CoverInput = (props) => {
  const { label, placeholder, value, valueHandler} = props;
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-600 font-button-1-regular `}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] text-neutral-100">
        <div className="flex-1 relative leading-[1.5rem] whitespace-pre-wrap">
          {label}
        </div>
      </div>
      <input
        placeholder={placeholder}
        className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-center py-[0.625rem] px-[1rem] text-nowrap text-left text-white focus:outline-none text-[1em] h-[3em]"
      ></input>
      <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

export default CoverInput;
