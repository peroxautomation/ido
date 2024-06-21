import { useCallback, useState } from "react";

/**
 * Component for password inputs
 * @param {*} inputAndWordPlaceholder input placeholder
 * @param {*} label input label
 * @param {*} id input id
 * @param {*} passwordValue input value
 * @param {*} handleSetPassword set value handler
 * @param {*} validatePass  Function to validate password
 * @returns A JSX element
 */
const PasswordInput = (props) => {
  const {
    inputAndWordPlaceholder,
    label,
    id,
    handleSetPassword,
    passwordValue,
    validatePass,
  } = props;
  /**************************************************************************************** */
  /********************************{Component Variables}********************************** */
  /*************************************************************************************** */
  const [isActive, setIsActive] = useState(false); // Hide password flag
  const [btnSource, setBtnSource] = useState("/hidePasswordIcon.svg"); // Hide password button source
  const [passwordType, setPaswordType] = useState("password"); // Toggle hide password

  /************************************************************************************* */
  /********************************{Component Methods}********************************** */
  /************************************************************************************* */
  /**
   * Toggle show/hide password
   */
  const onToggleShowPassword = useCallback(() => {
    const showPass = !isActive;
    setIsActive(!isActive);

    if (!showPass) {
      setBtnSource("/hidePasswordIcon.svg");
      setPaswordType("password");
    } else {
      setBtnSource("/showPasswordIcon.svg");
      setPaswordType("text");
    }
  }, [btnSource, isActive, passwordType]);

  return (
    <div className={`primary-input-container`}>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">{label}</div>
      </div>
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-between py-2.5 px-4">
        <input
          id={id}
          className="password-input"
          placeholder={inputAndWordPlaceholder}
          type={`${passwordType}`}
          value={passwordValue ? passwordValue : ""}
          onInput={(e) => handleSetPassword(e.currentTarget.value)}
          onKeyUp={validatePass}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 relative h-6 overflow-hidden shrink-0"
          onClick={onToggleShowPassword}
        >
          <img
            className="absolute h-[72.92%] w-[83.33%] top-[13.75%] right-[8.33%] bottom-[13.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={`${btnSource}`}
          />
        </button>
      </div>
     
    </div>
  );
};

export default PasswordInput;
