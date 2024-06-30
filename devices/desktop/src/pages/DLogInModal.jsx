import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import DeviceTablet from "../components/DeviceTablet";
import SizeDesktopCard from "../components/SizeDesktopCard";
import SizeDesktopGenre from "../components/SizeDesktopGenre";
import Header from "../components/Header";
import ModalWindows3 from "../components/ModalWindows3";

const DLogInModal = () => {
  const [isModal, setIsModal] = useState(false);

  async function returnPage() {
    setIsModal(false);
    setIsReturn(false);
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
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
      <Header user={true} />
      {!isModal && (
        <>
          <div className="modal_background_tint" />
          <ModalWindows3 returnPage={returnPage} />
        </>
      )}
    </div>
  );
};

export default DLogInModal;
