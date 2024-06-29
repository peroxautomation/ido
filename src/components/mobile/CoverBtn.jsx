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
      className={`cover-btn`}
    >
      <div className="relative leading-[1rem]">{cta}</div>
    </div>
  );
};

export default CoverBtn;
