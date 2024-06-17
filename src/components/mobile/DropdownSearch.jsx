const DropdownSearch = ({ className = "" }) => {
  return (
    <div className="w-full bg-neutral-700 flex flex-row items-start justify-start py-2 px-4 box-border gap-[8px]">
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidsearch-02.svg"
      />
      <input
        className="[border:none] [outline:none] font-button-2-semibold text-base bg-[transparent] flex-1 relative leading-[24px] text-white text-left"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default DropdownSearch;
