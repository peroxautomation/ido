import PropTypes from "prop-types";

const MAppFeatures = () => {
  return (
    <div
      className={`absolute top-[156px] left-[calc(50%_-_168px)] flex flex-col items-start justify-start gap-[24px] text-left text-5xl text-neutral-100 font-button-2-regular`}
    >
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">
            Discover danceApp's
          </div>
          <div className="self-stretch relative text-base leading-[24px]">
            Discover DanceApp's features designed to enhance your dance
            experience
          </div>
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">Chatting</div>
          <div className="self-stretch relative text-base leading-[24px]">
            Stay connected with fellow dancers through our built-in chatting
            feature.
          </div>
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">
            Save and favorite
          </div>
          <div className="self-stretch relative text-base leading-[24px]">
            Save your favorite dance videos to your personal collection for easy
            access later.
          </div>
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">
            Custom playlists
          </div>
          <div className="self-stretch relative text-base leading-[24px]">
            Organize your favorite tutorials, performances, and practice
            sessions into personalized playlists.
          </div>
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">Donations</div>
          <div className="self-stretch relative text-base leading-[24px]">
            Support your favorite dancers and creators with our Donations
            feature.
          </div>
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start p-6 box-border gap-[8px]">
        <div className="flex flex-row items-start justify-start py-1 px-0">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidclapperboard@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[32px] font-semibold">
            Сomparison
          </div>
          <div className="self-stretch relative text-base leading-[24px]">
            Upload your dance video and compare it side-by-side with videos of
            professional dancers or your previous performances.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAppFeatures;
