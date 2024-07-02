
/**
 * Input component use in Start premium screen and others
 * @param label the input label
 * @param className Additional tailwind classes to include
 * @param inputPlaceholder Input placeholder
 * @param isImportant flag if the input important
 * @param isRequired flag if the input required
 * @param value The input value
 * @param handleSetValue Handler to update the value in parent component
 * @returns
 */
const Input = (props) => {
  const { inputPlaceholder, isImportant, isRequired, label, value, handleSetValue } = props;
  return (
    <div className={`input-1-container`}>
      <div className="input-1-label">
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        {isImportant && (
          <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7ZM11 9.25C10.5858 9.25 10.25 9.58579 10.25 10C10.25 10.4142 10.5858 10.75 11 10.75H11.25V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V10C12.75 9.58579 12.4142 9.25 12 9.25H11Z"
                fill="#424242"
              />
            </svg>
          </div>
        )}
      </div>
      <input
        className="input-1-input"
        placeholder={inputPlaceholder}
        type="text"
        value={value ? value : ""}
        onInput={(e) => handleSetValue(e.currentTarget.value)}
      />
      {isRequired && (
        <div className="input-1-danger leading-[1.25rem]">Helper text</div>
      )}
    </div>
  );
};

export default Input;
