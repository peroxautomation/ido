/**
 * Secondary button component
 * @param onClick button on click
 * @param cTA button cta label
 * @param className Aditional classes to add
 * @returns A JSX element
 */
const SecondaryButton = (props) => {
  const { onClick, cTA, className } = props;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer relative w-full rounded-xl bg-primary-500 flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] box-border gap-[0.5rem] text-center text-[1rem] text-neutral-100 font-button-1-regular ${className} `}
    >
      <div className="relative leading-[1.5rem] font-semibold">{cTA}</div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="hugeiconeducationsolidpencil3"
      />
    </div>
  );
};

export default SecondaryButton;
