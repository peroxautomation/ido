/**
 * 
 * @param {*} onClick 
 * @returns 
 */
const FaqQuestion = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`w-[20.938rem] bg-neutral-800 flex flex-row items-center justify-between py-[0.75rem] px-[1rem] box-border text-left text-[0.75rem] text-neutral-100 font-button-1-regular`}
    >
      <div className="relative leading-[1rem] font-semibold">
        Various versions have evolved over the years
      </div>
      <div className="w-[1.5rem] relative h-[1rem] overflow-hidden shrink-0 text-[#ecf0f1]">
        <span  className="duration-200 absolute bg-white rounded-sm border border-solid h-[85%] w-0 left-[45%]"></span>
        <span  className="absolute bg-white rounded-sm border border-solid h-[85%] w-0 left-[45%] bottom-[15%] right-[25%] [transform:_rotate(90deg)]"></span>
      </div>
    </div>
  );
};

export default FaqQuestion;
