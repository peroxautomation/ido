import { useState } from "react";
import AddToPlaylistTitle from "./AddToPlaylistTitle";
import CheckboxContainer1 from "./CheckboxContainer1";
import PrimaryButton from "./PrimaryButton";

/**
 * Save to playlist popup
 * @param {*} videoId The id of the video to save
 * @returns
 */
const SaveToPlaylistPopup = (props) => {
  const { videoId } = props;
  const [checkedPlaylists, setCheckedPlaylist] = useState([]);

  const playlistNames = ["Ballet dances", "Contemporary challenges",  "hip-hop challenges", "hip-hop challenges",];

  /**
   * Handle saving video to playlist
   * @param {*} isAdd flag if the video is to be added or removed
   * @param {*} option the video to save
   * TODO: Change to filter by playlist id instead of name
   */
  const handleCheckPlaylist = (isAdd, option) => {
    if (isAdd) {
      setCheckedPlaylist([...checkedPlaylists, option]);
    } else {
      setCheckedPlaylist(checkedPlaylists.filter((o) => o !== option));
    }
  };

  /**
   * Render user's playlists
   * @returns An array of JSX element
   */
  const renderPlaylists = () => {
    return playlistNames.map((element, index) => (
      <CheckboxContainer1
        option1={element}
        key={index}
        handleCheck={handleCheckPlaylist}
        className="relative !bg-transparent !w-full !font-normal"
      />
    ));
  };

  /**
   * On save click
   */
  const onSaveClick = () => {
    //TODO: Save video to checkedPlaylists
    const popup = document.getElementById("saveToPlaylistPopup");
    popup.classList.toggle("hidden");
  };

  /**
   * Is the button active
   * @returns False if the button is active, else true.
   */
  const isActive = () => {
    if (checkedPlaylists.length == 0) return false;
    else return true;
  };

  return (
    <div
      id="saveToPlaylistPopup"
      className={`hidden save-to-playlist-popup`}
    >
      <AddToPlaylistTitle />
      <div className="h-[52%] overflow-y-auto grid grid-cols-1 w-full">
        {renderPlaylists()}
      </div>
      <div className="absolute bottom-0 w-[90%]">
        <PrimaryButton
          cTA="save"
          isActive={isActive()}
          onCTAClick={onSaveClick}
        />
      </div>
    </div>
  );
};

export default SaveToPlaylistPopup;
