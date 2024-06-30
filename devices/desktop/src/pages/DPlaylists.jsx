import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import DeviceTablet1 from "../components/DeviceTablet1";
import SizeDesktopCard from "../components/SizeDesktopCard";
import VariantsEditPlaylist from "../components/VariantsEditPlaylist";
import ModalCard from "../components/ModalCard";

const DPlaylists = () => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditPlaylist, setEditPlaylist] = useState(false);

  async function redirectUser() {
    navigate("/");
  }

  async function openEditPlaylist() {
    setModalOpen(true);
    setEditPlaylist(true);
  }

  async function closeEditPlaylist() {
    setModalOpen(false);
    setEditPlaylist(false);
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <Property1DesktopTitle
        text="Playlists"
        showLayers
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="148px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <DeviceTablet1
        front="/front@2x.png"
        titleText="Want to try"
        creatorText="Sabina Jeyhunzade"
        numOfVideoText="7 video"
        info
        // deviceTabletWidth="calc(100% - 912px)"
        deviceTabletPosition="absolute"
        deviceTabletTop="244px"
        deviceTabletRight="600px"
        deviceTabletLeft="312px"
        deviceTabletBorderRadius="16px"
        deviceTabletBackgroundColor="#1b1b1b"
        deviceTabletHeight="756px"
        deviceTabletPadding="24px 0px"
        frontIconAlignSelf="unset"
        frontIconHeight="375px"
        frontIconWidth="480px"
        infoEditBtnAlignSelf="stretch"
        infoEditBtnWidth="unset"
        infoEditBtnPadding="0px 24px"
        openEditPlaylist={openEditPlaylist}
      />
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="absolute"
        sizeDesktopCardWidth="252px"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="unset"
        sizeDesktopCardTop="244px"
        sizeDesktopCardLeft="864px"
      />
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="absolute"
        sizeDesktopCardWidth="252px"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="unset"
        sizeDesktopCardTop="520px"
        sizeDesktopCardLeft="864px"
      />
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="absolute"
        sizeDesktopCardWidth="252px"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="unset"
        sizeDesktopCardTop="796px"
        sizeDesktopCardLeft="864px"
      />
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="absolute"
        sizeDesktopCardWidth="252px"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="unset"
        sizeDesktopCardTop="244px"
        sizeDesktopCardLeft="1140px"
      />
      <SizeDesktopCard
        likeText="783"
        viewText="1043"
        sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
        sizeDesktopCardPosition="absolute"
        sizeDesktopCardWidth="252px"
        sizeDesktopCardHeight="252px"
        sizeDesktopCardAlignSelf="unset"
        sizeDesktopCardFlex="unset"
        sizeDesktopCardTop="520px"
        sizeDesktopCardLeft="1140px"
      />

      {isEditPlaylist && (
        <ModalCard className={""}>
          <VariantsEditPlaylist
            className={""}
            closeEditPlaylist={closeEditPlaylist}
          />
        </ModalCard>
      )}
    </div>
  );
};

export default DPlaylists;
