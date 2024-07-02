/**
 * Video frames from user to selecct video thumbnail (cover)
 * @param {*} style Selected style to be applied
 * @param {*} onClick On click function
 * @param {*} src Image frame
 * @returns
 */
const SelectCoverFrame = (props) => {
  const { style, onClick, src } = props;
  return (
    <img
      onClick={(e) => onClick(e, src)}
      className={`selected-video-frame`}
      alt=""
      src={src}
      style={style}
    />
  );
};

export default SelectCoverFrame;
