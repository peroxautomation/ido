/**
 * Select music search input
 * @param {*} props
 * @returns
 */
const SearchInput = (props) => {
  const { value, handleValue } = props;
  return (
    <div
      className={`select-music-search`}
    >
      <div className="w-[90vw] rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.5rem]">
        <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
          <img
            className="absolute h-[89.58%] w-[89.58%] top-[5.42%] right-[5%] bottom-[5%] left-[5.42%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/union3.svg"
          />
        </div>
        <input
          value={value}
          onInput={(e) => handleValue(e.currentTarget.value)}
          className="select-music-search-input"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchInput;
