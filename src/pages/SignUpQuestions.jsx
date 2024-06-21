import CheckboxContainer1 from "../components/mobile/CheckboxContainer1";
import TextInput1 from "../components/mobile/TextInput1";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import PrimaryButton from "../components/mobile/PrimaryButton";

const danceReasonArray = [
  "I enjoy it",
  "Entertaining friends and family",
  "It relieves stress",
  "I had nothing to do during the pandemic, so I started dancing",
  "I was completing an assignment for school",
  "I entered a competition",
  "I wanted to earn a living",
  "Other",
];

const danceInfluenceArray = [
  "I have always loved dancing",
  "My family",
  "My friends",
  "A school project",
  "A dancing show on television",
  "Social media",
  "Other",
];

/**
 * Sign up all questions Page
 * @returns JSX element
 */
const SignUpQuestions = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [startYear, setStartYear] = useState("");
  const [danceReason, setDanceReason] = useState([]);
  const [influencedYou, setInfluencedYou] = useState([]);

  /*********************************************************************************** */
  /********************************{Global Variables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();

  /************************************************************************** */
  /********************************{Methods}********************************* */
  /************************************************************************** */

  /**
   * On Next click. Navigate to the next page
   */
  const onNextClick = useCallback(() => {
    navigate("/sign-up/info");
  }, [navigate]);

  /**
   * Handler to set reasons for dancing
   * @param {*} isAdd flag if the opperation is add or remove
   * @param {*} reason Seleced/unselected reason
   */
  const handleSetDanceReasons = (isAdd, reason) => {
    if (isAdd) {
      setDanceReason([...danceReason, reason]);
    } else {
      setDanceReason(danceReason.filter((r) => r !== reason));
    }
  };

  /**
   * Handler to set influences for dancing
   * @param {*} isAdd flag if the opperation is add or remove
   * @param {*} influence Seleced/unselected influence
   */
  const handleSetInfluencedYou = (isAdd, influence) => {
    if (isAdd) {
      setInfluencedYou([...influencedYou, influence]);
    } else {
      setInfluencedYou(influencedYou.filter((i) => i !== influence));
    }
  };

  /**
   * Handle toggle button inactive
   * @returns true if all fileds are filed. Else returns false.
   */
  const isActive = () => {
    if (
      startYear !== "" &&
      danceReason.length != 0 &&
      influencedYou.length != 0
    )
      return true;
    else return false;
  };

  /**
   * Dynamicaly render checkbox components
   * @returns An array of CheckboxContainer1
   */
  const renderDanceReasons = () => {
    return danceReasonArray.map((element, index) => (
      <CheckboxContainer1
        option1={element}
        key={index}
        handleCheck={handleSetDanceReasons}
      />
    ));
  };

  /**
   * Dynamicaly render checkbox components
   * @returns An array of CheckboxContainer1
   */
  const renderDanceInfluences = () => {
    return danceInfluenceArray.map((element, index) => (
      <CheckboxContainer1
        option1={element}
        key={index}
        handleCheck={handleSetInfluencedYou}
      />
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <Title pageName="Sign up" />
      <main className="flex flex-col relative items-start top-[12vh] w-[85vw] h-[75vh] overflow-y-scroll overflow-x-clip">
        <section className="relative flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100  font-semibold">
          <TextInput1
            label="When did you start dancing?"
            TextInput1Placeholder="Insert year"
            inputValue={startYear}
            setInputValue={setStartYear}
          />
          <div className="self-stretch relative leading-[24px] font-semibold">
            Why did you start dancing?
          </div>
          {renderDanceReasons()}
        </section>
        <section className="mt-[2.5em] relative flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-button-1-regular">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Who/what influenced you?
          </div>
          {renderDanceInfluences()}
        </section>
      </main>
      <div className="absolute w-[90%] bottom-5">
        <PrimaryButton
          onCTAClick={onNextClick}
          cTA="Next"
          isActive={isActive()}
        />
      </div>
    </div>
  );
};

export default SignUpQuestions;
