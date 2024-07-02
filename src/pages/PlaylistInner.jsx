import Title from "../components/mobile/Title";
import { useState } from "react";
import ProfileVideoCard from "../components/mobile/ProfileVideoCard";
import DeletePopup from "../components/mobile/DeletePopup";
import ProfileVideoMenuItem from "../components/mobile/ProfileVideoMenuItem";
import PlaylistEditTitleInput from "../components/mobile/PlaylistEditTitleInput";
import EditPlaylistTitle from "../components/mobile/EditPlaylistTitle";

const PlaylistInner = () => {
  /********************************************************************* */
  /***************************{ Variables & States }******************** */
  /********************************************************************* */
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [isEditPlaylist, setIsEditPlaylist] = useState(false);
  const [playlistVideos, setPlaylistVideo] = useState([
    {
      id: 0,
      videoImageSrc: "card4@3x.png",
      likes: 122,
      views: 54,
    },
    {
      id: 1,
      videoImageSrc: "card4@3x.png",
      likes: 122,
      views: 54,
    },
    {
      id: 2,
      videoImageSrc: "card4@3x.png",
      likes: 122,
      views: 54,
    },
    {
      id: 3,
      videoImageSrc: "card1@3x.png",
      likes: 122,
      views: 54,
    },
    {
      id: 3,
      videoImageSrc: "card1@3x.png",
      likes: 122,
      views: 54,
    },
  ]);
  const [playlistData, setPlaylistData] = useState({
    id: 0,
    title: "Want to try",
    videoCount: playlistVideos.length,
  });

  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */
  /**
   * On delete playlist click
   */
  const onDeleteClick = (event) => {
    event.stopPropagation();
    console.log(`deleting with id ${videoId}`);
    setIsPopupActive(!isPopupActive);
  };

  /**
   * Dynamic rendering for playlists
   * @returns
   */
  const renderPlaylistVideos = () => {
    return playlistVideos.map((element, index) => (
      <ProfileVideoCard
        key={index}
        likeCount={element.likes}
        imgSrc={element.videoImageSrc}
        viewCount={element.views}
        view="playlist"
        videoOptions={
          <div className="relative top-[20%]">
            <ProfileVideoMenuItem
              onClick={onDeleteClick}
              placeholder="Remove from playlist"
              imageSrc="/hugeiconinterfaceoutlinetrash.svg"
            ></ProfileVideoMenuItem>
          </div>
        }
        setSelected={setVideoId}
        videoId={index}
      />
    ));
  };

  /**
   * On edit playlist click
   */
  const onEditPlaylistClick = () => {
    setIsEditPlaylist(true);
  };

  /**
   * On delete playlist click
   */
  const onYesClick = () => {
    setIsPopupActive(false);
  };
  /**
   * On No click
   */
  const onNoClick = () => {
    setIsPopupActive(false);
  };

  /**
   * Handle rename playlist
   * @param {*} newTitle The new playlist title
   */
  const handleNamePlaylist = (newTitle) => {
    console.log(newTitle);
    setPlaylistData({
      ...playlistData,
      title: newTitle,
    });
  };

  return !isEditPlaylist ? (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[0.875rem] text-neutral-100 flex flex-col justify-items-center overflow-y-scroll items-center">
      <Title pageName="Playlist" />
      <div className="relative w-[90vw] top-[6.75rem] flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch relative rounded-xl h-[11.563rem] overflow-hidden shrink-0 bg-[url('/public/')] bg-cover bg-no-repeat bg-[top]">
          <img className="min-w-[100%] max-h-[100%]" src="/front@2x.png" />
        </div>
        <div className="self-stretch grid grid-flow-col">
          <div className=" col-span-2">
            <div className="relative text-[1.25rem] leading-[1.75rem] font-semibold">
              {playlistData.title}
            </div>
            <div className="relative leading-[1.25rem] text-nowrap">
              Sabina Jeyhunzade
            </div>
            <div className="relative leading-[1.25rem] text-neutral-500">
              {playlistData.videoCount} video
            </div>
          </div>
          <button
            onClick={onEditPlaylistClick}
            className="cursor-pointer [border:none] p-[0.5rem] bg-white-8 rounded-xl flex flex-row items-start justify-self-end self-start place-self-start justify-start"
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/hugeiconeducationoutlinepencil.svg"
            />
          </button>
        </div>
      </div>
      <div className="relative top-[7rem] grid grid-cols-2 items-start justify-items-center gap-[0.937rem] w-[95%] my-4">
        {renderPlaylistVideos()}
      </div>
      {isPopupActive && (
        <DeletePopup
          message={"Are you sure want to delete from playlist?"}
          onYesClick={onYesClick}
          onNoClick={onNoClick}
        ></DeletePopup>
      )}
    </div>
  ) : (
    <EditPlaylist
      setIsEditPlaylist={setIsEditPlaylist}
      setTitle={handleNamePlaylist}
      title={playlistData.title}
    />
  );
};

/**
 * Edit playlist screen
 * @param setIsEditPlaylist Handler to handle if we're in edit state
 * @param setTitle  Set the playlist title
 * @param title The playlist title
 * @returns A JSX element
 */
const EditPlaylist = (props) => {
  /********************************************************************* */
  /***************************{ Variables & States }******************** */
  /********************************************************************* */
  const { setIsEditPlaylist, setTitle, title } = props;
  const [inputValue, setInputValue] = useState("");
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  
  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */
  /**
   * Update the title
   */
  const renameTitle = () => {
    if (inputValue !== "") {
      setTitle(inputValue);
    }
  };

  /**
   * On yes selete click
   */
  const onYesClick = () => {
    setIsDeleteActive(!isDeleteActive);
  };

  /**
   * on no delete click
   */
  const onNoClick = () => {
    setIsDeleteActive(!isDeleteActive);
  };
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-1-regular">
      <EditPlaylistTitle
        setIsEdit={setIsEditPlaylist}
        setTitle={renameTitle}
        setIsDeletePopupActive={setIsDeleteActive}
        isDeletePopupActive={isDeleteActive}
      />
      <div className="absolute w-screen top-[6.75rem] grid grid-flow-row justify-items-center gap-[1rem]">
        <div className="w-[20.938rem] grid grid-flow-row items-start justify-items-center gap-[1rem]">
          <div className="self-stretch relative rounded-xl h-[11.563rem] overflow-hidden shrink-0 bg-[url('/public/')] bg-cover bg-no-repeat bg-[top] w-full">
            <img className="min-w-[100%] max-h-[100%]" src="/front@2x.png" />
          </div>
        </div>
        <PlaylistEditTitleInput
          playlistTitle={inputValue}
          handleSetTitle={setInputValue}
          placeholder={title}
        />
      </div>
      {isDeleteActive && (
        <DeletePopup
          message={"Are you sure want to delete playlist?"}
          onYesClick={onYesClick}
          onNoClick={onNoClick}
        ></DeletePopup>
      )}
    </div>
  );
};

export default PlaylistInner;
