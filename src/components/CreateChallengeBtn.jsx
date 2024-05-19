const CreateChallengeBtn = () => {
  return (
    <button className="cursor-pointer [border:none] py-2.5 px-2 bg-white-8 w-[252px] rounded-xl flex flex-row items-center justify-center box-border gap-[8px]">
      <div className="relative text-base leading-[24px] font-semibold font-body-regular text-neutral-100 text-center">
        Create challenge
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineplus.svg"
      />
    </button>
  );
};

export default CreateChallengeBtn;
