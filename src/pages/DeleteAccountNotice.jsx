import { useNavigate } from "react-router-dom";
import Button2 from "../components/mobile/Button2";
import Title from "../components/mobile/Title";

/**
 * Delete account notice screen
 * @returns
 */
const DeleteAccountNotice = () => {
  const navigate = useNavigate();
  const onContinueClick = () => {
    navigate("/profile/verify-your-account");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-300 font-h3-semibold">
      <Title pageName="Delete Account" />
      <div className="relative top-[6rem] left-[calc(50%_-_167.5px)] w-[20.938rem] grid grid-flow-row justify-center">
        <div className="flex-1 relative leading-[1.75rem] text-[1.25rem] text-neutral-200">
          username: delete this account?
        </div>
        <div className="flex-1 relative leading-[1.5rem] mt-[5] h-[calc(100vh_-_15rem)] overflow-y-auto">
          <p className="my-4">
            Your account will be deactivated for 30 days and won't be visible to
            the public. During deactivation, you can reactivate your Ido account
            anytime.
          </p>
          <p className="my-4">
            After 30 days, your account and data will be deleted permanently.
          </p>
          <p className="my-4">It you delete your account:</p>
          <p className="my-4">
            • You won't be able to log in and use any Ido services with that
            account
          </p>
          <p className="my-4">• You will lose access to all your videos</p>
          <p className="my-4">
            • Information that isn't stored in your account, such as direct
            messages, may still be visible to others
          </p>
          <p className="my-4">
            • Information that isn't stored on Ido servers, such as drafts, will
            be removed. You won't be able to download such information after
            deleting your account.
          </p>
          <p className="my-4">
            • You won't be able to get a refund on any items you purchased or
            received.
          </p>
          <p className="my-4">Do you want to continue?</p>
        </div>
      </div>
      <Button2
        onClick={onContinueClick}
        cTATop="unset"
        cTALeft="1.25rem"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.688rem"
        cTA="Continue"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTABackgroundColor="#cc0f3c"
        cTAPosition="absolute"
        cTAGap="0.5rem"
        cTAFlex="unset"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
        cTAAlignSelf="unset"
      />
    </div>
  );
};

export default DeleteAccountNotice;
