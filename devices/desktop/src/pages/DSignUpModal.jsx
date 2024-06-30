import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import DeviceTablet from "../components/DeviceTablet";
import SizeDesktopCard from "../components/SizeDesktopCard";
import SizeDesktopGenre from "../components/SizeDesktopGenre";
import Header from "../components/Header";
import SizeMediumStateSecondary from "../components/SizeMediumStateSecondary";
import VariantLoginSizeDesktop from "../components/VariantLoginSizeDesktop";

//d-sign-up-screen-1
const DSignUpModal = () => {
  const navigate = useNavigate();

  async function loginRedirect() {
    navigate("/d-login");
  }

  async function signUpRedirect() {
    navigate("d-sign-up-screen-1");
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-5xl text-neutral-100 font-overline-regular">

      <div className="absolute h-[calc(100%_-_368px)] w-[calc(100%_-_360px)] top-[352px] right-[48px] bottom-[16px] left-[312px] flex flex-col items-start justify-start gap-[40px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <DeviceTablet
            text="Trending now"
            rightBtn
            deviceTabletWidth="unset"
            deviceTabletAlignSelf="stretch"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <DeviceTablet
            text="Recently added"
            rightBtn
            deviceTabletWidth="unset"
            deviceTabletAlignSelf="stretch"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[159px] left-[312px] w-[1128px] flex flex-row items-start justify-start gap-[24px]">
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="130px"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="130px"
          sizeDesktopGenreAlignSelf="unset"
          sizeDesktopGenreFlex="unset"
          genreNameLeft="21px"
        />
      </div>
      <Header hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-02.svg" />
      <div className="modal_background_tint" />
      <div className="absolute w-[calc(100%_-_1024px)] top-[284px] right-[512.5px] left-[511.5px] rounded-3xl bg-neutral-800 flex flex-col items-end justify-start p-6 box-border gap-[16px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-8 overflow-hidden shrink-0">
          <img
            className="absolute h-[41.56%] w-[41.56%] top-[29.06%] right-[29.37%] bottom-[29.37%] left-[29.06%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/remove.svg"
          />
        </button>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
          <div className="self-stretch relative leading-[32px]">
            Sign up to Ido
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
              onClick={signUpRedirect}
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
              onClick={signUpRedirect}
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
              onClick={signUpRedirect}
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
              onClick={signUpRedirect}
            />
          </div>
          <VariantLoginSizeDesktop
            alreadyHaveAnAccount="Already have an account? "
            login="Log in"
            loginTextDecoration="none"
          />
        </div>
      </div>
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
    </div>
  );
};

export default DSignUpModal;
