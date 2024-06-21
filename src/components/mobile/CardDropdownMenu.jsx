import CardDropdownItem from "./CardDropdownItem";

const CardDropdownMenu = (props) => {
  const {} = props;
  return (
    <div
      id="CardDropdownMenu"
      className={`hidden z-10 absolute top-[4.75rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular`}
    >
      <CardDropdownItem
        imageSrc="/mastercard.svg"
        value="4169 9028 3716 5583"
      />
      <CardDropdownItem
        imageSrc="/mastercard.svg"
        value="4169 4763 6720 7390"
      />
      <CardDropdownItem 
        imageSrc="/visa.svg" 
        value="9073 6379 7134 8104"
      />
      <CardDropdownItem
        imageSrc="/mastercard.svg"
        value="4169 8376 5730 0029"
      />
    </div>
  );
};

//1px solid #1b1b1b

export default CardDropdownMenu;
