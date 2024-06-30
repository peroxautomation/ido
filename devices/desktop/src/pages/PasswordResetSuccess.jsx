import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HugeIconinterfaceoutlinech from "../components/HugeIconinterfaceoutlinech";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import ButtonDefault from "../components/ButtonDefault";

const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  async function loginRedirect() {
    navigate("/d-login");
  }
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <HugeIconinterfaceoutlinech
        hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckcircle.svg"
        hugeIconinterfaceoutlinecWidth="56px"
        hugeIconinterfaceoutlinecHeight="56px"
        hugeIconinterfaceoutlinecPosition="absolute"
        hugeIconinterfaceoutlinecTop="calc(50% - 120px)"
        hugeIconinterfaceoutlinecLeft="calc(50% - 27px)"
      />
      <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_270px)] w-[541px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">
          Your password has been successfully updated
        </div>
      </div>
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Log in "
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="340px"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="unset"
        sizeBigStateSecondaryDevBottom="unset"
        sizeBigStateSecondaryDevLeft="calc(50% - 170px)"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="none"
        sizeBigStateSecondaryDevTop="calc(50% + 94px)"
        cTAColor="#fff"
        onClick={loginRedirect}
      />
    </div>
  );
};

export default PasswordResetSuccess;
