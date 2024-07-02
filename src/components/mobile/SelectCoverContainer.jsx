/**
 * Selected challenge/cover video thumbnail (cover)
 * @param {*} selectedFrameSrc The selected frame source
 * @returns
 */
const SelectCoverContainer = (props) => {
  const { selectedFrameSrc } = props;

  return (
    <img
      className={`selected-video-container`}
      alt=""
      src={selectedFrameSrc}
    />
  );
};
export default SelectCoverContainer;
