/**
 * Textarea component
 * @param value Textarea value
 * @param setValue Handle setting textarea value
 * @param label Textarea label
 * @param isRequired Toggle required message
 * @param requiredMessage Message to display when input is not entered
 * @returns A JSX element
 */
const TextArea = (props) => {
  const { value, setValue, label, isRequired, requiredMessage} = props;
  return (
    <div className={`textarea-container `}>
      <div className="self-stretch flex flex-row items-start justify-end gap-[0.375rem]">
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/importantIcon.svg"
        />
      </div>
      <textarea
        onInput={(e) => setValue(e.currentTarget.value)}
        value={value}
        className="textarea-input"
        placeholder="Answer for question"
      />
      {isRequired && (
        <div className="input-1-danger leading-[1.25rem]">{requiredMessage}</div>
      )}
    </div>
  );
};
export default TextArea;
