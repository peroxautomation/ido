/**
 * Primary text input component
 * @param {*} label input label
 * @param {*} TextInput1Placeholder input placeholder
 * @param {*} inputValue input value
 * @param {*} setInputValue set input handler
 * @param {*} isRequired toggle the danger/required message
 * @returns A JSX element
 */
const TextInput1 = (props) => {
  const {
    label,
    TextInput1Placeholder,
    inputValue,
    setInputValue,
    isRequired,
  } = props;
  return (
    <div className={`self-stretch flex flex-col`}>
      <div className="text-input-primary-label">{label}</div>
      <input
        onInput={(event) => setInputValue(event.currentTarget.value)}
        className="text-input-primary"
        placeholder={TextInput1Placeholder}
        type="text"
        value={inputValue ? inputValue : ""}
      />
      {isRequired && (
        <div className="text-input-primary-danger">Helper text</div>
      )}
    </div>
  );
};

export default TextInput1;
