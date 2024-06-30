import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import VariantLoginSizeDesktop from "./VariantLoginSizeDesktop";

const ModalWindows5 = (props) => {
  const { returnPage } = props;
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  async function loginPage() {
    setIsLogin(true);
    setIsSignUp(false);
    navigate("/d-login");
  }

  async function signUpPage() {
    setIsLogin(false);
    setIsSignUp(true);
    // navigate("/d-sign-up");
    navigate("/d-sign-up-screen-1");
    //
  }

  return (
    <div
      className={`absolute w-[calc(100%_-_1024px)] top-[284px] right-[512px] left-[512px] rounded-3xl bg-neutral-800 flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular`}
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-8 overflow-hidden shrink-0"
        onClick={returnPage}
      >
        <img
          className="absolute h-[41.56%] w-[41.56%] top-[29.06%] right-[29.37%] bottom-[29.37%] left-[29.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/remove.svg"
        />
      </button>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
        <div className="self-stretch relative leading-[32px]">
          Log in to Ido
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeicondeviceoutlineuser.svg"
            text="Use Email / Username"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="none"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
            onClick={loginPage}
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/google.svg"
            text="Continue with Google"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="none"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
            onClick={loginPage}
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/apple.svg"
            text="Continue with Apple"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="none"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
            onClick={loginPage}
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/facebook.svg"
            text="Continue with Facebook"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="none"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
            onClick={loginPage}
          />
        </div>
        <VariantLoginSizeDesktop
          alreadyHaveAnAccount="Don’t have an account? "
          login="Sign up"
          loginTextDecoration="none"
          signUpPage={signUpPage}
          loginPage={loginPage}
        />
      </div>
    </div>
  );
};

export default ModalWindows5;
