/**
 * Home page section heading 
 * @param {*} sectionName Section heading value 
 * @param {*} linkTo page to navigate to 
 * @returns A JSX element
 */
const HomeSectionHeading = (props) => {
  const { sectionName, linkTo } = props;
  return (
    <div className={`main-page-section-heading`}>
      <div className="flex-1 relative leading-[1.5rem] font-semibold">
        {sectionName}
      </div>
      <a
        className="main-page-section-heading-link"
        href={linkTo}
      >
        View more
      </a>
    </div>
  );
};

export default HomeSectionHeading;
