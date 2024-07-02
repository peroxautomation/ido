import DeletePopupBtn from "./DeletePopupBtn";

/**
 * Delete popup component
 * @param message The delete message to show
 * @param onYesClick On yes click function
 * @param onNoClick On no click function
 * @returns A JSX element
 */
const DeletePopup = (props) => {
  /********************************************************************* */
  /***************************{ Variables & States }******************** */
  /********************************************************************* */
  const { message, onYesClick, onNoClick } = props;

  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */

  return (
    <div id="ProfileDeleteDancePopup" className={`delete-popup`}>
      <div className="absolute top-[1rem] left-[calc(50%_-_109px)] leading-[1.75rem] font-semibold inline-block w-[13.625rem]">
        {message}
      </div>
      <div className="grid grid-flow-col">
        <DeletePopupBtn onClick={onYesClick} cTA="Yes" />
        <DeletePopupBtn
          onClick={onNoClick}
          cTA="No"
          className=" bg-primary-500"
        />
      </div>
    </div>
  );
};

export default DeletePopup;
