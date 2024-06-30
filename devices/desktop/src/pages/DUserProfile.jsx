import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import UserInfoBtnBio1 from "../components/UserInfoBtnBio1";
import UserInfoBtnBio from "../components/UserInfoBtnBio";
import StateOf3CoverColumn3 from "../components/StateOf3CoverColumn3";
import StateWithStrokeSizeSmall from "../components/StateWithStrokeSizeSmall";
import DPlaylistContainer from "./DPlaylistContainer";
import DMyDanceContainer from "./DMyDanceContainer";
import DCoverContainer from "./DCoverContainer";
import VariantsEditProfile from "../components/VariantsEditProfile";
import ModalCard from "../components/ModalCard";
import VariantsCard from "../components/VariantsCard";
import VariantsRelating from "../components/VariantsRelating";

const DUserProfile = () => {
  const [isMyDance, setIsMyDance] = useState(true); // default selection
  const [isCover, setIsCover] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isRelating, setIsRelating] = useState(false);
  const [isModal, setIsModal] = useState(false);

  async function openMyDance() {
    setIsMyDance(true);
    setIsCover(false);
    setIsPlaylist(false);
  }

  async function openCover() {
    setIsMyDance(false);
    setIsCover(true);
    setIsPlaylist(false);
  }

  async function openPlaylist() {
    setIsMyDance(false);
    setIsCover(false);
    setIsPlaylist(true);
  }

  async function openEditProfile() {
    setIsModal(true);
    setIsEditProfile(true);
    setIsRelating(false);
  }

  async function closeEditProfile() {
    setIsModal(false);
    setIsEditProfile(false);
    setIsRelating(false);
  }

  async function openModalRelating() {
    setIsModal(true);
    setIsEditProfile(false);
    setIsRelating(true);
  }

  async function closeModalRelating() {
    setIsModal(false);
    setIsEditProfile(false);
    setIsRelating(false);
  }

  return (
    <>
      <div className="w-screen relative bg-neutral-900 h-screen overflow-hidden">
        <Header user={true} />
        <UserInfoBtnBio1
          isUser={isUser}
          openEditProfile={openEditProfile}
          openModalRelating={openModalRelating}
        />
        <StateOf3CoverColumn3
          myDance="My dance"
          hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-2.svg"
          cover="Cover"
          playlist="Playlist"
          showHugeIconarrowssoliddirect
          stateOf3CoverColumn33Width="calc(100% - 360px)"
          stateOf3CoverColumn33Position="absolute"
          stateOf3CoverColumn33Top="398px"
          stateOf3CoverColumn33Right="48px"
          stateOf3CoverColumn33Left="312px"
          divBackgroundColor={isMyDance ? "#252525" : "unset"}
          myDanceColor={isMyDance ? "#fff" : "#6c6c6c"}
          myDanceFontWeight="600"
          divBackgroundColor1={isCover ? "#252525" : "unset"}
          coverFontWeight="unset"
          coverColor={isCover ? "#fff" : "#6c6c6c"}
          divBackgroundColor2={isPlaylist ? "#252525" : "unset"}
          playlistColor={isPlaylist ? "#fff" : "#6c6c6c"}
          playlistFontWeight="unset"
          openMyDance={openMyDance}
          openCover={openCover}
          openPlaylist={openPlaylist}
        />

        {isMyDance && (
          <>
            <DMyDanceContainer />
          </>
        )}

        {isCover && (
          <>
            <DCoverContainer />
          </>
        )}

        {isPlaylist && (
          <>
            <DPlaylistContainer />
          </>
        )}

        <div className="absolute top-[87px] left-[971px] rounded-2xl w-[252px] overflow-hidden flex flex-col items-start justify-start">
          <StateWithStrokeSizeSmall
            hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
            hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
            text="Challenge"
            icon={false}
            stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
            stateWithStrokeSizeSmallAlignSelf="stretch"
            stateWithStrokeSizeSmallWidth="unset"
            hugeIcontimeAndDatesolidOverflow="hidden"
            allTextDecoration="unset"
          />
          <StateWithStrokeSizeSmall
            hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
            hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
            text="Cover"
            icon={false}
            stateWithStrokeSizeSmallBorderBottom="unset"
            stateWithStrokeSizeSmallAlignSelf="stretch"
            stateWithStrokeSizeSmallWidth="unset"
            hugeIcontimeAndDatesolidOverflow="hidden"
            allTextDecoration="none"
          />
        </div>

        {isModal && (
          <ModalCard className={""}>
            <>
              {isEditProfile && (
                <VariantsEditProfile
                  ellipse1255="/ellipse-1255@2x.png"
                  hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation2.svg"
                  input="Sabina Jeyhunzade"
                  hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
                  phinfoLight="/phinfolight.svg"
                  hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
                  variantsEditProfileWidth="416px"
                  variantsEditProfileHeight="456px"
                  variantsEditProfilePosition="absolute"
                  variantsEditProfileTop="calc(50% - 228px)"
                  variantsEditProfileRight="unset"
                  variantsEditProfileBottom="unset"
                  variantsEditProfileLeft="calc(50% - 208px)"
                  closeModal={closeEditProfile}
                />
              )}
              {isRelating && (
                <VariantsRelating
                  rectangle2002="/rectangle-20021@2x.png"
                  rectangle20021="/rectangle-20021@2x.png"
                  rectangle20022="/rectangle-20021@2x.png"
                  rectangle20023="/rectangle-20021@2x.png"
                  rectangle20024="/rectangle-20021@2x.png"
                  variantsRelatingPosition="absolute"
                  variantsRelatingTop="calc(50% - 228px)"
                  variantsRelatingLeft="calc(50% - 208px)"
                  closeModal={closeModalRelating}
                />
              )}
            </>
          </ModalCard>
        )}
      </div>
    </>
  );
};

export default DUserProfile;
