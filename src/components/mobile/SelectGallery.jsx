/**
 * Select video from gallery button
 * @param ctaClick On click function
 * @returns 
 */
const SelectGallery = (props) => {
  const { ctaClick } = props;
  return (
    <div
      onClick={ctaClick}
      className={`flex flex-row items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-overline-semibold `}
    >
      <div className="relative leading-[1.5rem]">Recents</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectiondown-01.svg"
      />
    </div>
  );
};

export default SelectGallery;
