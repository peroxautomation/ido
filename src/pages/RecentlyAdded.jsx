import Title from "../components/mobile/Title";
import HomeSectionVideoCard from "../components/mobile/HomeSectionVideoCard";
import SaveToPlaylistPopup from "../components/mobile/SaveToPlaylistPopup";
import SaveToPlaylistBtn from "../components/mobile/SaveToPlaylistBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const recentlyAddedData = [
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
  {
    src: "card1@3x.png",
    views: 122,
    likes: 54,
  },
];

/**
 * Recently Added Section Page
 * @returns JSX element
 */
const RecentlyAdded = () => {
  /************************************************************************************ */
  /***************************{Component Variables & States}*************************** */
  /************************************************************************************ */
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null); //Video with its options active
  const navigate = useNavigate()
  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /**************************************************************************** */
  /**
   * Toglle playlist popup
   * @param {*} id
   */
  const togglePlaylistPopup = (event) => {
    event.stopPropagation();
    setIsPopupActive(!isPopupActive);
  };

  /**
   * Handle saving video
   */
  const handleSaveVideo = (event) => {
    event.stopPropagation();
    console.log(`Saving video with id ${selectedId}`);
    setIsPopupActive(false);
  };

  const renderRecentlyAdded = () => {
    return recentlyAddedData.map((element, index) => (
      <HomeSectionVideoCard
        key={index}
        likes={element.likes}
        views={element.views}
        src={element.src}
        setSelected={setSelectedId}
        videoId={index}
        optionsMenu={
          <SaveToPlaylistBtn onClick={togglePlaylistPopup}></SaveToPlaylistBtn>
        }
        onVideoClick={() => {
          navigate("/moves/others/video-123");
        }}
      />
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title pageName="Recently Added" />
      <section className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] h-[calc(100vh_-_7.2rem)] left-[1.25rem] overflow-y-auto grid grid-cols-2 items-start justify-start gap-[1rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold">
        {renderRecentlyAdded()}
      </section>
      {isPopupActive && <SaveToPlaylistPopup handleSave={handleSaveVideo} />}
    </div>
  );
};

export default RecentlyAdded;
