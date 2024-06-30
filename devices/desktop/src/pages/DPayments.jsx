import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions2 from "../components/Subscriptions2";
import MyWallet from "../components/MyWallet";
import ModalWindows11 from "../components/ModalWindows";
import DropdownsMenuSavedCards from "../components/DropdownsMenuSavedCards";
import ModalCard from "../components/ModalCard";
import ModalTopUp from "../components/ModalTopUp";
import ModalWithdraw from "../components/ModalWithdraw";
import PaymentHistoryCard from "../components/PaymentHistoryCard";
import AddNewPaymentCard from "./AddNewPaymentCard";

const DPayments = () => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isTopUp, setIsTopUp] = useState(false);
  const [isWithdraw, setWithdraw] = useState(false);
  const [iAddPaymentMethod, setAddPaymentMethod] = useState(false);
  const [isCancelSubscription, setCancelSubscription] = useState(false);
  const [isDeleteCard, setIsDeleteCard] = useState(false);
  const [isShowHistory, setIsShowHistory] = useState(false);

  async function redirectUser() {
    navigate("/");
  }

  async function openTopUpModal() {
    setModalOpen(true);
    setIsTopUp(true);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function closeTopUpModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function openWithdrawModal() {
    setModalOpen(true);
    setIsTopUp(false);
    setWithdraw(true);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function closeWithdrawModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function openCancelSubscriptionModal() {
    setModalOpen(true);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(true);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function closeCancelSubscriptionModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function openDeleteModal() {
    setModalOpen(true);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(true);
    setIsShowHistory(false);
  }

  async function closeDeleteModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function openShowHistoryModal() {
    setModalOpen(true);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(true);
    // navigate("/d-payments-history");
  }

  async function closeShowHistoryModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function openAddPaymentMethodModal() {
    setModalOpen(true);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(true);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }

  async function closeAddPaymentMethodModal() {
    setModalOpen(false);
    setIsTopUp(false);
    setWithdraw(false);
    setAddPaymentMethod(false);
    setCancelSubscription(false);
    setIsDeleteCard(false);
    setIsShowHistory(false);
  }


  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      {!isShowHistory && (
        <>
          <div className="absolute h-[calc(100%_-_126px)] w-[calc(100%_-_360px)] top-[148px] right-[55px] bottom-[-22px] left-[305px] overflow-y-auto flex flex-col items-start justify-start gap-[24px]">
            <Property1DesktopTitle
              text="Payments"
              showLayers
              property1DesktopTitlePosition="unset"
              property1DesktopTitleTop="unset"
              property1DesktopTitleLeft="unset"
              property1DesktopTitleWidth="1080px"
              property1DesktopTitleAlignSelf="unset"
            />
            <MyWallet
              openTopUpModal={openTopUpModal}
              openWithdrawModal={openWithdrawModal}
              openShowHistoryModal={openShowHistoryModal}
            />
            <PaymentMethods openAddPaymentMethodModal={openAddPaymentMethodModal}/>
            <Subscriptions2 />
          </div>
          {isTopUp && (
            <ModalCard className={""}>
              <>
                <ModalTopUp
                  topUpWallet="Top up wallet"
                  info={false}
                  propHeight="360px"
                  propGap="unset"
                  propHeight1="299px"
                  propGap1="unset"
                  propWidth3="320px"
                  propAlignSelf3="unset"
                  closeModal={closeTopUpModal}
                />
              </>
            </ModalCard>
          )}

          {isWithdraw && (
            <ModalCard className={""}>
              <>
                <ModalWithdraw
                  topUpWallet="Withdraw"
                  info={false}
                  propHeight="360px"
                  propGap="unset"
                  propHeight1="299px"
                  propGap1="unset"
                  propWidth3="320px"
                  propAlignSelf3="unset"
                  closeModal={closeTopUpModal}
                />
              </>
            </ModalCard>
          )}
          {iAddPaymentMethod && (
            <ModalCard className={""}>
              <>
                <AddNewPaymentCard
                  topUpWallet="Withdraw"
                  info={false}
                  propHeight="360px"
                  propGap="unset"
                  propHeight1="299px"
                  propGap1="unset"
                  propWidth3="320px"
                  propAlignSelf3="unset"
                  closeModal={closeTopUpModal}
                />
              </>
            </ModalCard>
          )}
        </>
      )}

      {isShowHistory && <PaymentHistoryCard onClick={closeShowHistoryModal} closeModal={closeAddPaymentMethodModal} />}
    </div>
  );
};

export default DPayments;
