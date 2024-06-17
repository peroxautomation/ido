import { useCallback, useState } from "react";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import Button1 from "../components/mobile/Button1";
import { useNavigate } from "react-router-dom";

/**
 * Forgot Password Page
 * @returns JSX element
 */
const ForgotPassword = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [email, setEmail] = useState("");

  /**************************************************************************************** */
  /********************************{Component Variables}********************************** */
  /*************************************************************************************** */
  const navigate = useNavigate();
  const id = "userEmail";

  /**************************************************************************************** */
  /********************************{Component Functions}********************************** */
  /*************************************************************************************** */

  /**
   * On Send code click
   */
  const onSendCodeClick = () => {
    if (email !== "") {
      // TODO: Add formik validation here
      navigate("/otp");
    }
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="29px"
        titleLeft="11px"
        hugeIconarrowssolHref="/login"
        pageName="Forgot password"
        titleWidth="calc(100% - 40px)"
        returnPage="/login"
      />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
        <EmailInput
          label="Email"
          inputPlaceholder="Enter your email"
          id={id}
          emailValue={email}
          handleSetEmail={setEmail}
        />
        <Button1
          onCTAClick={onSendCodeClick}
          cTA="Send code"
          className="relative top-1 left-[0em] right-[0em] w-full"
        />
      </main>
    </div>
  );
};

export default ForgotPassword;
