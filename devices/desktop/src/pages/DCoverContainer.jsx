import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SizeDesktopCard from "../components/SizeDesktopCard";

const DCoverContainer = () => {

  const navigate = useNavigate()
  return (
    <div className="absolute w-[calc(100%_-_360px)] top-[470px] right-[48px] left-[312px] h-[252px] flex flex-row items-start justify-start gap-[24px]">
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
  );
};

export default DCoverContainer;
