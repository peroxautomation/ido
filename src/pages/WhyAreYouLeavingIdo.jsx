import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import CheckboxContainer1 from "../components/mobile/CheckboxContainer1";
import Input from "../components/mobile/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WhyAreYouLeavingIdo = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [leaveReason, setLeaveReasons] = useState([]);
  const [otherReason, setOtherReason] = useState(null);
  const leaveReasons = [
    "Lost interest",
    "Didn't meet my expectations",
    "Found a better alternative",
    "Encountered too many bugs or issues",
    "App is too difficult to use",
    "Not useful for my needs",
  ];

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Handler to set reasons for dancing
   * @param {*} isAdd flag if the opperation is add or remove
   * @param {*} reason Seleced/unselected reason
   */
  const handleSetReasons = (isAdd, reason) => {
    console.log(isAdd);
    if (isAdd) {
      setLeaveReasons([...leaveReason, reason]);
    } else {
      setLeaveReasons(leaveReason.filter((r) => r !== reason));
    }
  };

  /**
   * Dynamicaly render checkbox components
   * @returns An array of CheckboxContainer1
   */
  const renderLeaveReasons = () => {
    return leaveReasons.map((element, index) => (
      <CheckboxContainer1
        option1={element}
        key={index}
        handleCheck={handleSetReasons}
      />
    ));
  };

  /**
   * On next click
   */
  const onNextClick = () => {
    navigate("/profile/settings/delete-account/processing", {
      state: { proceedTo: "/profile/settings/delete-account-agreement" },
    });
  };

  console.log(leaveReason);
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-200 font-h3-semibold grid grid-flow-row justify-items-center">
      <Title pageName="Why are you leaving Ido?" />
      <div className="relative top-[5vh] w-[20.938rem] flex flex-col items-center justify-center">
        <div className="w-[20.938rem] flex flex-row items-center justify-center p-[0.5rem] box-border">
          <div className="flex-1 relative leading-[1.75rem]" />
        </div>
        <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-300 text-left">
          We&apos;re sorry to see you go! We&apos;d love to know why you want to
          delete your account, so we can improve the app and support our
          community.
        </div>
      </div>
      <div className="relative rounded-3xl p-[1.5rem] box-border gap-[0.5rem] grid grid-flow-row justify-center h-[calc(100vh_-_19rem)] overflow-y-auto">
        {renderLeaveReasons()}
        <Input
          inputPlaceholder="Other (please specify)"
          className="w-full"
          value={otherReason}
          handleSetValue={setLeaveReasons}
        />
      </div>
      <div className="bottom-0 absolute w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton onCTAClick={onNextClick} cTA="Next" isActive={true} />
      </div>
    </div>
  );
};

export default WhyAreYouLeavingIdo;
