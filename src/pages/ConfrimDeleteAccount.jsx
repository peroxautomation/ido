import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Confirm Delete account screen
 * @returns A JSX element
 */
const ConfrimDeleteAccount = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [isPopupActive, setIsPopupActive] = useState(false);
  const navigate = useNavigate();

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  const onDeletClick = () => {
    setIsPopupActive(true);
  };

  const onYesClick = () => {
    navigate("/home");
  };

  const onNoClick = () => {
    setIsPopupActive(false);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-300 font-h3-semibold grid grid-flow-row justify-items-center">
      <Title pageName="Confrim Delete Account" />
      <div className="relative top-[6.75rem] grid grid-flow-row items-center justify-center text-[1.25rem] text-neutral-200 w-[90%] h-[8rem]">
        <div className="">Delete account</div>
        <div className="">
          Tapping &Prime;Delete account&Prime; will delete Ido account username.
        </div>
      </div>
      <div className="absolute w-[90%] left-[1.25rem] right-[2.5rem] top-[17rem]">
        <PrimaryButton
          onCTAClick={onDeletClick}
          cTA="Delete account"
          isActive={true}
        />
      </div>
      {isPopupActive && (
        <DeletePopup
          message={"Are you sure want to delete account?"}
          current={"DeleteAccount"}
          onNoClick={onNoClick}
          onYesClick={onYesClick}
        ></DeletePopup>
      )}
    </div>
  );
};

export default ConfrimDeleteAccount;
