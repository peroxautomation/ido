import Title from "../components/mobile/Title";
import ProfileMenu from "../components/mobile/PaymentMenu";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  // Navigate to push notifications screen
  const onNotificationsClick = () => {
    navigate("/profile/settings/push-notifications");
  };

  // Navigate to privacy screen
  const onPrivacyClick = () => {
    navigate("/profile/settings/privacy");
  };

  // Navigate to change password screen
  const onChangePassClick = () => {
    navigate("/home");
  };

  // Navigate to account control screen
  const onAccountControlClick = () => {
    navigate("/profile/settings/account-control");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="Settings" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] grid grid-flow-row justify-center gap-[1rem]">
        <ProfileMenu
          label="Push notifications"
          onClick={onNotificationsClick}
        />
        <ProfileMenu label="Privacy" onClick={onPrivacyClick} />
        <ProfileMenu label="Change password" onClick={onChangePassClick} />
        <ProfileMenu label="Account control" onClick={onAccountControlClick} />
      </div>
    </div>
  );
};

export default Settings;
