import Input from "../components/mobile/Input";
import RadioButtonDefault from "../components/mobile/RadioButtonDefault";
import TextArea from "../components/mobile/TextArea";
import Button1Inactive from "../components/mobile/Button1Inactive";
import Radio1 from "../components/mobile/Radio1";
import { useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";

const ChallengeQuestion2 = () => {
  const navigate = useNavigate();
  const radioId = "RadioButtonDefault2";

  // Switch radio button
  const onRadioClick = () => {
    const buttons = document.querySelectorAll(`#${radioId} img`);

    buttons.forEach((element, index) => {
      if(index%2!=0){
        element.classList.add('hidden');
      }});
    
    const selectedRadio = document.querySelector(`#${radioId} input[name=hasPostedBefore]:checked`);
    const children = selectedRadio.parentNode.childNodes;

    children[2].classList.toggle('hidden');
  }

  // Sets the button to active
  const setButtonActive = () => {
    // Set button to active
    const button = document.querySelector('button[name=create-button-1]');
    button.classList.add('!bg-primary-500');
  }

  // Navigate to new challenge questions 3
  const onNextClick = () => {
    navigate('/create/new-challenge/challenge-question-3');
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <Title
        className = ""
        returnPage = ""
        pageName="New challenge"
      />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] h-[69vh] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
        <Input
          inputAlignSelf="stretch"
          inputPosition="unset"
          inputTop="unset"
          inputLeft="unset"
          inputWidth="unset"
          label="What is the title of your dance?"
          hugeIconinterfacesolidinf
          inputPlaceholder="Answer"
          labelAlignSelf="stretch"
          labelWidth="unset"
          inputAlignSelf1="stretch"
          inputWidth1="unset"
          helperTextWidth="20.938rem"
        />
        <div className="stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative leading-[1.75rem] font-semibold w-[20.938rem]">
            Does the title have any meaning?
            <Radio1 
              element={RadioButtonDefault}
              value={true} onRadioClick={onRadioClick} 
              radioName={"hasPostedBefore"} 
              label="Yes" 
              radioId = {radioId}
            />
            <Radio1 
              element={RadioButtonDefault} 
              value={false} 
              onRadioClick={onRadioClick} 
              radioName={"hasPostedBefore"} 
              label="No" 
              radioId = {radioId}
            />
          </div>
        </div>
        <TextArea whatAspectsAreInspiredFro="If yes please explain your answer" />
        <Input
          inputAlignSelf="stretch"
          inputPosition="unset"
          inputTop="unset"
          inputLeft="unset"
          inputWidth="unset"
          label="What inspired the title of your dance?"
          hugeIconinterfacesolidinf
          inputPlaceholder="Answer"
          labelAlignSelf="stretch"
          labelWidth="unset"
          inputAlignSelf1="stretch"
          inputWidth1="unset"
          helperTextWidth="20.938rem"
        />
      </div>
      <Button1Inactive
        cTAPosition="absolute"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.5rem"
        cTALeft="1.25rem"
        cTAAlignSelf="unset"
        cTA="Next"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        onCTAClick={onNextClick}
      />
    </div>
  );
};

export default ChallengeQuestion2;
