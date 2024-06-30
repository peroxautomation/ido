import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Dropdowns1 from "../components/Dropdowns1";
import Property1Desktop1 from "../components/Property1Desktop1";

const DSignUp1 = () => {
  const navigate = useNavigate();

  async function previousSignUpPage() {
    navigate("/d-sign-up-screen-1");
  }

  async function nextSignUpPage() {
    navigate("/d-sign-up-screen-2");
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Dropdowns1 nextSignUpPage={nextSignUpPage} />
      <Property1Desktop1
        text="Sign up"
        property1DesktopAlignSelf="unset"
        property1DesktopPosition="absolute"
        property1DesktopTop="203px"
        property1DesktopLeft="calc(50% - 160px)"
        property1DesktopWidth="320px"
        property1DesktopBottom="unset"
        property1DesktopHeight="unset"
      />
      <img
        className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
        alt=""
        src="/direction-left.svg"
        onClick={previousSignUpPage}
      />
    </div>
  );
};

export default DSignUp1;
