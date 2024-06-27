import React, { useState } from 'react';

const faqData = [
  {
    question: "Various versions have evolved over the years",
    answer: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    
  },
  
  // Add more FAQ items as needed
];

const AccordionItem = ({ item, index, openIndex, handleToggle }) => (
  <div className="self-stretch flex flex-col items-start justify-start">
    <div
      className="w-[335px] bg-neutral-800 box-border flex flex-row items-center justify-between py-3 px-4 border-b-[1px] border-solid border-neutral-700 cursor-pointer"
      onClick={() => handleToggle(index)}
    >
      <div className="relative leading-[16px] font-semibold">
        {item.question}
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={openIndex === index ? "/hugeiconinterfaceoutlineminus.svg" : "/hugeiconinterfaceoutlineplus1.svg"}
      />
    </div>
    {openIndex === index && (
      <div className="w-[335px] bg-neutral-800 box-border flex flex-row items-center justify-start pt-0 px-4 pb-4 text-neutral-300 border-b-[1px] border-solid border-neutral-700">
        <div className="flex-1 relative leading-[16px]">
          {item.answer}
        </div>
      </div>
    )}
  </div>
);

const MFAQAccordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`absolute top-[148px] left-[calc(50%_-_169px)] rounded-2xl w-[338px] h-[480px] overflow-y-auto flex flex-col items-start justify-start text-left text-xs text-neutral-100 font-button-2-regular`}
    >
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          openIndex={openIndex}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default MFAQAccordian;