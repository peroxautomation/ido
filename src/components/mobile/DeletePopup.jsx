import { useNavigate } from "react-router-dom";
import ProfileBtn from "./ProfileBtn";

/**
 * Delete popup component
 * @param message
 * @param current
 * @returns
 */
const DeletePopup = (props) => {
  const navigate = useNavigate();
  const { message, current } = props;

  const onNoClick = () => {
    const element = document.getElementById("ProfileDeleteDancePopup");
    element.classList.toggle("hidden");
  };

  const onYesClick = () => {
    if (current === "Subscription") navigate("/subscription-cancled");

    if (current === "DeleteAccount") navigate("/home"); //TODO: Add to delete user data and navigate to home
  };

  return (
    <div
      id="ProfileDeleteDancePopup"
      className={`absolute hidden z-20 top-[calc(50%_-_73.5px)] left-[calc(50%_-_124.5px)] rounded-2xl bg-neutral-700 w-[15.625rem] h-[9.25rem] overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="absolute top-[1rem] left-[calc(50%_-_109px)] leading-[1.75rem] font-semibold inline-block w-[13.625rem]">
        {message}
      </div>
      <div className="grid grid-flow-col">
        <ProfileBtn onClick={onYesClick} cTA="Yes" />
        <ProfileBtn onClick={onNoClick} cTA="No" className=" bg-primary-500" />
      </div>
    </div>
  );
};

export default DeletePopup;
