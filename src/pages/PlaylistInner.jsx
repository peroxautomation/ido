import Title from "../components/mobile/Title";
import PlaylistVideoCard from "../components/mobile/PlaylistVideoCard";
import { useNavigate } from "react-router-dom";

const PlaylistInner = () => {
  const navigate = useNavigate();

  const EditPlaylist = () => {
    navigate("/profile/playlist-edit");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-1-regular">
      <Title pageName="Playlist" />
      <div className="relative w-[90vw] top-[6.75rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch relative rounded-xl h-[11.563rem] overflow-hidden shrink-0 bg-[url('/public/')] bg-cover bg-no-repeat bg-[top]">
          <img className="min-w-[100%] max-h-[100%]" src="/front@2x.png" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[11rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative text-[1.25rem] leading-[1.75rem] font-semibold">
              Want to try
            </div>
            <div className="relative leading-[1.25rem]">Sabina Jeyhunzade</div>
            <div className="relative leading-[1.25rem] text-neutral-500">
              7 video
            </div>
          </div>
          <button
            onClick={EditPlaylist}
            className="cursor-pointer [border:none] p-[0.5rem] bg-white-8 rounded-xl flex flex-row items-start justify-start"
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/hugeiconeducationoutlinepencil.svg"
            />
          </button>
        </div>
      </div>
      <div className="absolute top-[25.063rem] left-[1.25rem] flex flex-row items-start justify-start gap-[0.937rem]">
        <PlaylistVideoCard />
        <PlaylistVideoCard cardBackgroundImage="url('/card1@3x.png')" />
      </div>
    </div>
  );
};

export default PlaylistInner;
