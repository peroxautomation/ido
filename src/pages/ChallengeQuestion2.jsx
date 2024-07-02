import Input from "../components/mobile/Input";
import TextArea from "../components/mobile/TextArea";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Radio1 from "../components/mobile/Radio1";
import { useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";
import { useState } from "react";

const ChallengeQuestion2 = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [danceHasMeaning, setDanceHasMeaningg] = useState(null);
  const [danceTitle, setDanceTitle] = useState("");
  const [danceInspiration, setDanceInspiration] = useState("");
  const [titleMeaning, setTitleMeaing] = useState("");

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Sets the button to active
   * @returns
   */
  const isButtonActive = () => {
    if (
      danceHasMeaning !== null &&
      danceTitle !== "" &&
      danceInspiration !== ""
    ) {
      console.log(danceHasMeaning);
      if (danceHasMeaning == "true" && titleMeaning == "") return false;
      else return true;
    } else return false;
  };

  /**
   * Navigate to new challenge questions 3
   */
  const onNextClick = () => {
    navigate("/create/new-challenge/challenge-question-3");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <Title className="" pageName="New challenge" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] h-[69vh] overflow-y-auto no-scrollbar flex flex-col items-start justify-start gap-[1rem]">
        <Input
          label="What is the title of your dance?"
          inputPlaceholder="Answer"
          value={danceTitle}
          handleSetValue={setDanceTitle}
        />
        <div className="stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative leading-[1.75rem] font-semibold w-[20.938rem]">
            Does the title have any meaning?
            <Radio1
              radioName={"danceHasMeaning"}
              label="Yes"
              value={true}
              handleSetValue={setDanceHasMeaningg}
              selectedValue={danceHasMeaning}
            />
            <Radio1
              radioName={"danceHasMeaning"}
              label="No"
              value={false}
              handleSetValue={setDanceHasMeaningg}
              selectedValue={danceHasMeaning}
            />
          </div>
        </div>
        <TextArea
          label="If yes please explain your answer"
          value={titleMeaning}
          setValue={setTitleMeaing}
          requiredMessage={"Please explain the meaning for your dance title"}
        />
        <Input
          label="What inspired the title of your dance?"
          inputPlaceholder="Answer"
          value={danceInspiration}
          handleSetValue={setDanceInspiration}
        />
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          cTA="Next"
          onCTAClick={onNextClick}
          isActive={isButtonActive()}
        />
      </div>
    </div>
  );
};

export default ChallengeQuestion2;
