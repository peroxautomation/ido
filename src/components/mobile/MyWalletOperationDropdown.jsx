/**
 * My wallet operation dropdown
 * @param onClick On dropdown click function
 * @param value selected operation
 * @param setValue Handler to value operation states
 * @returns 
 */
const MyWalletOperationDropdown = (props) => {
  const { onClick, value } = props;

  return (
    <div
      onClick={onClick}
      className={`my-wallet-search-dropdown`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <div className="flex-1 relative leading-[1.5rem]">{value == null? "All" : value}</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectiondown-01.svg"
      />
    </div>
  );
};

export default MyWalletOperationDropdown;
