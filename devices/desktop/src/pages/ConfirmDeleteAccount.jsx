import React, { useState, useEffect, useMemo } from "react";
import TitleTablet from "../components/TitleTablet";

const ConfirmDeleteAccount = (props) => {
  const { processingDelete, returnToPrevious } = props;

  return (
    <div className="modal-position">
      <div className="modal_container">
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
          returnToPrevious={returnToPrevious}
        />
        <div
          className="btn-primary-active absolute w-[335px] top-[308px]"
          onClick={processingDelete}
        >
          {"Delete account"}
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteAccount;
