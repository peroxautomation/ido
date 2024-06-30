import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import UserPost from "../components/UserPost";
import VariantsSorry from "../components/VariantsSorry";
import DeviceTabletSizeStateFu from "../components/DeviceTabletSizeStateFu";
import DesktopFullScreenMode from "../components/DesktopFullScreenMode";

const allPosts = [
  {
    url: "url('/moves@3x.png')",
  },
  {
    url: "url('/moves@3x.png')",
  },
  {
    url: "url('/moves@3x.png')",
  },
];

const DMoves = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [isZoom, setIsZoom] = useState(false);
  const [isCreate, setIsCreate] = useState(false);


  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Header user={true} />

      <>
        {isZoom ? (
          <>
            <div className="modal_background_tint" />
            <DesktopFullScreenMode
              post={selectedPost}
              deviceTabletSizeStateFuWidth="744px"
              deviceTabletSizeStateFuHeight="100%"
              deviceTabletSizeStateFuBackgroundImage="url('/moves1@3x.png')"
              deviceTabletSizeStateFuPosition="absolute"
              deviceTabletSizeStateFuTop="0px"
              deviceTabletSizeStateFuRight="unset"
              deviceTabletSizeStateFuBottom="0px"
              deviceTabletSizeStateFuLeft="calc(50% - 372px)"
            />
          </>
        ) : (
          <div className="overflow-y-scroll h-full">
            <div className="flex flex-col justify-center items-center">
              {allPosts &&
                allPosts.map((item, i) => (
                  <UserPost
                    key={i}
                    selectedPost={selectedPost}
                    setSelectedPost={setSelectedPost}
                    post={item}
                    isZoom={isZoom}
                    setIsZoom={setIsZoom}
                  />
                ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default DMoves;
