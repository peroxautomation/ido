/**
 * Dropdown item for dropdown lists
 * @param value The value of the dropdown
 * @param isAudio Boolean check if it is an audio dropdown
 * @param isRecent Boolean check if it is a recents dropdown
 * @param valueHandler Handler to set value
 */
const DropdownItem2 = (props) => {
  const { value, isAudio, isRecent, valueHandler } = props;
  return (
    <div
      className={`dropdown-2-item `}
      onClick={() => valueHandler(value)}
    >
      {isAudio && (
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        />
      )}
      {isRecent && (
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/recentIcon.png"
        />
      )}
      <div className="flex-1 relative leading-[1.5rem]">{value}</div>
    </div>
  );
};

export default DropdownItem2;
