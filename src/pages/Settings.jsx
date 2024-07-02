import Title from "../components/mobile/Title";
import ProfileMenuItem2 from "../components/mobile/ProfileMenuItem2";
import { useNavigate } from "react-router-dom";

/**
 * Profile settings screen
 * @returns A JSX element
 */
const Settings = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to push notifications screen
   */
  const onNotificationsClick = () => {
    navigate("/profile/settings/push-notifications");
  };

  /**
   *  Navigate to privacy screen
   */
  const onPrivacyClick = () => {
    navigate("/profile/settings/privacy");
  };

  /**
   * Navigate to change password screen
   */
  const onChangePassClick = () => {
    navigate("/profile/settings/update-password");
  };

  /**
   * Navigate to account control screen
   */
  const onAccountControlClick = () => {
    navigate("/profile/settings/account-control");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="Settings" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] grid grid-flow-row justify-center gap-[1rem]">
        <ProfileMenuItem2
          label="Push notifications"
          onClick={onNotificationsClick}
        />
        <ProfileMenuItem2 label="Privacy" onClick={onPrivacyClick} />
        <ProfileMenuItem2 label="Change password" onClick={onChangePassClick} />
        <ProfileMenuItem2 label="Account control" onClick={onAccountControlClick} />
      </div>
    </div>
  );
};

export default Settings;
