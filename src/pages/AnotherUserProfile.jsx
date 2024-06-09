import ProfileTop from "../components/mobile/ProfileTop";
import ProfileVideoCard from "../components/mobile/ProfileVideoCard";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import { useState } from "react";
import ProfilePlaylistCard from "../components/mobile/ProfilePlaylistCard";
import SaveToPlaylistBtn from "../components/mobile/SaveToPlaylistBtn";

const AnotherUserProfile = () => {
  let [currentSegment, setCurrentSegment] = useState("MyDance");

  // My Dance segment
  const MyDance = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-[0.937rem]">
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"}/>
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
    </div>
  );
  // Cover segment
  const Cover = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-cols-2 items-start justify-items-center gap-[0.937rem]">
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"} />
      <ProfileVideoCard view={"Other"}/>
      <ProfileVideoCard view={"Other"}/>
      <ProfileVideoCard view={"Other"}/>
      <ProfileVideoCard view={"Other"}/>
      <ProfileVideoCard view={"Other"} />
    </div>
  );

  // Playlist segment
  const Playlist = () => (
    <div className="w-[100%] overflow-hidden shrink-0 grid grid-flow-row items-start justify-items-center gap-[0.937rem]">
      <ProfilePlaylistCard />
      <ProfilePlaylistCard />
      <ProfilePlaylistCard />
      <ProfilePlaylistCard />
    </div>
  );

  // Change the currentSegment to My Dance, Cover or Playlist
  const onSegmentClick = (event) => {
    const elementName = event.currentTarget.getAttribute("name");
    setCurrentSegment(elementName);
  };

  if (currentSegment === "MyDance") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] top-[3.938rem] h-[calc(100vh-7.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            view="Other"
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <MyDance />
        </div>
        <SaveToPlaylistBtn />
        <ButtomNavbar />
      </div>
    );
  } else if (currentSegment === "Cover") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] top-[3.938rem] h-[calc(100vh-7.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            view="Other"
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <Cover />
        </div>
        <SaveToPlaylistBtn />
        <ButtomNavbar />
      </div>
    );
  } else if (currentSegment === "Playlist") {
    return (
      <div className="w-full fixed bg-neutral-900 h-screen overflow-y-auto">
        <div className="absolute w-[100vw] top-[3.938rem] h-[calc(100vh-7.7rem)] overflow-y-auto flex flex-col items-center gap-[1.5rem]">
          <ProfileTop
            view="Other"
            onSegmentClick={onSegmentClick}
            currentSegment={currentSegment}
          />
          <Playlist />
        </div>
        <SaveToPlaylistBtn />
        <ButtomNavbar />
      </div>
    );
  }
    
};

export default AnotherUserProfile;
