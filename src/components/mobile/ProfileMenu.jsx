import ProfileMenuItem1 from "./ProfileMenuItem1";
import ProfileMenuButton from "./ProfileMenuButton";
import Exit from "./Exit";
import { useNavigate } from "react-router-dom";

/**
 * Popup nav menu for profile screen
 * @returns JSX element
 */
const ProfileMenu = (props) => {
  const { setMenuActive, isMenuActive } = props;
  const navigate = useNavigate();

  /**
   * Navigate to liked videos
   * */
  const onLikedClick = () => {
    navigate("/profile/liked-videos");
  };

  /**
   * Navigate to History page
   * */
  const onHistoryClick = () => {
    navigate("/profile/history");
  };

  /**
   * Navigate to Payment page
   * */
  const onPaymentClick = () => {
    navigate("/profile/payments");
  };

  /**
   * Navigate to settings page
   * */
  const onSettingsClick = () => {
    navigate("/profile/settings");
  };

  /**
   *Navigate to FAQ page
   * */
  const onFaqClick = () => {
    navigate("/profile/faq");
  };

  /**
   * Navigate to Contact us page
   * */
  const onContactUsClick = () => {
    navigate("/profile/contact-us");
  };

  /**
   * Navigate to about us page
   * */
  const onAboutUsClick = () => {
    navigate("/profile/about-us");
  };

  return (
    <div id="profileMenu" className={`profile-menu`}>
      <Exit onClick={() => setMenuActive(false)} />
      <div className="flex flex-col items-end justify-start gap-[11.25rem]">
        <div className="flex flex-col items-start justify-start">
          <ProfileMenuItem1 title="Liked videos" onClick={onLikedClick} />
          <ProfileMenuItem1 title="History" onClick={onHistoryClick} />
          <ProfileMenuItem1 title="Payments" onClick={onPaymentClick} />
          <ProfileMenuItem1 title="FAQ" onClick={onFaqClick} />
          <ProfileMenuItem1 title="About us" onClick={onAboutUsClick} />
          <ProfileMenuItem1 title="Contact us" onClick={onContactUsClick} />
          <ProfileMenuItem1 title="Settings" onClick={onSettingsClick} />
        </div>
        <ProfileMenuButton />
      </div>
    </div>
  );
};
export default ProfileMenu;