import CheckboxContainer1 from "../components/mobile/CheckboxContainer1";
import TextInput1 from "../components/mobile/TextInput1";
import Button1Inactive from "../components/mobile/Button1Inactive";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Button1 from "../components/mobile/Button1";

/**
 * Sign up all questions Page
 * @returns JSX element
 */
const AllQuestionsForSignUpIn = () => {
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
  const ifButtonActive = () => {
    console.log(influencedYou);
    console.log(danceReason);
    console.log(startYear);

    if (
      startYear !== "" &&
      danceReason.length != 0 &&
      influencedYou.length != 0
    )
      return true;
    else return false;
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="20px"
        returnPage="/sign-up/country"
        pageName="Sign up"
      />
      <main className="flex flex-col relative items-start top-[12vh] left-[calc(50%_-_167.5px)] w-[85vw] h-[70vh] overflow-y-scroll overflow-x-clip">
        <section className="relative flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100  font-semibold">
          <TextInput1
            label="When did you start dancing?"
            TextInput1Placeholder="Insert year"
            className="!w-[85vw]"
            inputValue={startYear}
            setInputValue={setStartYear}
          />
          <div className="self-stretch relative leading-[24px] font-semibold">
            Why did you start dancing?
          </div>
          <CheckboxContainer1
            option1="I enjoy it"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="Entertaining friends and family"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="It relieves stress"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="I had nothing to do during the pandemic, so I started dancing"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="I was completing an assignment for school"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="I entered a competition"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="I wanted to earn a living"
            handleCheck={handleSetDanceReasons}
          />
          <CheckboxContainer1
            option1="Other"
            handleCheck={handleSetDanceReasons}
          />
        </section>
        <section className="mt-[2.5em] relative flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-button-1-regular">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Who/what influenced you?
          </div>
          <CheckboxContainer1
            option1="I have always loved dancing"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="My family"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="My friends"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="A school project"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="A dancing show on television"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="Social media"
            handleCheck={handleSetInfluencedYou}
          />
          <CheckboxContainer1
            option1="Other"
            handleCheck={handleSetInfluencedYou}
          />
        </section>
      </main>
      {ifButtonActive() ? (
        <Button1
          onCTAClick={onNextClick}
          cTA="Next"
          className="absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem]"
        />
      ) : (
        <Button1Inactive cTA="Next" />
      )}
    </div>
  );
};

export default AllQuestionsForSignUpIn;
