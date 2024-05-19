import LoginMethodBTN from "./LoginMethodBTN";
import React from "react";
import PopUpShade from "./PopUpShade";

const LoginPopup = () => {
  return (
    <div className="absolute w-[calc(100%_-_1024px)] top-[284px] right-[512px] left-[512px] rounded-3xl bg-neutral-800 flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-base text-neutral-100 font-body-regular">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-8 overflow-hidden shrink-0">
        <img
          className="absolute h-[41.56%] w-[41.56%] top-[29.06%] right-[29.37%] bottom-[29.37%] left-[29.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/remove.svg"
        />
      </button>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
        <div className="self-stretch relative text-5xl leading-[32px]">
          LOG IN TO IDO
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <LoginMethodBTN
            hugeIcondeviceoutlineuser="/hugeicondeviceoutlineuser.svg"
            cTA="Use Email / Username"
          />
          <LoginMethodBTN
            hugeIcondeviceoutlineuser="/google.svg"
            cTA="Continue with Google"
          />
          <LoginMethodBTN
            hugeIcondeviceoutlineuser="/apple.svg"
            cTA="Continue with Apple"
          />
          <LoginMethodBTN
            hugeIcondeviceoutlineuser="/facebook.svg"
            cTA="Continue with Facebook"
          />
        </div>
        <div className="w-80 flex flex-row items-center justify-center py-2 px-0 box-border gap-[8px] text-neutral-200">
          <div className="relative leading-[24px] font-semibold">{`Don’t have an account? `}</div>
          <a className="[text-decoration:none] relative leading-[24px] font-semibold text-primary-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
