import Title from "../components/mobile/Title";
import ToggleMenu from "../components/mobile/ToggleMenu";

/**
 * Manage push notifications page
 * @returns A JSX element
 */
const PushNotifications = () => {
  /**
   * Switch the toggle between selected and not selected
   * @param {*} event
   */
  const onToggleClick = (event) => {
    const OutterContainer = event.currentTarget;
    const toggleContainer = OutterContainer.children[0].children[1];
    const toggleEllipse = toggleContainer.children[0];

    toggleContainer.classList.toggle("bg-primary-500");
    toggleEllipse.classList.toggle("left-[50%]");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row">
      <Title pageName="Push notifications" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.938rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <ToggleMenu toggle="Pause all" onClick={onToggleClick} />
        <ToggleMenu toggle="Post" onClick={onToggleClick} />
        <ToggleMenu toggle="Comment" onClick={onToggleClick} />
        <ToggleMenu toggle="Messages" onClick={onToggleClick} />
        <ToggleMenu toggle="From Ido" onClick={onToggleClick} />
      </div>
    </div>
  );
};

export default PushNotifications;
