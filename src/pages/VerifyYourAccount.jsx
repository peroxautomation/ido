import { useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";

const VerifyYourAccount = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Open google authentication
   */
  const onGoogleClick = () => {
    navigate("/profile/settings/account-control/confirm-delete");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-300 font-h3-semibold">
      <Title
        titleWidth="20.938rem"
        titleTop="2.5rem"
        titleRight="unset"
        titleLeft="1.25rem"
        pageName=""
        showPageName={false}
        pageNameWidth="6.375rem"
        pageNameFontWeight="600"
        pageNameColor="#fff"
      />
      <div className="relative grid grid-flow-row justify-items-start w-[90%] left-[1.25rem] top-[6.75rem] gap-[1rem]">
        <div className="relative flex flex-row items-center justify-center text-[1.25rem] text-neutral-200">
          <div className="flex-1 relative leading-[1.75rem]">
            Verify your account
          </div>
        </div>
        <div className="relative flex flex-row items-center justify-center">
          <div className="w-[20.938rem] relative leading-[1.5rem] inline-block shrink-0">
            To continue, log in to the Google account you signed up with so we
            can confirm the Ido account username belongs to you.
          </div>
        </div>
        <button
          onClick={onGoogleClick}
          className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-white-8 relative w-full rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem]`}
        >
          <img
            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
            alt=""
            src="/google.svg"
          />
          <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-h3-semibold text-neutral-100 text-center">
            Continue with Google
          </div>
        </button>
      </div>
    </div>
  );
};

export default VerifyYourAccount;
