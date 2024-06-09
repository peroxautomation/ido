import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProfilePlaylistCard = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSectionClick = () => {
    navigate('/profile/playlist');
  }

  return (
    <div
      onClick={onSectionClick}
      className={`w-[20.938rem] flex flex-row items-start justify-start py-[1rem] px-[0rem] box-border gap-[0.937rem] text-left text-[0.875rem] text-neutral-500 font-button-1-regular ${className}`}
    >
      <img
        className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[6.25rem] object-cover"
        alt=""
        src="/front@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="relative text-[1rem] leading-[1.5rem] text-neutral-100">
          Want to try
        </div>
        <div className="relative leading-[1.25rem]">Playlist</div>
        <div className="relative leading-[1.25rem]">Created - Apr</div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-[52.08%] w-[10.42%] top-[20.83%] right-[47.92%] bottom-[27.08%] left-[41.67%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/more--vertical@2x.png"
        />
      </button>
    </div>
  );
};

ProfilePlaylistCard.propTypes = {
  className: PropTypes.string,
};

export default ProfilePlaylistCard;
