

/**
 * Title for component for create cover, create challenge and create new challenge
 * @param {*} titleText The title of the page 
 * @returns 
 */
const CreateTitle = (props) => {
  const { titleText } = props;
  return (
    <div
      className={`create-title`}
    >
      <div className="create-title-text">
        <div className="relative leading-[1rem] font-semibold">{titleText}</div>
      </div>
    </div>
  );
};

export default CreateTitle;
