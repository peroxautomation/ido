import { useCallback, useEffect, useState } from "react";

/**
 * Component for password inputs
 * @param {*} param0
 * @returns A JSX element
 */
const PasswordInput = ({
  inputAndWordPlaceholder,
  label,
  className = "",
  id,
}) => {
  const [isActive, setIsActive] = useState(false); // Hide password flag
  const [btnSource, setBtnSource] = useState("hidePasswordIcon.svg"); // Hide password button source
  const [passwordType, setPaswordType] = useState("password"); // Toggle hide password
  /**
   * Toggle show/hide password
   */
  const onToggleShowPassword = useCallback(() => {
    const showPass = !isActive;
    setIsActive(!isActive);
    
    if (!showPass) {
      setBtnSource("hidePasswordIcon.svg");
      setPaswordType("password");
    } else {
      setBtnSource("showPasswordIcon.svg");
      setPaswordType("text");
    }
  }, [btnSource, isActive, passwordType]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base text-white font-button-1-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">{label}</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-between py-2.5 px-4">
        <input
          id={id}
          className="[border:none] [outline:none] font-button-1-semibold text-base bg-[transparent] flex-1 flex flex-row items-center justify-start text-white"
          placeholder={inputAndWordPlaceholder}
          type={`${passwordType}`}
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
      <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-darkslategray">
        <div className="flex-1 relative leading-[20px]">Helper text</div>
      </div>
    </div>
  );
};

export default PasswordInput;
