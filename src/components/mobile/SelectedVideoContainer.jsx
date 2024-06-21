import PlayButton from "./PlayButton";
import CoverBtn from "./CoverBtn";

const SelectedVideoContainer = (props) => {
  const { ctaClick } = props;
  return (
    <div
      className={`absolute top-[calc(50%_-_225.5px)] left-[calc(50%_-_167.5px)] rounded-2xl w-[20.938rem] h-[20.938rem] overflow-hidden bg-[url('/public/choosingvideocontainer@2x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 font-overline-semibold `}
    >
      <PlayButton />
      <div className="absolute bottom-8 left-[1.25rem] right-[2.5rem]">
        <CoverBtn cta="Edit cover" ctaClick={ctaClick} />
      </div>
    </div>
  );
};

export default SelectedVideoContainer;
