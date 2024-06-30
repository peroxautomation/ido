import { Navigate, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import UserNameImg from "./UserNameImg";
import CTADesktopSmallPrimary from "./CTADesktopSmallPrimary";

const HeaderTablet = (props) => {
  const { className = "", openSideBar, user } = props;
  const navigate = useNavigate();
  async function redirectHome() {
    navigate("/");
  }

   async function redirectUserProfile() {
    navigate("/d-user-profile");
  }

  return (
    <div
      className={`absolute top-[40px] w-full max-w-full flex flex-row items-start justify-start py-2 px-6 box-border gap-[203px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
        <img
          className="cursor-pointer hover:opacity-80 w-11 relative h-11"
          alt=""
          src={"/hugeiconmenuoutlinemenulinehorizontal1.svg"}
          onClick={openSideBar}
        />
        {/* <div className="relative h-[32px] font-semibold">
          <img
            className="cursor-pointer hover:opacity-80 w-[100px] relative h-[50px]"
            alt=""
            src={"/logo_ido.svg"}
          />
        </div> */}
        <div className="relative h-[32px] font-semibold">
          <img
            className="cursor-pointer hover:opacity-80 relative h-full"
            alt=""
            src={"/logo_ido.svg"}
            onClick={redirectHome}
          />
        </div>
      </div>
      <div className="w-[336px] flex flex-row items-start justify-start gap-[16px]">
        <StateInactiveSizeDefault
          text="Create"
          hugeIconeducationsolidpen="/hugeiconinterfaceoutlineplus1.svg"
          icon
          stateInactiveSizeDefaultBackgroundColor="rgba(255, 255, 255, 0.08)"
          stateInactiveSizeDefaultPosition="unset"
          stateInactiveSizeDefaultTop="unset"
          stateInactiveSizeDefaultLeft="unset"
          stateInactiveSizeDefaultWidth="160px"
          stateInactiveSizeDefaultRight="unset"
          stateInactiveSizeDefaultBottom="unset"
          stateInactiveSizeDefaultGap="unset"
          stateInactiveSizeDefaultFlex="unset"
          stateInactiveSizeDefaultAlignSelf="unset"
          hugeIconeducationsolidpenWidth="24px"
          hugeIconeducationsolidpenHeight="24px"
        />
        {/* <UserNameImg ellipse1254="/ellipse-1254@2x.png" /> */}
        {user ? (
          <div
            className="cursor-pointer hover:opacity-80 flex flex-row items-center justify-start"
            onClick={redirectUserProfile}
          >
            <UserNameImg ellipse1254="/ellipse-1254@2x.png" />
          </div>
        ) : (
          <CTADesktopSmallPrimary
            text="Login"
            hugeIconinterfacesolidplu="/hugeiconarrowssolidin@2x.png"
            rightIcon
          />
        )}
      </div>
    </div>
  );
};

export default HeaderTablet;
