import ProfileTop from "../components/mobile/ProfileTop";
import ProfileVideoCard from "../components/mobile/ProfileVideoCard";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import DeletePopup from "../components/mobile/DeletePopup";
import { useState } from "react";
import ProfilePlaylistCard from "../components/mobile/ProfilePlaylistCard";
import ProfileMenu from "../components/mobile/ProfileMenu";

/**
 * Profile screen component
 * @returns A JSX element
 */
const ProfilePrime = () => {
  let [currentSegment, setCurrentSegment] = useState("MyDance");
  const userDance = [
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
    { data: "danceData" },
  ];

  const coverData = [
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "coverData" },
    { data: "danceData" },
  ];

  const playlistData = [
    { data: "playlistData" },
    { data: "playlistData" },
    { data: "playlistData" },
  ];

  /**
   *  My dance segment
   * @returns JSX Element
   */
  const MyDance = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-y-[0.9rem]">
      {userDance.map((element, index) => (
        <ProfileVideoCard key={index}  />
      ))}
    </div>
  );

  /**
   *  Cover segment
   * @returns JSX Element
   */
  const Cover = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-y-[0.9rem]">
      {coverData.map((element, index) => (
        <ProfileVideoCard key={index} />
      ))}
    </div>
  );

  /**
   *  Playlist segment
   * @returns JSX Element
   */
  const Playlist = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-flow-row items-start justify-items-center gap-[0.937rem]">
      {playlistData.map((element, index) => (
        <ProfilePlaylistCard key={index} />
      ))}
    </div>
  );

  /**
   * Event listener for profile segment buttons
   */
  const onSegmentClick = (event) => {
    const elementName = event.currentTarget.getAttribute("name");
    setCurrentSegment(elementName);
  };

  // Conditional return
  if (currentSegment === "MyDance") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] h-[calc(100vh-3.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <MyDance />
        </div>
        <DeletePopup message={"Are you sure want to delete dance?"} />
        <ButtomNavbar currentPage="Profile" />
        <ProfileMenu />
      </div>
    );
  } else if (currentSegment === "Cover") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] h-[calc(100vh-3.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <Cover />
        </div>
        <DeletePopup message={"Are you sure want to delete dance?"} />
        <ButtomNavbar currentPage="Profile" />
        <ProfileMenu />
      </div>
    );
  } else if (currentSegment === "Playlist") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] h-[calc(100vh-3.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <Playlist />
        </div>
        <ButtomNavbar currentPage="Profile" />
        <ProfileMenu />
      </div>
    );
  }
};

export default ProfilePrime;
