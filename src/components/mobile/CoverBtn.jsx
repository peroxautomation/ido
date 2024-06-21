/**
 * Button used in create cover screens
 * @param cta the buton label
 * @param ctaClick button on click function
 * @returns A JSX element
 */
const CoverBtn = (props) => {
  const { cta, ctaClick } = props;
  return (
    <div
      onClick={ctaClick}
      className={`relative left-[calc(50%_-_50.5px)] rounded-md bg-neutral-800 w-[6.313rem] flex flex-row items-center justify-center p-[0.5rem] box-border text-[0.8em] text-nowrap`}
    >
      <div className="relative leading-[1rem]">{cta}</div>
    </div>
  );
};

export default CoverBtn;
