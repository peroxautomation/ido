import TitleTablet from "../components/TitleTablet";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const DeleteAccountModal = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-left text-xl text-neutral-200 font-overline-regular">
      <div className="absolute w-[calc(100%_-_48px)] top-[180px] right-[24px] left-[24px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px]">
          <p className="m-0">
            Your account will be deactivated for 30 days and won't be visible to
            the public. During deactivation, you can reactivate your Ido account
            anytime.
          </p>
          <p className="m-0">
            After 30 days, your account and data will be deleted permanently.
          </p>
          <p className="m-0">It you delete your account:</p>
          <p className="m-0">
            • You won't be able to log in and use any Ido services with that
            account
          </p>
          <p className="m-0">• You will lose access to all your videos</p>
          <p className="m-0">
            • Information that isn't stored in your account, such as direct
            messages, may still be visible to others
          </p>
          <p className="m-0">
            • Information that isn't stored on Ido servers, such as drafts, will
            be removed. You won't be able to download such information after
            deleting your account.
          </p>
          <p className="m-0">
            • You won't be able to get a refund on any items you purchased or
            received.
          </p>
          <p className="m-0">Do you want to continue?</p>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_48px)] top-[136px] right-[24px] left-[24px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px]">
          username: delete this account?
        </div>
      </div>
      <TitleTablet
        titleOfPage="Creating cover dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage={false}
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="307px"
        propOpacity="0"
      />
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Next"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 404px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="202px"
        sizeBigStateSecondaryDevBottom="40px"
        sizeBigStateSecondaryDevLeft="202px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
    </div>
  );
};

export default DeleteAccountModal;
