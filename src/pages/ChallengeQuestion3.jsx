import TextArea from "../components/mobile/TextArea";
import Dropdown from "../components/mobile/Dropdown";
import RadioButtonDefault from "../components/mobile/RadioButtonDefault";
import Radio1 from "../components/mobile/Radio1";
import { useNavigate } from "react-router-dom";
import Button1Inactive from "../components/mobile/Button1Inactive";
import Title from "../components/mobile/Title";

/**
 * Create challenge question 3 screen
 * @returns 
 */
const ChallengeQuestion3 = () => {
  const navigate = useNavigate();
  const radioId = "RadioButtonDefault3"; // Unique class used to select radios

  /**
   * Navigate to Add info for music
   */
  const onNextClick = () => {
    navigate("/create/new-challenge/challenge-add-info-2");
  };

  /**
   * Switch radio button
   */
  const onRadioClick = () => {
    const buttons = document.querySelectorAll(`div .${radioId} img`);

    buttons.forEach((element, index) => {
      if (index % 2 != 0) {
        element.classList.add("hidden");
      }
    });

    const selectedRadio = document.querySelector(
      `.${radioId} input[name=hasPostedBefore]:checked`
    );
    const children = selectedRadio.parentNode.childNodes;

    children[2].classList.toggle("hidden");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[41.688rem] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] h-[29.125rem] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative leading-[1.75rem] font-semibold w-[20.938rem]">
            Do any of the moves in the dance have meaning?
            <Radio1
              element={RadioButtonDefault}
              value={true}
              onRadioClick={onRadioClick}
              radioName={"hasPostedBefore"}
              label="Yes"
              radioId={radioId}
            />
            <Radio1
              element={RadioButtonDefault}
              value={false}
              onRadioClick={onRadioClick}
              radioName={"hasPostedBefore"}
              label="No"
              radioId={radioId}
            />
          </div>
        </div>
        <TextArea whatAspectsAreInspiredFro="If yes please explain your answer" />
        <TextArea whatAspectsAreInspiredFro="What aspect of this dance did you create?" />
        <Dropdown
          showLabel
          labelAlignSelf="unset"
          labelWidth="20.938rem"
          label="Which cultural heritage inspired this dance?"
          dropdown="Select country"
          dropdownAlignSelf="unset"
          inputAlignSelf="unset"
          inputWidth="20.938rem"
          dropdownPosition="unset"
          dropdownTop="unset"
          dropdownLeft="unset"
        />
      </div>
      <Title className="" returnPage="" pageName="New challenge" />
      <Button1Inactive
        cTATop="unset"
        cTALeft="1.25rem"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.5rem"
        cTA="Next"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        cTABackgroundColor="#efb5c3"
        cTAPosition="absolute"
        cTAGap="0.5rem"
        cTAFlex="unset"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
        onCTAClick={onNextClick}
      />
    </div>
  );
};

export default ChallengeQuestion3;
