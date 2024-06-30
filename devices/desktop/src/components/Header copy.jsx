import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import UserNameImg from "./UserNameImg";
import CTADesktopSmallPrimary from "./CTADesktopSmallPrimary";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";
import CreateButton from "./CreateButton";

const HeaderDesktop = (props) => {
  const { user } = props;
  const [isCreate, setIsCreate] = useState(false);

  const navigate = useNavigate();

  async function redirectHome() {
    navigate("/");
  }

  async function redirectUserProfile() {
    navigate("/d-user-profile");
  }

  // There is no need to create on desktop and tablet view, this function is liited to mobile view only
  async function redirectToCreate() {
    navigate("/d-create");
  }
  return (
    <div
      className={`absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] bg-neutral-800 flex flex-row items-center justify-between py-8 px-12 box-border text-center text-13xl text-neutral-100 font-overline-regular`}
    >
      {/* <div className="relative leading-[40px] font-semibold">LOGO</div> */}
      <div className="relative [40px] font-semibold">
        <img
          className="cursor-pointer hover:opacity-80 relative h-full"
          alt=""
          src={"/logo_ido.svg"}
          onClick={redirectHome}
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-[24px]">
        <SearchBar hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-023.svg" />

        <div className="flex flex-col justify-center items-center gap-2">
          <CreateButton
            text="Create"
            hugeIconinterfacesolidplu="/hugeiconinterfaceoutlineplus.svg"
            rightIcon
            sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeSmallStatePrimaryDevWidth="252px"
            sizeSmallStatePrimaryDevPosition="unset"
            sizeSmallStatePrimaryDevRight="unset"
            sizeSmallStatePrimaryDevBottom="unset"
            sizeSmallStatePrimaryDevLeft="unset"
            cTAColor="#fff"
          />
        </div>

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

export default HeaderDesktop;
