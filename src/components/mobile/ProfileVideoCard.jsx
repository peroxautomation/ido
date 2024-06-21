import { useNavigate } from "react-router-dom";
import ProfileVideoMenu from "./ProfileVideoMenu";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";

//TODO: Check the differnece between this and ProfileVideoCard1
const ProfileVideoCard = (props) => {
  const { view = "User", onClick } = props;
  const navigate = useNavigate();
  const onMenuClick = (event) => {
    const element = event.currentTarget.parentElement.children[0];
    element.classList.toggle("hidden");
  };

  return (
    <div
      onClick={() => navigate('/moves/creator-view/:videoId')}
      className={`w-[10rem] relative z-0 rounded-xl h-[10rem] overflow-hidden shrink-0 bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[0.875rem] text-neutral-100 font-button-1-regular `}
    >
      {view === "User" ? <ProfileVideoMenu /> : <SaveToPlaylistBtn />}
      <div className="absolute top-[6.875rem] left-[0rem] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.5))] w-[10rem] h-[3.125rem]" />
      <div className="absolute top-[8.25rem] left-[1.5rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/views-icon.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">122</div>
      </div>
      <div className="absolute top-[8.25rem] left-[6.313rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/heart-icons.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">54</div>
      </div>
      <div
        onClick={onMenuClick}
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.5rem] right-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
      >
        <img
          className="absolute h-[10.42%] w-[52.08%] top-[41.67%] right-[20.83%] bottom-[47.92%] left-[27.08%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/morehorizontal@2x.png"
        />
      </div>
    </div>
  );
};

export default ProfileVideoCard;
