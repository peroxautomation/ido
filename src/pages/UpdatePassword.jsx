import PasswordInput from "../components/mobile/PasswordInput";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import Input from "../components/mobile/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IncorrectPasswordMsg from "../components/mobile/IncorrectPasswordMsg";

/**
 * Update password screen for profile settings
 * @returns
 */
const UpdatePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  /**
   * Navigate to update password screen
   */
  const onUpdatePasswordClick = () => {
    navigate("/profile/settings/forgot-password");
  };

  /**
   * Set button to active
   * @returns True or false
   */
  const isButtonActive = () => {
    if (
      currentPassword !== "" &&
      currentPassword !== null &&
      newPassword !== ""
    ) {
      if (newPassword == newPassword2) {
        return true;
      }
      return false;
    }
    return false;
  };

  /**
   * Password validator function
   */
  const validatePasswords = () => {
    if (newPassword.length != 0 && newPassword2.length != 0) {
      if (newPassword === newPassword2) setPasswordIncorrect(false);
      else setPasswordIncorrect(true);
    } else {
      setPasswordIncorrect(false);
    }
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-h3-semibold grid grid-flow-row justify-center">
      <Title pageName="Update password" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <Input
              label="Current password"
              inputPlaceholder="Enter current password"
              className="h-[4rem]"
              value={currentPassword}
              handleSetValue={setCurrentPassword}
            />
            <PasswordInput
              inputAndWordPlaceholder="Create new password"
              label="New password"
              handleSetPassword={setNewPassword}
              passwordValue={newPassword}
              validatePass={null}
            />
            <PasswordInput
              inputAndWordPlaceholder="Confirm new password"
              label="Confirm password"
              handleSetPassword={setNewPassword2}
              passwordValue={newPassword2}
              validatePass={validatePasswords}
            />
            {passwordIncorrect && <IncorrectPasswordMsg />}
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0.5rem] px-[0rem] gap-[9.062rem]">
            <div className="w-[16.625rem] relative leading-[1.5rem] font-semibold hidden">
              Trending now
            </div>
            <div className="relative leading-[1.5rem] font-semibold text-right">
              Forgot password
            </div>
          </div>
        </div>
        <PrimaryButton
          onCTAClick={onUpdatePasswordClick}
          cTA="Update password"
          isActive={isButtonActive()}
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
