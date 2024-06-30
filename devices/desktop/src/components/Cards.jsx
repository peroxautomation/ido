import SizeDesktopCard from "./SizeDesktopCard";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const Cards = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_360px)] top-[244px] right-[48px] left-[312px] flex flex-row items-start justify-start gap-[24px] ${className}`}
    >
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="relative"
        sizeDesktopCardWidth="unset"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
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
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
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
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
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
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="1"
        sizeDesktopCardTop="unset"
        sizeDesktopCardLeft="unset"
      />
      <MenuItem
        text="Delete from history"
        hugeIconecommerceoutlineb="/hugeiconinterfaceoutlinetrash1.svg"
        menuItemPosition="absolute"
        menuItemTop="56px"
        menuItemLeft="unset"
        menuItemRight="836px"
        menuItemMargin="0 !important"
      />
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
};

export default Cards;
