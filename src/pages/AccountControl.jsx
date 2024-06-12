import Button4 from "../components/mobile/Button4";
import Title from "../components/mobile/Title";

/**
 * Delete Account page
 * @returns A JSX element
 */
const AccountControl = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title
        pageName="Account control"
      />
      <Button4
        cTAPosition="absolute"
        cTATop="7.5rem"
        cTARight="1.25rem"
        cTATransform="unset"
        cTATransformOrigin="unset"
        cTAPadding="0.625rem 0.5rem"
        cTAWidth="calc(100% - 40px)"
        cTABorderRadius="12px"
        cTALeft="1.25rem"
        viewStory="Delete account"
        viewStoryFontSize="1rem"
        viewStoryLineHeight="1.5rem"
        viewStoryColor="#cc240e"
        viewStoryFontWeight="600"
      />
    </div>
  );
};

export default AccountControl;
