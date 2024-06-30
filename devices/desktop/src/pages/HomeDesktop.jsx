import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DeviceTablet from "../components/DeviceTablet";
import SizeDesktopCard from "../components/SizeDesktopCard";
import SizeDesktopGenre from "../components/SizeDesktopGenre";
import Header from "../components/Header";
import VariantsFreeModal from "../components/VariantsFreeModal";

const HomeDesktop = (props) => {
  const { genreList, trendingList, recentlyAddedList } = props;
  const [user, setUser] = useState(true);

  return (
    <>
      <div className="w-screen h-screen relative bg-neutral-900 overflow-hidden">
        <div className="">
          <div className="absolute h-[calc(100%_-_368px)] w-[calc(100%_-_360px)] top-[352px] right-[48px] bottom-[16px] left-[312px] flex flex-col items-start justify-start gap-[40px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <DeviceTablet
                text="Trending now"
                rightBtn
                deviceTabletWidth="unset"
                deviceTabletAlignSelf="stretch"
              />
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
                <>
                  {trendingList &&
                    trendingList.map((item, i) => {
                      // to limit  the number of items that can be displayed in this example only 3 items (index:0-2)
                      if (i <= 3) {
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
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <DeviceTablet
                text="Recently added"
                rightBtn
                deviceTabletWidth="unset"
                deviceTabletAlignSelf="stretch"
              />
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
                <>
                  {recentlyAddedList &&
                    recentlyAddedList.map((item, i) => {
                      // to limit  the number of items that can be displayed in this example only 3 items (index:0-2)
                      if (i <= 3) {
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
          </div>
          <div className="absolute top-[159px] left-[312px] w-[1128px] flex flex-row items-start justify-start gap-[24px]">
            <>
              {genreList &&
                genreList.map((item) => (
                  <>
                    <SizeDesktopGenre
                      genreName={item.title}
                      sizeDesktopGenreWidth="130px"
                      sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
                      // sizeDesktopGenreBackgroundImage={`url(${item?.image})`}
                      // sizeDesktopGenreBackgroundImage={item?.image}
                      sizeDesktopGenrePosition="relative"
                      sizeDesktopGenreTop="unset"
                      sizeDesktopGenreLeft="unset"
                      sizeDesktopGenreHeight="130px"
                      sizeDesktopGenreAlignSelf="unset"
                      sizeDesktopGenreFlex="unset"
                      genreNameLeft="21px"
                    />
                  </>
                ))}
            </>
          </div>
        </div>
        <Header user={user}  />
      </div>
    </>
  );
};

export default HomeDesktop;
