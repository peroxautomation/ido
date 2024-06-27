import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="self-stretch flex flex-col items-start justify-start">
    <div className="self-stretch bg-neutral-800 flex flex-row items-center justify-between py-3.5 px-4 border-b-[1px] border-solid border-neutral-700">
      <div className="relative leading-[24px] font-semibold">
        {question}
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer"
        alt=""
        src={isOpen ? "/hugeiconinterfaceoutlineminus.svg" : "/hugeiconinterfaceoutlineplus1.svg"}
        onClick={onClick}
      />
    </div>
    {isOpen && (
      <div className="self-stretch bg-neutral-800 flex flex-row items-center justify-start pt-0 px-4 pb-5 text-sm text-neutral-300 border-b-[1px] border-solid border-neutral-700">
        <div className="flex-1 relative leading-[20px]">
          {answer}
        </div>
      </div>
    )}
  </div>
);

const TFaqAccoridan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Various versions have evolved over the years',
      answer: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    // Add more items as needed
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`absolute top-[216px] left-[calc(50%_-_348px)] rounded-2xl w-[696px] h-[388px] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-neutral-100 font-button-1-regular`}
    >
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default TFaqAccoridan;