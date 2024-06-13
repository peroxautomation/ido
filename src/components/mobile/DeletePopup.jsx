import { useNavigate } from "react-router-dom";
import ProfileBtn from "./ProfileBtn";
import PropTypes from "prop-types";

const DeletePopup = ({ className = "", message, current }) => {
  const navigate = useNavigate();

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
      className={`absolute hidden z-20 top-[calc(50%_-_73.5px)] left-[calc(50%_-_124.5px)] rounded-2xl bg-neutral-700 w-[15.625rem] h-[9.25rem] overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="absolute top-[1rem] left-[calc(50%_-_109px)] leading-[1.75rem] font-semibold inline-block w-[13.625rem]">
        {message}
      </div>
      <ProfileBtn
        onClick={onYesClick}
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTA="Yes"
      />
      <ProfileBtn
        onClick={onNoClick}
        cTABackgroundColor="#cc0f3c"
        cTALeft="8.313rem"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        cTA="No"
      />
    </div>
  );
};

DeletePopup.propTypes = {
  className: PropTypes.string,
};

export default DeletePopup;
