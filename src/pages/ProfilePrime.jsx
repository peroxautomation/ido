import ProfileTop from "../components/mobile/ProfileTop";
import ProfileVideoCard from "../components/mobile/ProfileVideoCard";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import DeletePopup from "../components/mobile/DeletePopup";
import { useState } from "react";
import ProfilePlaylistCard from "../components/mobile/ProfilePlaylistCard";
import ProfileMenu from "../components/mobile/ProfileMenu";
import ProfileVideoMenu from "../components/mobile/ProfileVideoMenu";
import ProfileVideoMenuItem from "../components/mobile/ProfileVideoMenuItem";

/**
 * Profile screen component
 * @returns A JSX element
 */
const ProfilePrime = () => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [currentSegment, setCurrentSegment] = useState("MyDance");
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [playlistPopupActive, setPlaylistPopupActive] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); //The vidoe that has its options clicked
  const [isSideMenuActive, setIsSideMenuActive] = useState(false); //The vidoe that has its options clicked

  const [userData, setUserData] = useState({
    username: "Julia Hilton",
    postsNumber: 32,
    relating: 993,
    profileBio:
      "Get ready to immerse yourself in the world of dance like never before!",
    profilePic: "/ellipse-1168@2x.png",
  });

  const [userDances, setUserDance] = useState([
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
  ]);

  const [useCovers, setUserCovers] = useState([
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
    {
      likes: 54,
      views: 122,
      imgSrc: "card1@3x.png",
    },
  ]);

  const [userPlaylists, setUserPlaylists] = useState([
    {
      imgSrc: "/front@2x.png",
      createdDate: "Apr",
      title: "Want to try",
    },
    {
      imgSrc: "/front@2x.png",
      createdDate: "Apr",
      title: "Want to try",
    },
    {
      imgSrc: "/front@2x.png",
      createdDate: "Apr",
      title: "Want to try",
    },
    {
      imgSrc: "/front@2x.png",
      createdDate: "Apr",
      title: "Want to try",
    },
    {
      imgSrc: "/front@2x.png",
      createdDate: "Apr",
      title: "Want to try",
    },
  ]);

  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */
  /**
   * Update the current segment
   */
  const onSegmentClick = (event) => {
    const elementName = event.currentTarget.getAttribute("name");
    setCurrentSegment(elementName);
  };

  /**
   * Toggle delete popup
   */
  const onDeleteDanceClick = (event) => {
    event.stopPropagation();
    console.log(`deleting playlist with id ${selectedVideo}..`);
    setIsPopupActive(!isPopupActive);
  };

  /**
   * Toggle delete popup
   */
  const onDeletePlaylistClick = (event) => {
    event.stopPropagation();
    console.log(`deleting playlist with id ${selectedVideo}..`);
    setPlaylistPopupActive(!playlistPopupActive);
  };

  /**
   * On edit dance click
   */
  const onEditDanceClick = (event) => {
    event.stopPropagation();
    console.log(`editing dance with id ${selectedVideo}..`);
  };

  /**
   * Delete playlist
   */
  const onYesDelete = () => {
    setIsPopupActive(false);
  };

  /**
   * Cancel delete playlist
   */
  const onNoDelete = () => {
    setIsPopupActive(false);
  };

  /**
   * On yes delete playlist
   */
  const onYesDeletePlaylist = () => {
    setPlaylistPopupActive(false);
  };

  /**
   * on no delete playlist
   */
  const onNoDeletePlaylist = () => {
    setPlaylistPopupActive(false);
  };

  /**************************************************************** */
  /***************************{ Component }************************ */
  /**************************************************************** */
  /**
   *  My dance segment
   * @returns JSX Element
   */
  const MyDance = () => (
    <div className="w-[90%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-y-[0.9rem]">
      {userDances.map((element, index) => (
        <ProfileVideoCard
          key={index}
          likeCount={element.likes}
          imgSrc={element.imgSrc}
          viewCount={element.views}
          videoOptions={
            <ProfileVideoMenu
              onClickOption1={onEditDanceClick}
              onClickOption2={onDeleteDanceClick}
            ></ProfileVideoMenu>
          }
          setSelected={setSelectedVideo}
          videoId={index}
        />
      ))}
    </div>
  );

  /**
   *  Cover segment
   * @returns JSX Element
   */
  const Cover = () => (
    <div className="w-[90%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-y-[0.9rem]">
      {useCovers.map((element, index) => (
        <ProfileVideoCard
          key={index}
          likeCount={element.likes}
          imgSrc={element.imgSrc}
          viewCount={element.views}
          videoOptions={
            <ProfileVideoMenu
              onClickOption1={onEditDanceClick}
              onClickOption2={onDeleteDanceClick}
            ></ProfileVideoMenu>
          }
          setSelected={setSelectedVideo}
          videoId={index}
        />
      ))}
    </div>
  );

  /**
   *  Playlist segment
   * @returns JSX Element
   */
  const Playlist = () => (
    <div className="w-[90%] overflow-hidden shrink-0 grid grid-flow-row items-start justify-items-center gap-[0.937rem]">
      {userPlaylists.map((element, index) => (
        <ProfilePlaylistCard
          key={index}
          imgSrc={element.imgSrc}
          playlistName={element.title}
          createdDate={element.createdDate}
          onOptionsClick={null}
          videoOptions={
            <div className="absolute top-[20%] right-5">
              <ProfileVideoMenuItem
                onClick={onDeletePlaylistClick}
                placeholder="Delete playlist"
                imageSrc="/hugeiconinterfaceoutlinetrash.svg"
              ></ProfileVideoMenuItem>
            </div>
          }
        />
      ))}
    </div>
  );

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
      <div className="absolute w-[100vw] h-[calc(100vh-3.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
        <ProfileTop
          onSegmentClick={onSegmentClick}
          currentSegment={currentSegment}
          username={userData.username}
          postCount={userData.postsNumber}
          relateCount={userData.relating}
          bio={userData.profileBio}
          profilePic={userData.profilePic}
          setMenuActive={setIsSideMenuActive}
          isMenuActive={isSideMenuActive}
        />
        {currentSegment === "MyDance" ? (
          <MyDance />
        ) : currentSegment === "Cover" ? (
          <Cover />
        ) : (
          <Playlist />
        )}
      </div>
      {isPopupActive && (
        <DeletePopup
          message={"Are you sure want to delete dance?"}
          onYesClick={onYesDelete}
          onNoClick={onNoDelete}
        />
      )}
      {playlistPopupActive && (
        <DeletePopup
          message={"Are you sure want to delete playlist?"}
          onYesClick={onYesDeletePlaylist}
          onNoClick={onNoDeletePlaylist}
        />
      )}
      <ButtomNavbar currentPage="Profile" />
      {isSideMenuActive && (
        <ProfileMenu
          setMenuActive={setIsSideMenuActive}
          isMenuActive={isSideMenuActive}
        />
      )}
    </div>
  );
};

export default ProfilePrime;
