import PlaylistTitle from "../components/mobile/PlaylistTitle";
import PlaylistEditTitleInput from "../components/mobile/PlaylistEditTitleInput";
import PlaylistDeleteBtn from "../components/mobile/PlaylistDeleteBtn";

const EditPlaylist = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-1-regular">
      <PlaylistTitle />
      <div className="absolute w-screen top-[6.75rem] grid grid-flow-row justify-items-center gap-[1rem]">
        <div className="w-[20.938rem] grid grid-flow-row items-start justify-items-center gap-[1rem]">
          <div className="self-stretch relative rounded-xl h-[11.563rem] overflow-hidden shrink-0 bg-[url('/public/')] bg-cover bg-no-repeat bg-[top]">
            <img className="min-w-[100%] max-h-[100%]" src="/front@2x.png" />
          </div>
          <div className="w-[20.938rem] hidden flex-row items-start justify-center gap-[11rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="relative text-[1.25rem] leading-[1.75rem] font-semibold">
                Want to try
              </div>
              <div className="relative leading-[1.25rem]">
                Sabina Jeyhunzade
              </div>
              <div className="relative leading-[1.25rem] text-neutral-500">
                7 video
              </div>
            </div>
            <div className="rounded-xl bg-white-8 flex flex-row items-start justify-start p-[0.5rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/hugeiconeducationoutlinepencil.svg"
              />
            </div>
          </div>
        </div>
        <PlaylistEditTitleInput />
      </div>
      <PlaylistDeleteBtn />
    </div>
  );
};

export default EditPlaylist;
