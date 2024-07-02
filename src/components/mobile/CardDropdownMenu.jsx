import CardDropdownItem from "./CardDropdownItem";

/**
 * User's cards dropdown menu
 * @param card An array of the user's cards
 * @param onCardSelect Handler to update selected card
 * @returns A JSX element
 */
const CardDropdownMenu = (props) => {
  const { cards, onCardSelect } = props;

  const renderCards = () => {
    return cards.map((element, index) => (
      <CardDropdownItem
        onClick={onCardSelect}
        cardType={element.type}
        key={index}
        value={element.number}
      />
    ));
  };

  return (
    <div
      id="CardDropdownMenu"
      className={`z-10 absolute top-[4.75rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 `}
    >
      {renderCards()}
    </div>
  );
};

//1px solid #1b1b1b

export default CardDropdownMenu;
