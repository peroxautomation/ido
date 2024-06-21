import VideoCardIcon from "./VideoCardIcon";
import VideoOptionsBtn from "./VideoOptionsBtn";
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileVideoCard2 = (props) => {
  const { current, views, likes, src} = props;
  const onDeleteClick = () => {
    const element = document.getElementById("ProfileDeleteDancePopup");
    element.classList.toggle("hidden");
  };

  // Returned Component
  return (
    <div
      className={`flex-1 relative rounded-xl h-[10rem] bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top] `}
    >
      <ProfileMenuItem
        onClick={onDeleteClick}
        className=""
        saveToPlaylist={`Remove from ${current}`}
        imageSrc="/hugeiconinterfaceoutlinetrash.svg"
      />
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <VideoCardIcon count={views} src="/views-icon.svg" />
        <VideoCardIcon count={likes} src="/heart-icons.svg" />
      </div>
      <VideoOptionsBtn />
    </div>
  );
};

export default ProfileVideoCard2;
