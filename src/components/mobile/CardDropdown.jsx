/**
 * Card dropdown buttons for withdraw and top-up
 * @param value the value of the selected card
 * @param handleSetValue  function handler to update value
 * @returns A JSX element
 */
const CardDropdown = (props) => {
  const { value, onDropdownClick } = props;

  return (
    <div
      onClick={onDropdownClick}
      className={`flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 `}
    >
      <div className="w-[20.938rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">Select card</div>
      </div>
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className={`w-[1.5rem] relative h-[1.5rem] ${
            value.type == null ? "hidden" : ""
          } `}
          alt=""
          src={value.type === "master" ? "/mastercard.svg" : "/visa.svg"}
        />
        <div className="flex-1 relative leading-[1.5rem]">
          {value.number == null ? "Choose card" : value.number}
        </div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

export default CardDropdown;