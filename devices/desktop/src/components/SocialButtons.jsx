import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import VariantLoginSizeDesktop from "./VariantLoginSizeDesktop";

const SocialButtons = (props) => {
  const { googleRedirect, facebookRedirect, appleRedirect } = props;
  return (
    <div className={`flex flex-col items-start justify-start gap-[16px]`}>
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/google.svg"
        text="Continue with Google"
        leftIcon
        sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeMediumStateSecondaryWidth="320px"
        sizeMediumStateSecondaryBorder="unset"
        sizeMediumStateSecondaryAlignSelf="unset"
        sizeMediumStateSecondaryMargin="unset"
        sizeMediumStateSecondaryPosition="unset"
        sizeMediumStateSecondaryTop="unset"
        sizeMediumStateSecondaryLeft="unset"
        onClick={googleRedirect}
      />
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/apple.svg"
        text="Continue with Apple"
        leftIcon
        sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeMediumStateSecondaryWidth="320px"
        sizeMediumStateSecondaryBorder="unset"
        sizeMediumStateSecondaryAlignSelf="unset"
        sizeMediumStateSecondaryMargin="unset"
        sizeMediumStateSecondaryPosition="unset"
        sizeMediumStateSecondaryTop="unset"
        sizeMediumStateSecondaryLeft="unset"
        onClick={googleRedirect}
      />
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/facebook.svg"
        text="Continue with Facebook"
        leftIcon
        sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeMediumStateSecondaryWidth="320px"
        sizeMediumStateSecondaryBorder="unset"
        sizeMediumStateSecondaryAlignSelf="unset"
        sizeMediumStateSecondaryMargin="unset"
        sizeMediumStateSecondaryPosition="unset"
        sizeMediumStateSecondaryTop="unset"
        sizeMediumStateSecondaryLeft="unset"
        onClick={googleRedirect}
      />
      <VariantLoginSizeDesktop
        alreadyHaveAnAccount="Already have an account"
        login="Login"
        loginTextDecoration="unset"
      />
    </div>
  );
};

export default SocialButtons;
