/**
 * Component for email inputs
 * @param {*} label Input label
 * @param {*} inputPlaceholder Input placeholder
 * @param {*} id Input id
 * @param {*} emailValue value of the input
 * @param {*} handleSetEmail set value handler
 * @param {*} isRequired toggle required message
 * @returns A JSX element
 */
const EmailInput = (props) => {
  const {
    label,
    inputPlaceholder,
    id,
    emailValue,
    handleSetEmail,
    isRequired,
  } = props;

  return (
    <div className={`primary-input-container`}>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">{label}</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
      <input
        id={id}
        className="email-input"
        placeholder={inputPlaceholder}
        type="email"
        value={emailValue ? emailValue : ""}
        onInput={(e) => handleSetEmail(e.currentTarget.value)}
      />
      {isRequired && (
        <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-darkslategray">
          <div className="flex-1 relative leading-[20px]">
            Please enter your email
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailInput;
