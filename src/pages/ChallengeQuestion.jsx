import { useNavigate, useParams } from "react-router-dom";
import Button1Inactive from "../components/mobile/Button1Inactive";
import Radio1 from "../components/mobile/Radio1";
import Title from "../components/mobile/Title";
import RadioButtonDefault from "../components/mobile/RadioButtonDefault";
import { useState } from "react";

const ChallengeQuestion = () => {
  const [hasPostedBefore, setHasPosted] = useState(false);
  const navigate = useNavigate();
  const radioId = "RadioButtonDefault";

  // Switch radio button
  const onRadioClick = (event) => {
    const buttons = document.querySelectorAll(`#${radioId} img`);

    buttons.forEach((element, index) => {
      if(index%2!=0){
        element.classList.add('hidden');
      }});
    
    const selectedRadio = document.querySelector(`#${radioId} input[name=hasPostedBefore]:checked`);
    const children = selectedRadio.parentNode.childNodes;

    children[2].classList.toggle('hidden');
    setHasPosted(selectedRadio.value);    // Set state hasPostedBefore

    // Set button to active
    const button = document.querySelector('button[name=create-button-1]');
    button.classList.add('!bg-primary-500')
  }

  // Navigate to the appropriate page
  const onContinueClick = () => {
    const buttons = document.querySelectorAll('#RadioButtonDefault input[name=hasPostedBefore]');
    buttons.forEach(element => {
      if(element.checked)
        if(element.value === 'true')
          navigate('/create/new-challenge/sorry-page');
        else
          navigate('/create/new-challenge/challenge-question-2')
    });
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title
        className = ""
        returnPage = ""
        pageName="New challenge"
      />
      <div className="relative w-[90%] top-[7rem] flex flex-col  text-center text-[1.25rem] justify-self-center gap-5">
        <div className="relative leading-[1.75rem] font-semibold">
          Have you posted this video anywhere else?
          <Radio1 element={RadioButtonDefault} value={true} onRadioClick={onRadioClick} radioName={"hasPostedBefore"} label="Yes" radioId={radioId} />
          <Radio1 element={RadioButtonDefault} value={false} onRadioClick={onRadioClick} radioName={"hasPostedBefore"} label="No" radioId={radioId} />
        </div>
      </div>
      <Button1Inactive
        onCTAClick={onContinueClick}
        cTAPosition="absolute"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.5rem"
        cTALeft="1.25rem"
        cTAAlignSelf="unset"
        cTA="Continue"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
      />
    </div>
  );
};

export default ChallengeQuestion;
