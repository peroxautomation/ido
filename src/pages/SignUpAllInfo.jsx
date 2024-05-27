import { useCallback } from "react";
import Title from "../components/mobile/Title";
import TextInput1 from "../components/mobile/TextInput1";
import Dropdown from "../components/mobile/Dropdown";
import PasswordInput from "../components/mobile/PasswordInput";
import GenderDropdown1 from "../components/mobile/GenderDropdown1"
import Button1Inactive from "../components/mobile/Button1Inactive";
import { useNavigate } from "react-router-dom";

/**
 * Sign up all info page
 * @returns JSX element
 */
const SignUpAllInfo = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    // Please sync "OTP" to the project
    console.log("Creating account...")
    navigate('/subscription-free')
  }, []);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="20px"
        titleLeft="20px"
        returnPage="/sign-up/questions"
        pageName="Sign up"
        titleWidth="calc(100% - 40px)"
        direactionLeft="/direaction-left.svg"
      />
      <main className="relative w-[calc(100%_-_40px)] h-[70%] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px] text-center text-base text-neutral-100 font-button-1-regular">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <TextInput1
              label="Username"
              TextInput1Placeholder="Enter username"
            />
            <Dropdown showLabel label="Gender" dropdown="Select your gender" />
            <PasswordInput
              inputAndWordPlaceholder="Create password"
              label="Password"
            />
            <PasswordInput
              inputAndWordPlaceholder="Confirm your password"
              label="Confirm password"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[8px]">
            <input
              className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
              required={true}
              type="checkbox"
            />
            <div className="relative leading-[24px] font-semibold">
              I agree to the terms and conditions
            </div>
          <Button1Inactive
            label="Create Account"
            onClick={onCTAClick}
           >
           </Button1Inactive>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpAllInfo;
