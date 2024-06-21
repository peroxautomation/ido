import PasswordInput from "../components/mobile/PasswordInput";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PrimaryButton from "../components/mobile/PrimaryButton";
import IncorrectPasswordMsg from "../components/mobile/IncorrectPasswordMsg";

/**
 * Reset password screen for profile settings
 * @returns A JSX element
 */
const ResetPassword = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [password, setPassword] = useState(""); // password
  const [password2, setPassword2] = useState(""); // confirm password

  /*********************************************************************************** */
  /********************************{Global vairables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();
  const id1 = "password1";
  const id2 = "password2";

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */

  /**
   * Toggle button active
   * @returns True if all conditions are met, else false.
   */
  const isActive = () => {
    if (
      password.length != 0 &&
      password2.length != 0 &&
      password === password2
    ) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Password validator function
   */
  const validatePasswords = () => {
    if (password.length != 0 && password2.length != 0) {
      if (password === password2)
        document.getElementById("incoorectPassword").classList.add("hidden");
      else
        document.getElementById("incoorectPassword").classList.remove("hidden");
    } else {
      document.getElementById("incoorectPassword").classList.add("hidden");
    }
  };

  /**
   * Navigate to the next page
   */
  const onResetClick = () => {
    navigate("/processing", { state: { proceedTo: "/reset-password/result" } });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-center">
      <Title pageName="Reset password" />
      <div className="relative top-[6.75rem] flex flex-col items-center justify-start gap-[1rem] w-[85vw]">
        <PasswordInput
          id={id1}
          inputAndWordPlaceholder="Enter new password"
          label="New password"
          passwordValue={password}
          handleSetPassword={setPassword}
          validatePass={null}
        />
        <PasswordInput
          id={id2}
          inputAndWordPlaceholder="Confirm new password"
          label="Confirm new password"
          passwordValue={password2}
          handleSetPassword={setPassword2}
          validatePass={validatePasswords}
        />
        <IncorrectPasswordMsg />
        <PrimaryButton
          cTA="Reset password"
          onCTAClick={onResetClick}
          className="relative w-full top-[3em]"
          isActive={isActive()}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
