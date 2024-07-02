import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Radio1 from "../components/mobile/Radio1";
import Title from "../components/mobile/Title";
import { useState } from "react";

const ChallengeQuestion = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [hasPostedBefore, setHasPosted] = useState(null);
  const navigate = useNavigate();

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to the appropriate page
   */
  const onContinueClick = () => {
    const buttons = document.querySelectorAll("input[name=hasPostedBefore]");

    buttons.forEach((element) => {
      if (element.checked)
        if (element.value === "true")
          navigate("/create/new-challenge/sorry-page");
        else navigate("/create/new-challenge/challenge-question-2");
    });
  };

  /**
   * Toggle is active button
   */
  const isButtonActive = () => {
    if (hasPostedBefore != null) return true;
    return false;
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title className="" pageName="New challenge" />
      <div className="relative w-[90%] top-[7rem] flex flex-col  text-center text-[1.25rem] justify-self-center gap-5">
        <div className="relative leading-[1.75rem] font-semibold">
          Have you posted this video anywhere else?
          <Radio1
            radioName={"hasPostedBefore"}
            label="Yes"
            value={true}
            handleSetValue={setHasPosted}
            selectedValue={hasPostedBefore}
          />
          <Radio1
            radioName={"hasPostedBefore"}
            label="No"
            value={false}
            handleSetValue={setHasPosted}
            selectedValue={hasPostedBefore}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          onCTAClick={onContinueClick}
          isActive={isButtonActive()}
          cTA="Continue"
        />
      </div>
    </div>
  );
};

export default ChallengeQuestion;
