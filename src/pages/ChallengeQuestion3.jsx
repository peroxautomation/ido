import TextArea from "../components/mobile/TextArea";
import Dropdown from "../components/mobile/Dropdown";
import Radio1 from "../components/mobile/Radio1";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import { useState } from "react";
import CountryDropdown from "../components/mobile/CountryDropdown";

/**
 * Create challenge question 3 screen
 * @returns
 */
const ChallengeQuestion3 = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [movesHaveMeaning, setMovesHaveMeaning] = useState(null);
  const [movesMeaning, setMovesMeaning] = useState("");
  const [aspectCreated, setAspectCreated] = useState("");

  /**
   * Navigate to Add info for music
   */
  const onNextClick = () => {
    navigate("/create/new-challenge/challenge-add-info-2");
  };

  const isActive = () => {
    if (
      selectedCountry !== null &&
      movesHaveMeaning !== null &&
      aspectCreated !== null
    ) {
      if (movesHaveMeaning === "true" && movesMeaning === "") {
        return false;
      } else return true;
    }
    return false;
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[41.688rem] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <Title className="" pageName="New challenge" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] h-[29.125rem] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative leading-[1.75rem] font-semibold w-[20.938rem]">
            Do any of the moves in the dance have meaning?
            <Radio1
              radioName={"movesHaveMeaning"}
              label="Yes"
              value={true}
              handleSetValue={setMovesHaveMeaning}
              selectedValue={movesHaveMeaning}
            />
            <Radio1
              radioName={"movesHaveMeaning"}
              label="No"
              value={false}
              handleSetValue={setMovesHaveMeaning}
              selectedValue={movesHaveMeaning}
            />
          </div>
        </div>
        <TextArea
          label="If yes please explain your answer"
          value={movesMeaning}
          setValue={setMovesMeaning}
        />
        <TextArea
          label="What aspect of this dance did you create?"
          value={aspectCreated}
          setValue={setAspectCreated}
        />
        Which cultural heritage inspired this dance?
        <Dropdown
          selected={selectedCountry}
          name="Select Country"
          DropdownOptions={
            <CountryDropdown
              selectHandler={setSelectedCountry}
              className="top-[-51vh]"
            ></CountryDropdown>
          }
        />
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          cTA="Next"
          onCTAClick={onNextClick}
          isActive={isActive()}
        />
      </div>
    </div>
  );
};

export default ChallengeQuestion3;
