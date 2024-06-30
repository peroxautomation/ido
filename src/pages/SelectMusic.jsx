import SearchInput from "../components/mobile/SearchInput";
import MusicRow from "../components/mobile/MusicRow";
import Title from "../components/mobile/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const SelectMusic = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const { flow } = useParams();
  const [selectedMusic, setSelectedMusic] = useState("");
  const [musicData, setMusicData] = useState([
    {
      id: 1,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 2,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 3,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 4,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 5,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 6,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 7,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 8,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
    {
      id: 9,
      musicImage: "/rectangle-2002@2x.png",
      musicName: "Music name",
      artistName: "Signer name",
      isPlaying: false,
    },
  ]);
  const [searchValue, setSearchValue] = useState("");

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to the next page
   */
  const onMusicClick = (id) => {
    const selected = musicData.find((m) => m.id == id);
    setSelectedMusic(selected);
    navigate(`/create/${flow}/add-music-timeline`, { state: { flow: flow } });
  };

  /**
   * Handle play music
   * @param {*} id
   */
  const onMusicPlay = (id) => {
    const newArray = musicData.map((element) => {
      if (element.id == id) {
        element.isPlaying = !element.isPlaying;
      }
      return element;
    });
    setMusicData(newArray);
  };

  /**
   * Render music
   */
  const renderMusic = () => {
    return musicData.map((element, index) => (
      <MusicRow
        onMusicSelect={onMusicClick}
        id={element.id}
        musicImage={element.musicImage}
        musicName={element.musicName}
        artistName={element.artistName}
        isPlaying={element.isPlaying}
        onPlayClick={onMusicPlay}
        key={index}
      />
    ));
  };

  return (
    <div className="w-screen relative bg-neutral-100 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <img
        className="top-0 left-0 absolute h-screen"
        alt=""
        src="/devicemobile.svg"
      />
      <Title className="" pageName="Add Music" />
      <SearchInput value={searchValue} handleValue={setSearchValue} />
      <div className="relative top-[7vh] w-[90vw] h-[75vh] overflow-y-scroll overflow-x-hidden flex flex-col items-start justify-start">
        {renderMusic()}
      </div>
    </div>
  );
};

export default SelectMusic;
