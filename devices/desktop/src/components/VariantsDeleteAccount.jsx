import DeviceMobile1 from "./DeviceMobile1";
const VariantsDeleteAccount = (props) => {
  const { approvingDelete, rejectingDelete, returnToPrevious } = props;
  return (
    <div className="modal-position">
      <div className={`modal_container`}>
        <div className="flex flex-row items-center justify-center gap-[304px] z-[0]">
          <img
            className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconarrowsbulkdirectionleft-011.svg"
            onClick={returnToPrevious}
          />
          <img
            className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidremove.svg"
            onClick={rejectingDelete}
          />
        </div>

        <DeviceMobile1
          text="username: delete this account?"
          orSignUpFontSize="20px"
          orSignUpLineHeight="28px"
          orSignUpFontWeight="unset"
          orSignUpColor="#e9e9e9"
        />
        <div className="w-[368px] h-[278px] overflow-auto shrink-0 flex flex-row items-start justify-center z-[2]">
          <div className="self-stretch flex-1 relative leading-[24px]">
            <p className="m-0">
              Your account will be deactivated for 30 days and won't be visible
              to the public. During deactivation, you can reactivate your Ido
              account anytime.
            </p>
            <p className="m-0">
              After 30 days, your account and data will be deleted permanently.
            </p>
            <p className="m-0">It you delete your account:</p>
            <p className="m-0">
              • You won't be able to log in and use as drafts, will be removed.
              You won't be able to download such information after deleting your
              account.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Do you want to continue?</p>
          </div>
        </div>
        {/* SizeMediumStateSecondary */}
        <button className={`btn-primary-active`} onClick={approvingDelete}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default VariantsDeleteAccount;
