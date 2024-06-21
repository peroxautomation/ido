import { useState } from "react";
import Title from "../components/mobile/Title";
import TextInput1 from "../components/mobile/TextInput1";
import Dropdown from "../components/mobile/Dropdown";
import PasswordInput from "../components/mobile/PasswordInput";
import { useNavigate } from "react-router-dom";
import DropdownItem1 from "../components/mobile/DropdownItem1";
import PrimaryButton from "../components/mobile/PrimaryButton";
import CheckboxContainer1 from "../components/mobile/CheckboxContainer1";
import IncorrectPasswordMsg from "../components/mobile/IncorrectPasswordMsg";

/**
 * Sign up all info page
 * @returns JSX element
 */
const SignUpAllInfo = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState(null);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [termsAndCondition, setTermsAndCondition] = useState(false);

  /*********************************************************************************** */
  /********************************{Global Variables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();

  /**************************************************************************** */
  /********************************{ Methods }********************************* */
  /**************************************************************************** */

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
   * Create user account
   */
  const onCreateClick = () => {
    // Please sync "OTP" to the project
    console.log("Creating account...");
    navigate("/select-subscription");
  };

  /**
   * Handle setting gender
   * @param {*} gender
   */
  const onGenderClick = (gender) => {
    setGender(gender);
  };

  /**
   * Set terms and condition
   * @param {*} isChecked
   */
  const onTermsAndConditionCheck = (isChecked) => {
    setTermsAndCondition(isChecked);
  };

  /**
   * Toggle button active
   * @returns True if all conditions are met, else false.
   */
  const isActive = () => {
    if (
      username != "" &&
      gender !== null &&
      password.length != 0 &&
      password2.length != 0 &&
      password === password2 &&
      termsAndCondition
    ) {
      return true;
    } else {
      return false;
    }
  };

  /****************************************************************************************** */
  /********************************{ Local components }************************************** */
  /****************************************************************************************** */
  const GenderDropdownList = () => {
    return (
      <div
        className={`absolute top-[48px] hidden rounded-2xl h-max overflow-y-auto flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold z-10 w-full`}
      >
        <DropdownItem1 placeholder="Male" onSelectItem={onGenderClick} />
        <DropdownItem1 placeholder="Female" onSelectItem={onGenderClick} />
        <DropdownItem1
          placeholder="I don't want to say"
          onSelectItem={onGenderClick}
        />
      </div>
    );
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="Sign up" />
      <main className="relative w-[calc(100%_-_40px)] h-[77%] top-[108px] right-[20px] left-[20px] gap-[16px] text-center text-base text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] h-[35vh]">
            <TextInput1
              label="Username"
              TextInput1Placeholder="Enter username"
              setInputValue={setUsername}
              inputValue={username}
            />
            <Dropdown
              name="Select your gender"
              selected={gender}
              DropdownOptions={GenderDropdownList}
            />
            <PasswordInput
              inputAndWordPlaceholder="Create password"
              label="Password"
              passwordValue={password}
              handleSetPassword={setPassword}
              className={"font-button-2-semibol"}
              validatePass={validatePasswords}
            />
            <PasswordInput
              inputAndWordPlaceholder="Confirm your password"
              label="Confirm password"
              passwordValue={password2}
              handleSetPassword={setPassword2}
              validatePass={validatePasswords}
            />
            <IncorrectPasswordMsg />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[8px]">
            <CheckboxContainer1
              option1=" I agree to the terms and conditions"
              className="relative leading-[24px] !bg-transparent !w-full"
              handleCheck={onTermsAndConditionCheck}
            />
          </div>
          <PrimaryButton
            cTA="Create Account"
            onCTAClick={onCreateClick}
            isActive={isActive()}
          />
        </div>
      </main>
    </div>
  );
};

export default SignUpAllInfo;
