/**
 * Dropdown item for Card dropdown list
 * @param imageSrc card image src (visa or mastercard)
 * @param value card number
 * @param onClick Handler to update selected card
 *  */
const CardDropdownItem = (props) => {
  const { value, onClick, cardType } = props;
  return (
    <div
      onClick={() => onClick(value, cardType)}
      className={`w-[20.938rem] bg-neutral-700 box-border flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100  border-b-[1px] border-solid border-neutral-800`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem]"
        alt=""
        src={cardType === "master" ? "/mastercard.svg" : "/visa.svg"}
      />
      <div className="flex-1 relative leading-[1.5rem]">{value}</div>
    </div>
  );
};

export default CardDropdownItem;
