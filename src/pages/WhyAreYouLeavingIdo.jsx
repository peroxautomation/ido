import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import CheckboxContainer1 from "../components/mobile/CheckboxContainer1";
import Input from "../components/mobile/Input";
import { useNavigate } from "react-router-dom";

const WhyAreYouLeavingIdo = () => {
  const navigate = useNavigate();

  /**
   * On next click
   */
  const onNextClick = () => {
    navigate("/profile/settings/delete-account/processing", {
      state: { proceedTo: "/profile/settings/delete-account-agreement" },
    });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[41.688rem] overflow-hidden text-center text-[1.25rem] text-neutral-200 font-h3-semibold grid grid-flow-row justify-items-center">
      <Title pageName="Why are you leaving Ido?" />
      <div className="relative top-[calc(100vh_-_38rem)] w-[20.938rem] flex flex-col items-center justify-center">
        <div className="w-[20.938rem] flex flex-row items-center justify-center p-[0.5rem] box-border">
          <div className="flex-1 relative leading-[1.75rem]" />
        </div>
        <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-300 text-left">
          We&apos;re sorry to see you go! We&apos;d love to know why you want to
          delete your account, so we can improve the app and support our
          community.
        </div>
      </div>
      <div className="relative top-[calc(100vh_-_41rem)] rounded-3xl p-[1.5rem] box-border gap-[0.5rem] grid grid-flow-row justify-center h-[calc(100vh_-_19rem)] overflow-y-auto">
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="Lost interest"
        />
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="Didn't meet my expectations"
        />
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="Found a better alternative"
        />
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="Encountered too many bugs or issues"
        />
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="App is too difficult to use"
        />
        <CheckboxContainer1
          hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckrectangle1.svg"
          option1="Not useful for my needs"
        />
        <Input inputPlaceholder="Other (please specify)" className="w-full" />
      </div>
      <div className="bottom-0 absolute w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton onCTAClick={onNextClick} cTA="Next" isActive={true} />
      </div>
    </div>
  );
};

export default WhyAreYouLeavingIdo;
