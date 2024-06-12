import Title from "../components/mobile/Title";
import ToggleMenu from "../components/mobile/ToggleMenu";

/**
 * User privacy page
 * @returns A JSX element
 */
const Privacy = () => {
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
      <Title pageName="Privacy" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.938rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <ToggleMenu toggle="Activity status" onClick={onToggleClick} />
      </div>
    </div>
  );
};

export default Privacy;
