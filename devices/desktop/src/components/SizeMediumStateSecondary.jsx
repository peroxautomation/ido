const SizeMediumStateSecondary = (props) => {
  const {
    hugeIconinterfacesolidplu,
    text = "CTA",
    leftIcon = true,
    active = true,
    onClick,
  } = props;

  return (
    <div
      className={`cursor-pointer hover:opacity-80 w-full rounded-xl flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular ${
        active ? "bg-[#cc0f3c]" : "bg-white-8"
      }`}
      onClick={onClick}
    >
      {leftIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu}
        />
      )}
      <div className="relative leading-[24px] font-semibold">{text}</div>
    </div>
  );
};

export default SizeMediumStateSecondary;
