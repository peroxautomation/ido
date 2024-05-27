import CheckboxContainer1 from "../components/mobile/Checkbox1";
import TextInput1 from "../components/mobile/TextInput1";
import Checkbox1 from "../components/mobile/Checkbox11";
import Button1Inactive from "../components/mobile/Button1Inactive";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


/**
 * Sign up all questions Page
 * @returns JSX element
 */
const AllQuestionsForSignUpIn = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/sign-up/info");
  }, [navigate]);

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
          />
          <div className="self-stretch relative leading-[24px] font-semibold">
            Why did you start dancing?
          </div>
          <CheckboxContainer1 option1="I enjoy it" />
          <CheckboxContainer1
            option1="Entertaining friends and family"
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="It relieves stress"
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="I had nothing to do during the pandemic, so I started dancing"
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="I was completing an assignment for school"
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="I entered a competition"
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="I wanted to earn a living "
            checkboxWidth="335px"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="Other"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
        </section>
        <section className="mt-[2.5em] relative flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-button-1-regular">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Who/what influenced you?
          </div>
          <CheckboxContainer1
            option1="I have always loved dancing"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="My family"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="My friends"
            checkboxWidth="unset"
            checkboxAlignSelf="stretch"
          />
          <CheckboxContainer1
            option1="A school project"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="A dancing show on television"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="Social media"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
          <CheckboxContainer1
            option1="Other"
            checkboxWidth="unset"
            checkboxAlignSelf="unset"
          />
        </section>
      </main>
      <Button1Inactive
        onClick={onCTAClick}
        label="Next"
      />
    </div>
  );
};

export default AllQuestionsForSignUpIn;
