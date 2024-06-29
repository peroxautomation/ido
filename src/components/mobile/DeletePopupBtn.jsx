/**
 * Button for delete popop
 * @param onClick On click function
 * @param cTA The button label
*  @param className Additional styling to include
 * @returns Delete button
 */
const DeletePopupBtn = (props) => {
  const { onClick, cTA, className} = props;

  return (
    <button
      onClick={onClick}
      className={`delete-popup-btn ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};

export default DeletePopupBtn;
