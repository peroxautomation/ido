/**
 * Cover source component
 * @param value component value/label
 * @param onClick function to set selected source
 */
const CoverSource = (props) => {
  const { value, onClick, selectedValue } = props;

  /**
   * Handle update selected video source
   */
  const onItemSelect = () => {
    onClick(value);
  };

  return (
    <div
      onClick={onItemSelect}
      className={`self-stretch rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-center text-[1rem] ${
        selectedValue == value ? "text-neutral-800" : "text-primary-500"
      } ${selectedValue == value ? "bg-primary-500" : "bg-neutral-800"}`}
    >
      <div className="relative leading-[1.5rem] font-semibold">{value}</div>
    </div>
  );
};

export default CoverSource;
