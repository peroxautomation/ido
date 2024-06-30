import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import UserNameImg from "./UserNameImg";
import CTADesktopSmallPrimary from "./CTADesktopSmallPrimary";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";
import CreateButton from "./CreateButton";

const Header = (props) => {
  const { user } = props;
  const [isCreate, setIsCreate] = useState(false);

  const navigate = useNavigate();

  async function redirectHome() {
    navigate("/");
  }

  async function redirectUserProfile() {
    navigate("/d-user-profile");
  }

  async function redirectToCreate() {
    navigate("/d-create");
  }
  return (
    <div
      className={`absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] bg-neutral-800 flex flex-row items-center justify-between py-8 px-12 box-border text-center text-13xl text-neutral-100 font-overline-regular`}
    >
      <div className="relative leading-[40px] font-semibold">LOGO</div>
      <div className="flex flex-row items-center justify-between w-full gap-[24px] ml-[20px]">
        <SearchBar hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-023.svg" />

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

export default Header;
