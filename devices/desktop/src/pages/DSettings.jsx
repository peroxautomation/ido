import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import PushNotifications1 from "../components/PushNotifications1";
import Privacy from "../components/Privacy";
import Password1 from "../components/Password1";
import AccountControl from "../components/AccountControl";
import VariantsDeleteAccount from "../components/VariantsDeleteAccount";
import VariantsWhyAreYouLeavingI from "../components/VariantsWhyAreYouLeavingI";
import AreYouSureModal from "../components/AreYouSureModal";
import ConfirmDeleteAccount from "./ConfirmDeleteAccount";
import DeleteAccountSuccess from "./DeleteAccountSuccess";
import Processing from "./Processing";

//done
const DSettings = () => {
  const navigate = useNavigate();
  const [isDeleteAccount, setIsDeleteAccount] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isReason, setIsReason] = useState(false);
  const [iApproveDelete, setIApproveDelete] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function deleteAccount() {
    setIsModal(true);
    setIsDeleteAccount(true);
    setIsConfirm(false);
    setIsReason(false);
    setIApproveDelete(false);
    setIsProcessing(false);
    setIsSuccess(false);
  }
  async function confirmDeleteAccount() {
    setIsModal(true);
    setIsDeleteAccount(false);
    setIsConfirm(true);
    setIsReason(false);
    setIApproveDelete(false);
    setIsProcessing(false);
    setIsSuccess(false);
  }

  async function confirmReason() {
    setIsModal(true);
    setIsDeleteAccount(false);
    setIsConfirm(false);
    setIsReason(true);
    setIApproveDelete(false);
    setIsProcessing(false);
    setIsSuccess(false);
  }

  async function approvingDelete() {
    setIsModal(true);
    setIsDeleteAccount(false);
    setIsConfirm(false);
    setIsReason(false);
    setIApproveDelete(true);
    setIsProcessing(false);
    setIsSuccess(false);
  }

  async function rejectingDelete() {
    setIsModal(false);
    setIsDeleteAccount(false);
    setIsConfirm(false);
    setIsReason(false);
    setIApproveDelete(false);
    setIsProcessing(false);
    setIsSuccess(false);
  }

  async function updatingPassword() {
    setIsModal(false);
    setIsUpdatePassword(true);
    navigate("/d-update-password");
  }

  async function processingDelete() {
    setIsModal(false);
    setIsDeleteAccount(false);
    setIsConfirm(false);
    setIsReason(false);
    setIApproveDelete(false);
    setIsProcessing(true);
    setIsSuccess(false);
  }

  async function completedDelete() {
    setIsModal(false);
    setIsDeleteAccount(false);
    setIsConfirm(false);
    setIsReason(false);
    setIApproveDelete(false);
    setIsProcessing(false);
    setIsSuccess(true);
  }

  useEffect(() => {
    if (isProcessing) {
      setTimeout(() => {
        completedDelete();
      }, 4000);
    }
  });

  //if user doesn't click on return, this function will trigger auto redirect to home page after 10 seconds
  useEffect(() => {
    if (isProcessing) {
      setTimeout(() => {
        redirectUser();
      }, 10000);
    }
  });

  async function redirectUser() {
    //logout user with delete account
    navigate("/");
  }

  return (
    <>
      {!isProcessing && !isSuccess && (
        <>
          {" "}
          <div className="w-screen h-screen relative bg-neutral-900  overflow-hidden">
            <Header user={true} />
            <PushNotifications1
              toggle="/toggle.svg"
              toggle1="/toggle1.svg"
              toggle2="/toggle.svg"
              toggle3="/toggle.svg"
            />
            <Privacy toggle="/toggle.svg" />
            <Password1 updatingPassword={updatingPassword} />
            <AccountControl deleteAccount={deleteAccount} />
            {isModal && (
              <>
                <div className="modal_background_tint" />
                {isDeleteAccount && (
                  <>
                    <AreYouSureModal
                      rejectingDelete={rejectingDelete}
                      confirmDeleteAccount={confirmDeleteAccount}
                      questionText="Are you sure want to delete account?"
                      hugeIconeducationsolidpen="/hugeiconeducationsolidpencil9@2x.png"
                      cTA="Cancel"
                      hugeIconeducationsolidpen1="/hugeiconeducationsolidpencil@2x.png"
                      cTA1="Delete"
                      areYouSureModalPosition="absolute"
                      areYouSureModalTop="calc(50% - 73.5px)"
                      areYouSureModalLeft="calc(50% - 125px)"
                    />
                  </>
                )}

                {isConfirm && (
                  <VariantsWhyAreYouLeavingI
                    reason1="Lost interest"
                    reason2="Didn’t meet my expectations"
                    reason3="Found a better alternative"
                    reason4="Encountered too many bugs or issues"
                    reason5="App is too difficult to use"
                    reason6="Not useful for my needs"
                    hugeIconeducationsolidpen="/hugeiconeducationsolidpencil2@2x.png"
                    showCTA
                    variantsWhyAreYouLeavingIPosition="absolute"
                    variantsWhyAreYouLeavingITop="calc(50% - 249px)"
                    variantsWhyAreYouLeavingILeft="calc(50% - 208px)"
                    variantsWhyAreYouLeavingIBackgroundColor="#1b1b1b"
                    confirmReason={confirmReason}
                    rejectingDelete={rejectingDelete}
                  />
                )}

                {isReason && (
                  <VariantsDeleteAccount
                    approvingDelete={approvingDelete}
                    rejectingDelete={rejectingDelete}
                    returnToPrevious={confirmDeleteAccount}
                  />
                )}
                {iApproveDelete && (
                  <ConfirmDeleteAccount
                    processingDelete={processingDelete}
                    returnToPrevious={confirmReason}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}

      {isProcessing && !isSuccess && <> {isProcessing && <Processing />}</>}

      {!isProcessing && isSuccess && (
        <>{isSuccess && <DeleteAccountSuccess redirectUser={redirectUser} />}</>
      )}
    </>
  );
};

export default DSettings;
