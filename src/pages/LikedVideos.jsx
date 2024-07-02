import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";
import ProfileVideoMenuItem from "../components/mobile/ProfileVideoMenuItem";
import ProfileVideoCard from "../components/mobile/ProfileVideoCard";
import { useState } from "react";

/**
 * Trending Now Section Page
 * @returns JSX element
 */
const LikedVideos = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [isRemovePopupActive, setIsRemovePopupActive] = useState(false);
  const [videoId, setSelected] = useState(null);
  const likedVideosData = [
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
    {
      videoImageSrc: "card1@3x.png",
      views: 122,
      likes: 54,
    },
  ];

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * On remove video click
   * @param {*} event 
   */
  const onRemoveClick = (event) => {
    event.stopPropagation();
    console.log(`deleting with id ${videoId}`);
    setIsRemovePopupActive(!isRemovePopupActive);
  };

  /**
   * On yes remove video
   * @param {*} event 
   */
  const onYesClick = (event) => {
    event.stopPropagation();

    setIsRemovePopupActive(false);
  };

  /**
   * On no remove video
   * @param {*} event 
   */
  const onNoClick = (event) => {
    event.stopPropagation();
    setIsRemovePopupActive(false);
  };

  /**
   * Render liked videos
   * @returns 
   */
  const renderLikedVideos = () => {
    return likedVideosData.map((element, index) => (
      <ProfileVideoCard
        key={index}
        likeCount={element.likes}
        imgSrc={element.videoImageSrc}
        viewCount={element.views}
        view="playlist"
        videoOptions={
          <div className="relative top-[20%] right-[5%] w-[11rem]">
            <ProfileVideoMenuItem
              onClick={onRemoveClick}
              placeholder="Remove from playlist"
              imageSrc="/hugeiconinterfaceoutlinetrash.svg"
            ></ProfileVideoMenuItem>
          </div>
        }
        setSelected={setSelected}
        videoId={index}
      />
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden grid grid-flow-row justify-items-center">
      <img
        className="absolute bottom-[0rem] left-[0rem] w-[23.438rem] h-[full] overflow-hidden hidden"
        alt=""
        src="/devicemobile.svg"
      />
      <Title pageName="Liked videos" />
      <section className="relative w-[calc(100%_-_20px)] top-[6.75rem] h-[calc(100vh_-_7.2rem)] overflow-y-auto grid grid-cols-2 justify-items-center gap-y-[1rem] text-left text-[0.875rem] text-neutral-100 overflow-x-hidden">
        {renderLikedVideos()}
        {isRemovePopupActive && (
          <DeletePopup
            message={"Are you sure want to remove from liked?"}
            onYesClick={onYesClick}
            onNoClick={onNoClick}
          />
        )}
      </section>
    </div>
  );
};

export default LikedVideos;
