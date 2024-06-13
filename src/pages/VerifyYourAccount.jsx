import { useNavigate } from "react-router-dom";
import GoogleSignInBtn from "../components/mobile/GoogleSignInBtn";
import Title from "../components/mobile/Title";

const VerifyYourAccount = () => {
  const navigate = useNavigate();
  
  /**
   * Open google authentication
   */
  const onGoogleClick = () =>{
    navigate('/profile/settings/account-control/confirm-delete')
  }

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
        <GoogleSignInBtn onClick={onGoogleClick} />
      </div>
    </div>
  );
};

export default VerifyYourAccount;
