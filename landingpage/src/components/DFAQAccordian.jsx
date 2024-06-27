import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="w-[628px] flex flex-col items-start justify-start">
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

const DFAQAccordian = () => {
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
    {
      question: 'Question',
      answer: 'Answer',
    },
    // Add more items as needed
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`absolute top-[256px] left-[calc(50%_-_314px)] rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left text-base text-neutral-100 font-body-semibold`}
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

export default DFAQAccordian;