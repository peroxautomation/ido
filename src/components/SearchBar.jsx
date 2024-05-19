const SearchBar = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <input
        className="[border:none] [outline:none] font-semibold font-body-regular text-base bg-white-8 w-[564px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl flex flex-row items-center justify-start py-2.5 px-4 box-border text-neutral-100"
        placeholder="Search"
        type="text"
      />
      <button className="cursor-pointer [border:none] py-2.5 px-4 bg-white-16 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none flex flex-row items-start justify-start">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidsearch-02.svg"
        />
      </button>
    </div>
  );
};

export default SearchBar;
