import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import AppleLogin from "./AppleLogin";
import PropTypes from "prop-types";

const SocialMediaLogins = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[32px] ${className}`}
    >
      <GoogleLogin />
      <FacebookLogin />
      <AppleLogin />
    </div>
  );
};

export default SocialMediaLogins;
