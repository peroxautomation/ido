import PropTypes from "prop-types";

/**
 * Input component use in Start premium screen and others
 * @param {*} label the input label
 * @param {*} className Additional tailwind classes to include
 * @param {*} inputPlaceholder Input placeholder
 * @param {*} isRequired flag if the input required
 * @returns
 */
const Input = ({
  className = "",
  inputPlaceholder,
  isRequired,
  label,
  value,
  handleSetValue,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] font-button-1-regular ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        {isRequired && (
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
        className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] text-neutral-100"
        placeholder={inputPlaceholder}
        type="text"
        value={value ? value : ""}
        onInput={(e) => handleSetValue(e.currentTarget.value)}
      />
      <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hugeIconinterfacesolidinf: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  hugeIconinterfacesolidinf1: PropTypes.string,
  hugeIconinterfacesolidinf2: PropTypes.string,
  hugeIconinterfacesolidinf3: PropTypes.string,
  hugeIconinterfacesolidinf4: PropTypes.string,

  /** Style props */
  inputAlignSelf: PropTypes.any,
  inputPosition: PropTypes.any,
  inputTop: PropTypes.any,
  inputLeft: PropTypes.any,
  inputWidth: PropTypes.any,
  labelAlignSelf: PropTypes.any,
  labelWidth: PropTypes.any,
  inputAlignSelf1: PropTypes.any,
  inputWidth1: PropTypes.any,
  helperTextWidth: PropTypes.any,
};

export default Input;
