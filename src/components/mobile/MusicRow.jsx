import MusicInfo from "./MusicInfo";
import PlayMusicBtn from "./PlayMusicBtn";

const MusicRow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`w-[100%] flex flex-row items-center justify-between py-[0.75rem] px-[1.25rem] box-border `}
    >
      <MusicInfo imgSrc="/rectangle-2002@2x.png" />
      <PlayMusicBtn />
    </div>
  );
};

export default MusicRow;
