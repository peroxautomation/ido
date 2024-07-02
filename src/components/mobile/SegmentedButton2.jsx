/**
 * Button segment for create picker
 * @param placeholder Button label
 * @param onClick On click function
 * @param  className Additional css classes to add
 * @returns 
 */
const SegmentedButton2 = (props) => {
  const { placeholder, onClick, className} = props;
  return (
    <div
      onClick={onClick}
      className={`create-picker-segment-button ${className}`}
    >
      <div className="relative leading-[1rem] font-semibold">{placeholder}</div>
    </div>
  );
};

export default SegmentedButton2;
