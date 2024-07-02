/**
 * Input component for cover
 * @param label input label
 * @param placeholder input placeholder
 * @param value input value
 * @param valueHandler handler to set the input value
 * @returns A JSX element
 */
const CoverInput = (props) => {
  const { label, placeholder, value, valueHandler } = props;
  return (
    <div className={`cover-input-container `}>
      <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] text-neutral-100">
        <div className="flex-1 relative leading-[1.5rem] whitespace-pre-wrap">
          {label}
        </div>
      </div>
      <input
        onInput={(e) => valueHandler(e.currentTarget.value)}
        value={value}
        placeholder={placeholder}
        className="cover-input"
      ></input>
      <div className="cover-input-danger">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

export default CoverInput;
