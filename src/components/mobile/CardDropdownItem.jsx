/**
 * Dropdown item for Card dropdown list
 * @param imageSrc card image src (visa or mastercard)
 * @param value card number
 *  */
const CardDropdownItem = (props) => {
  const { imageSrc, value } = props;
  return (
    <div
      className={`w-[20.938rem] bg-neutral-700 box-border flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular border-b-[1px] border-solid border-neutral-800`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={imageSrc} />
      <div className="flex-1 relative leading-[1.5rem]">{value}</div>
    </div>
  );
};

export default CardDropdownItem;
