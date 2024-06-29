import MusicInfo from "./MusicInfo";
import PlayMusicBtn from "./PlayMusicBtn";
/**
 * Music box row
 * @param {*} props
 * @returns
 */
const MusicRow = (props) => {
  const {
    onMusicSelect,
    id,
    musicImage,
    musicName,
    artistName,
    isPlaying,
    onPlayClick,
  } = props;
  return (
    <div className={`select-music-row`}>
      <MusicInfo
        imgSrc={musicImage}
        name={musicName}
        artist={artistName}
        id={id}
        onMusicSelect={onMusicSelect}
      />
      <PlayMusicBtn isPlay={isPlaying} onClick={onPlayClick} musicId={id} />
    </div>
  );
};

export default MusicRow;
