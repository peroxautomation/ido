import ProfileMenuItem1 from "./ProfileMenuItem1";
import ProfileMenuButton from "./ProfileMenuButton";
import PropTypes from "prop-types";
import Exit from "./Exit";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ className = "" }) => {
  const navigate = useNavigate();

  // Close the menu
  const onExitClick = () => {
    document.getElementById('profileMenu').classList.toggle('hidden');
  }

  // Navigate to liked videos
  const onLikedClick = () => {
    navigate('/profile/liked-videos')
  }

  // Navigate to History page
  const onHistoryClick = () => {
    navigate('/profile/history')
  }

  // Navigate to Payment page
  const onPaymentClick = () => {
    navigate('/profile/payments')
  }

  return (
    <div
      id="profileMenu"
      className={`hidden absolute right-[0rem] top-[0rem] bg-neutral-700 h-screen flex flex-col items-end justify-start py-[2.5rem] px-[1.25rem] box-border gap-[1.5rem] text-center text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <Exit onClick={onExitClick}/>
      <div className="flex flex-col items-end justify-start gap-[11.25rem]">
        <div className="flex flex-col items-start justify-start">
          <ProfileMenuItem1 title="Liked videos" onClick={onLikedClick}/>
          <ProfileMenuItem1 title="History" onClick={onHistoryClick}/>
          <ProfileMenuItem1 title="Payments" onClick={onPaymentClick} />
          <ProfileMenuItem1 title="FAQ" />
          <ProfileMenuItem1 title="About us" />
          <ProfileMenuItem1 title="Contact us" />
          <ProfileMenuItem1 title="Settings" />
        </div>
        <ProfileMenuButton />
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  className: PropTypes.string,
};

export default ProfileMenu;
