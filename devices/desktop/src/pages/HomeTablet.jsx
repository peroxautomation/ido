import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import GenresTitleCategory from "../components/GenresTitleCategory";
import DeviceTablet from "../components/DeviceTablet";
import SizeDesktopCard from "../components/SizeDesktopCard";
import StateUser from "../components/StateUser";
import VariantsFreeModalTablet from "../components/VariantsFreeModalTablet";
import Header from "../components/Header";
import TitleTablet from "../components/TitleTablet";
import Card from "../components/Card";

const HomeTablet = (props) => {
  const { genreList, trendingList, recentlyAddedList } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isHome, setHome] = useState(true);
  const [isTrendingNowOpen, setTrendingNowOpen] = useState(false);
  const [isRecentlyAddedOpen, setRecentlyAddedOpen] = useState(false);

  const [isSubscriptionOpen, setSubscriptionOpen] = useState(false);
  const [user, setUser] = useState(true);

  const navigate = useNavigate();

  async function openSideBar() {
    setModalOpen(true);
    setSideBarOpen(true);
  }

  async function closeSideBar() {
    setModalOpen(false);
    setSideBarOpen(false);
  }

  async function openPlans() {
    setModalOpen(true);
    setSubscriptionOpen(true);
  }

  async function closePlans() {
    setModalOpen(false);
    setSubscriptionOpen(false);
  }

  async function openTrendingNow() {
    // navigate("/trending-now");
    setHome(false);
    setTrendingNowOpen(true);
    setRecentlyAddedOpen(false);
  }

  async function closeTrendingNow() {
    setHome(true);
    setTrendingNowOpen(false);
    setRecentlyAddedOpen(false);
  }

  async function openRecentlyAdded() {
    // navigate("/recently-added");

    setHome(false);
    setTrendingNowOpen(true);
    setRecentlyAddedOpen(false);
  }

  async function closeRecentlyAdded() {
    setHome(true);
    setTrendingNowOpen(false);
    setRecentlyAddedOpen(false);
  }

  return (
    <div className="w-screen relative bg-neutral-900 h-screen overflow-hidden">
      {isHome && (
        <div className="absolute top-[140px] left-[24px] flex flex-col items-start justify-start gap-[40px]">
          <>
            <GenresTitleCategory genreList={genreList} />
            <div className="flex flex-col items-start justify-start">
              <DeviceTablet
                text="Trending now"
                rightBtn
                deviceTabletWidth="696px"
                deviceTabletAlignSelf="unset"
                onClick={openTrendingNow}
              />
              <div className="w-[728px] overflow-x-auto flex flex-row items-start justify-start gap-[16px]">
                <>
                  {trendingList &&
                    trendingList.map((item, i) => {
                      // to limit  the number of items that can be displayed in this example only 3 items (index:0-2)
                      if (i <= 2) {
                        return (
                          <>
                            <SizeDesktopCard
                              key={i}
                              likeText={item.likes}
                              viewText={item.views}
                              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
                            />
                          </>
                        );
                      }
                    })}
                </>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[13px]">
              <DeviceTablet
                text="Recently added"
                rightBtn
                deviceTabletWidth="696px"
                deviceTabletAlignSelf="unset"
                onClick={openRecentlyAdded}
              />
              <div className="w-[720px] overflow-x-auto flex flex-row items-start justify-start gap-[16px]">
                <>
                  {recentlyAddedList &&
                    recentlyAddedList.map((item, i) => {
                      // to limit  the number of items that can be displayed in this example only 3 items (index:0-2)
                      if (i <= 2) {
                        return (
                          <>
                            <SizeDesktopCard
                              key={i}
                              likeText={item.likes}
                              viewText={item.views}
                              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
                            />
                          </>
                        );
                      }
                    })}
                </>
              </div>
            </div>
          </>
        </div>
      )}

      {isTrendingNowOpen && (
        <>
          <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
            <TitleTablet
              titleOfPage="Trending now"
              hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
              showTitleOfPage
              hugeIconarrowssoliddirectTop="140px"
              hugeIconarrowssoliddirectWidth="unset"
              propOpacity="0"
              returnToPrevious={closeTrendingNow}
            />

            <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[236px] right-[24px] bottom-[735px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
              {trendingList &&
                trendingList.map((item, i) => (
                  <>
                    <Card
                      key={i}
                      likeText={item.likes}
                      viewText={item.views}
                      sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
                    />
                  </>
                ))}
            </div>
          </div>
        </>
      )}

      {isRecentlyAddedOpen && (
        <>
          <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
            <TitleTablet
              titleOfPage="Recently added"
              hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
              showTitleOfPage
              hugeIconarrowssoliddirectTop="140px"
              hugeIconarrowssoliddirectWidth="unset"
              propOpacity="0"
              returnToPrevious={closeRecentlyAdded}
            />
            <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[236px] right-[24px] bottom-[735px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
              {recentlyAddedList &&
                recentlyAddedList.map((item, i) => (
                  <>
                    <Card
                      key={i}
                      likeText={item.likes}
                      viewText={item.views}
                      sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
                    />
                  </>
                ))}
            </div>
          </div>
        </>
      )}
      <Header openSideBar={openSideBar} user={user} />
    </div>
  );
};

export default HomeTablet;
