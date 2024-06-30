import React, { useState, useEffect, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import StateDefault1 from "./StateDefault1";
import StateDefaultPropertyDeskto1 from "./StateDefaultPropertyDeskto1";
import MenuTablet from "./MenuTablet";

const StateUser = (props) => {
  const {
    className = "",
    hugeIconinterfaceoutlineh,
    stateUserPosition,
    stateUserTop,
    stateUserLeft,
    closeSideBar,
    user,
    openPlans,
  } = props;
  const stateUserStyle = useMemo(() => {
    return {
      position: stateUserPosition,
      top: stateUserTop,
      left: stateUserLeft,
    };
  }, [stateUserPosition, stateUserTop, stateUserLeft]);

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [activeTab, setactiveTab] = useState(false);

  const [isHome, setIsHome] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [isMoves, setIsMoves] = useState(false);

  const [isHistory, setIsHistory] = useState(false);

  const [isLikedVideos, setIsLikedVideos] = useState(false);

  const [isPayments, setIsPayments] = useState(false);

  const [isSubscriptions, setIsSubscriptions] = useState(false);

  const [isChat, setIsChat] = useState(false);

  const [isNotifications, setIsNotifications] = useState(false);

  const [isSettings, setIsSettings] = useState(false);

  const [isContactUs, setIsContactUs] = useState(false);

  const [isAboutUs, setIsAboutUs] = useState(false);

  const [isFAQ, setIsFAQ] = useState(false);

  const [isUpgradeTo, setIsUpgradeTo] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  async function redirectHome() {
    setIsHome(true);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/");
  }
  async function redirectSearch() {
    setIsHome(false);
    setIsSearch(true);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-search-result");
  }
  async function redirectMoves() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(true);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-moves");
  }
  async function redirectHistory() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(true);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-history");
  }
  async function redirectLikedVideos() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(true);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-liked-videos");
  }
  async function redirectPayments() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(true);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-payments");
  }
  async function redirectSubscriptions() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(true);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/subscriptions");
  }
  async function redirectChat() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(true);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-chatmessage");
  }
  async function redirectNotifications() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(true);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/");
  }
  async function redirectSettings() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(true);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-settings");
  }

  async function redirectContactUs() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(true);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-contact-us");
  }

  async function redirectAboutUs() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(true);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-about-us");
  }

  async function redirectFAQ() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(true);
    setIsUpgradeTo(false);
    setIsLogOut(false);
    navigate("/d-faqs");
  }

  async function redirectUpgradeTo() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(true);
    setIsLogOut(false);
    openPlans();
    // navigate("/");
  }

  async function redirectLogOut() {
    setIsHome(false);
    setIsSearch(false);
    setIsMoves(false);
    setIsHistory(false);
    setIsLikedVideos(false);
    setIsPayments(false);
    setIsSubscriptions(false);
    setIsChat(false);
    setIsNotifications(false);
    setIsSettings(false);
    setIsContactUs(false);
    setIsAboutUs(false);
    setIsFAQ(false);
    setIsUpgradeTo(false);
    setIsLogOut(true);
    navigate("/");
  }

  return (
    <div
      className={`bg-neutral-800 h-[1133px] flex flex-col items-start justify-start py-12 px-6 box-border gap-[24px] ${className}`}
      style={stateUserStyle}
    >
      <img
        className="cursor-pointer hover:opacity-80 w-11 relative h-11 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove2.svg"
        onClick={closeSideBar}
      />
      {/* <div className="flex flex-col items-start justify-start gap-[8px]">
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
          text="Home"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-02.svg"
          text="Search"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidvideotick@2x.png"
          text="Moves"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="12px"
          stateDefaultBackgroundColor="#fff"
          homeColor="#1b1b1b"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicontime-and-dateoutlinetimequarter-past.svg"
          text="History"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/heart-icons.svg"
          text="Liked history"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinecard.svg"
          text="Payments"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinemoney-bagdollar.svg"
          text="Subscriptions"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <MenuTablet text="Chat" rightIcon={false} leftIcon />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicondeviceoutlinenotification-01.svg"
          text="Notifications"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeicondeviceoutlinesetting.svg"
          text="Settings"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall.svg"
          text="Contact us"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation.svg"
          text="About us"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp.svg"
          text="FAQ"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
          text="Upgrade to"
          rightIcon
          leftIcon={false}
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
        <StateDefault1
          hugeIconinterfaceoutlineh="/hugeiconarrowssolidin2@2x.png"
          text="Log out"
          rightIcon={false}
          leftIcon
          stateDefaultBorderRadius="unset"
          stateDefaultBackgroundColor="unset"
          homeColor="#fff"
        />
      </div> */}
      <div className="">
      <>
        {user ? (
          <>
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-041.svg"
              text="Home"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isHome ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isHome ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isHome ? "#1b1b1b" : "#fff"}
              active={isHome}
              onClick={redirectHome}
            />

            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-023.svg"
              text="Search"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isSearch ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isSearch ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isSearch ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectSearch}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-041.svg"
              text="Moves"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isMoves ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isMoves ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isMoves ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectMoves}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeicontime-and-datesolidtimequarter-past1@2x.png"
              text="History"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isHistory ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isHistory ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isHistory ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectHistory}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/heart-icons.svg"
              text="Liked videos"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isLikedVideos ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isLikedVideos ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isLikedVideos ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectLikedVideos}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfacesolidhome-041.svg"
              text="Payments"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isPayments ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isPayments ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isPayments ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectPayments}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinemoney-bagdollar1.svg"
              text="Subscriptions"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isSubscriptions ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isSubscriptions ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isSubscriptions ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectSubscriptions}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/vector-3014.svg"
              text="Chat"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isChat ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isChat ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isChat ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectChat}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeicondeviceoutlinenotification-011.svg"
              text="Notifications"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isNotifications ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isNotifications ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isNotifications ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectNotifications}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeicondeviceoutlinesetting.svg"
              text="Settings"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isSettings ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isSettings ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isSettings ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectSettings}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall1.svg"
              text="Contact us"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isContactUs ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isContactUs ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isContactUs ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectContactUs}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation1.svg"
              text="About us"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isAboutUs ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isAboutUs ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isAboutUs ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectAboutUs}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp1.svg"
              text="FAQ"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isFAQ ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isFAQ ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isFAQ ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectFAQ}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinestar1.svg"
              text="Upgrade to"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isUpgradeTo ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isUpgradeTo ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isUpgradeTo ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectUpgradeTo}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconarrowssolidin2@2x.png"
              text="Log out"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isLogOut ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isLogOut ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isLogOut ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectLogOut}
            />
          </>
        ) : (
          <>
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-041.svg"
              text="Home"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isHome ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isHome ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isHome ? "#1b1b1b" : "#fff"}
              active={isHome}
              onClick={redirectHome}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-023.svg"
              text="Search"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isSearch ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isSearch ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isSearch ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectSearch}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-041.svg"
              text="Moves"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isMoves ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isMoves ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isMoves ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectMoves}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall1.svg"
              text="Contact us"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isContactUs ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isContactUs ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isContactUs ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectContactUs}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation1.svg"
              text="About us"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isAboutUs ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isAboutUs ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isAboutUs ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectAboutUs}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp1.svg"
              text="FAQ"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={isFAQ ? "12px" : "unset"}
              stateDefaultPropertyDesktBackgroundColor={
                isFAQ ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isFAQ ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectFAQ}
            />
            <StateDefaultPropertyDeskto1
              hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinestar1.svg"
              text="Upgrade to"
              rightIcon={false}
              leftIcon
              stateDefaultPropertyDesktBorderRadius={
                isUpgradeTo ? "12px" : "unset"
              }
              stateDefaultPropertyDesktBackgroundColor={
                isUpgradeTo ? "#fff" : "unset"
              }
              stateDefaultPropertyDesktBorder="unset"
              hugeIconinterfaceoutlinehOverflow="hidden"
              homeColor={isUpgradeTo ? "#1b1b1b" : "#fff"}
              active={isActive}
              onClick={redirectUpgradeTo}
            />
          </>
        )}
      </>
      </div>
    </div>
  );
};

export default StateUser;
