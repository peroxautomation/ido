import React, { useState, useEffect, useMemo } from "react";
import TitleTablet from "../components/TitleTablet";
import StateInactiveSizeDefault from "../components/StateInactiveSizeDefault";
import AreYouSureModal from "../components/AreYouSureModal";

const ConfirmDeleteAccount = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  console.log({ isConfirm });

  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-left text-xl text-neutral-200 font-overline-regular">
      <div className="absolute w-[calc(100%_-_48px)] top-[188px] right-[24px] left-[24px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px]">
          Tapping "Delete account" will delete Ido account username.
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_48px)] top-[136px] right-[24px] left-[24px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px]">Delete account</div>
      </div>
      <TitleTablet
        titleOfPage="Creating cover dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage={false}
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="307px"
        propOpacity="0"
      />
      <div
        className="btn-primary-active absolute w-[335px] top-[308px] left-[204px]"
        onClick={() => setIsConfirm(true)}
      >
        {"Delete account"}
      </div>
      {isConfirm && (
        <>
          <div className="modal_background_tint" />
          <AreYouSureModal
            setIsConfirm={setIsConfirm}
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
    </div>
  );
};

export default ConfirmDeleteAccount;
