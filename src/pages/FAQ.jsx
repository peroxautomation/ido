import FaqQuestion from "../components/mobile/FaqQuestion";
import FaqAnswer from "../components/mobile/FaqAnswer";
import Title from "../components/mobile/Title";
import { useState } from "react";

/**
 * Frequently asked questions page
 * @returns A JSX element
 */
const FAQ = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [faqQuestion, setFaqQuestions] = useState([
    {
      id: 0,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 1,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 2,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 3,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 4,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 5,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 6,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 7,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      id: 8,
      question: "Various versions have evolved over the years",
      answer:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
  ]);
  const [isQuesionActive, setIsQuestionActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Open FAQ answer
   */
  const onQuestionClick = (id) => {
    const newArray = isQuesionActive.map((element, index) => {
      if (index == id) {
        return !element;
      }
      return element;
    });
    setIsQuestionActive(newArray);
  };

  /**
   * Render FAQ questions
   */
  const renderQuestions = () => {
    return faqQuestion.map((element, index) => (
      <div
        key={index}
        className="self-stretch flex flex-col items-start justify-start"
      >
        <FaqQuestion
          id={element.id}
          question={element.question}
          onClick={onQuestionClick}
          className={isQuesionActive[element.id] ? "[transform:_rotate(90deg)]" : ""}
        />
        {isQuesionActive[element.id] && <FaqAnswer answer={element.answer} />}
      </div>
    ));
  };

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[0.75rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title pageName="FAQ" />
      <div className="relative w-[100%] top-[6.188rem] h-[83vh] overflow-y-auto flex flex-col items-start justify-start">
        {renderQuestions()}
      </div>
    </div>
  );
};

export default FAQ;
