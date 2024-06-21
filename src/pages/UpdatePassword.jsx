import PasswordInput from "../components/mobile/PasswordInput";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import Input from "../components/mobile/Input";
import { useNavigate } from "react-router-dom";

/**
 * Update password screen for profile settings
 * @returns
 */
const UpdatePassword = () => {
  const navigate = useNavigate();
  /**
   * Navigate to update password screen
   */
  const onUpdatePasswordClick = () => {
    navigate("/profile/settings/forgot-password");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-h3-semibold grid grid-flow-row justify-center">
      <Title
        titleWidth="calc(100% - 40px)"
        titleTop="2.5rem"
        titleRight="1.25rem"
        titleLeft="1.25rem"
        pageName="Update password"
        showPageName
        pageNameWidth="unset"
        pageNameFontWeight="600"
        pageNameColor="#fff"
      />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <Input
              label="Current password"
              inputPlaceholder="Enter current password"
              className="h-[4rem]"
            />
            <PasswordInput
              inputAndWordPlaceholder="Create new password"
              label="New password"
              inputAlignSelf="stretch"
              labelAlignSelf="stretch"
              labelWidth="unset"
              inputAlignSelf1="stretch"
              inputWidth="unset"
              union="/union1.svg"
              unionIconHeight="72.92%"
              unionIconTop="13.75%"
              unionIconBottom="13.33%"
            />
            <PasswordInput
              inputAndWordPlaceholder="Confirm new password"
              label="Confirm password"
              inputAlignSelf="stretch"
              labelAlignSelf="stretch"
              labelWidth="unset"
              inputAlignSelf1="stretch"
              inputWidth="unset"
              union="/union1.svg"
              unionIconHeight="72.92%"
              unionIconTop="13.75%"
              unionIconBottom="13.33%"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0.5rem] px-[0rem] gap-[9.062rem]">
            <div className="w-[16.625rem] relative leading-[1.5rem] font-semibold hidden">
              Trending now
            </div>
            <div className="relative leading-[1.5rem] font-semibold text-right">
              Forgot password
            </div>
          </div>
        </div>
        <PrimaryButton
          onCTAClick={onUpdatePasswordClick}
          cTA="Update password"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
