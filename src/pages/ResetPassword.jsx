import PasswordInput from "../components/mobile/PasswordInput";
import Button2 from "../components/mobile/Button2";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProcessingIcon from "../components/mobile/ProcessingIcon";

/**
 * Reset password screen for profile settings
 * @returns A JSX element
 */
const ResetPassword = ({ returnPage }) => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [password, setPassword] = useState(""); // password
  const [password2, setPassword2] = useState(""); // confirm password

  /****************************************************************************** */
  /********************************{Global Data}********************************* */
  /****************************************************************************** */
  const navigate = useNavigate();
  const id1 = "password1";
  const id2 = "password2";

  /**
   * Navigate to password reset page
   */
  const onResetClick = () => {
    const password1 = document.getElementById(id1).value;
    const password2 = document.getElementById(id2).value;
    if (password1 !== password2) {
      document
        .getElementById(id2)
        .parentElement.nextElementSibling.classList.remove("hidden");
    } else {
      document
        .getElementById(id2)
        .parentElement.nextElementSibling.classList.add("hidden");
    }
    navigate("/processing", {
      state: { proceedTo: "/reset-password/result" },
    });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-center">
      <Title pageName="Reset password" />
      <div className="relative top-[6.75rem] flex flex-col items-center justify-start gap-[1rem] w-[85vw]">
        <PasswordInput
          id={id1}
          inputAndWordPlaceholder="Enter new password"
          label="New password"
        />
        <PasswordInput
          id={id2}
          inputAndWordPlaceholder="Confirm new password"
          label="Confirm new password"
        />
        <Button2
          onClick={onResetClick}
          cTATop="unset"
          cTALeft="unset"
          cTAWidth="20.938rem"
          cTARight="unset"
          cTABottom="unset"
          cTA="Reset password"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
          cTABackgroundColor="#cc0f3c"
          cTAPosition="unset"
          cTAGap="0.5rem"
          cTAFlex="unset"
          hugeIconeducationsolidpenWidth="1rem"
          hugeIconeducationsolidpenHeight="1rem"
          cTAAlignSelf="unset"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
