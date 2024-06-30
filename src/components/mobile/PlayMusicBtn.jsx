/**
 * Play music button
 * @param isPlay Boolen flag to check if the music is currently being played
 * @param onClick
 * @param musicId
 * @returns
 */
const PlayMusicBtn = (props) => {
  const { isPlay, onClick, musicId } = props;
  return !isPlay ? (
    <img
      onClick={() => onClick(musicId)}
      className={`w-[2rem] relative h-[2rem] overflow-hidden shrink-0 `}
      alt=""
      src="/hugeiconmultimedia-and-audiooutlineplay.svg"
    />
  ) : (
    <img
      onClick={() => onClick(musicId)}
      className={`w-[2rem] relative h-[2rem] overflow-hidden shrink-0 `}
      alt=""
      src="/pauseMusic.svg"
    />
  );
};
export default PlayMusicBtn;
