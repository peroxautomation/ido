/**
 * Music information component
 * @param {*} imgSrc The music cover image
 * @param {*} name The name of the music
 * @param {*} artist The music's artist
 * @returns
 */
const MusicInfo = (props) => {
  const { imgSrc, name, artist, id, onMusicSelect } = props;
  return (
    <div onClick={() => onMusicSelect(id)} className={`select-music-info`}>
      <img
        className="w-[3rem] relative rounded-lg h-[3rem] object-cover"
        alt=""
        src={imgSrc}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[1.5rem] font-semibold">
          {name}
        </div>
        <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
          {artist}
        </div>
      </div>
    </div>
  );
};

export default MusicInfo;
