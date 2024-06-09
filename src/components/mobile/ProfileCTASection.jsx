import ProfileCTA from "./ProfileCTA";
import PropTypes from "prop-types";

const ProfileCTASection = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[1rem] ${className}`}
    >
      <ProfileCTA
        hugeIconeducationoutlinep="/hugeiconeducationoutlineplusrectangle.svg"
        cTA="Relate"
      />
      <button className="cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 w-[6.313rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem]">
        <div className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0">
          <div className="absolute h-[84.38%] w-[92.5%] top-[8.13%] right-[3.75%] bottom-[7.5%] left-[3.75%] rounded box-border border-[1.5px] border-solid border-primary-500" />
          <img
            className="absolute h-[33.13%] w-[83.13%] top-[29.38%] right-[8.75%] bottom-[37.5%] left-[8.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-3014.svg"
          />
        </div>
        <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
          Message
        </div>
      </button>
      <ProfileCTA
        hugeIconeducationoutlinep="/hugeiconfinance-and-paymentoutlinedonate1.svg"
        hugeIconeducationoutlinepOverflow="hidden"
        cTA="Donate"
      />
    </div>
  );
};

ProfileCTASection.propTypes = {
  className: PropTypes.string,
};

export default ProfileCTASection;
