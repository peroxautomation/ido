import { useNavigate } from "react-router-dom";
import ProfileCTASection from "./ProfileCTASection";
import ProfileEditBtn from "./ProfileEditBtn";
import ProfileSegmentPicker from "./ProfileSegmentPicker";

/**
 * Profile screen top component
 * @param onSegmentClick On click function for profile segment
 * @param currentSegment current segment state variable
 * @param view  The current view (user or another person)
 * @param username the user's name
 * @param postCount Number of post the user has
 * @param relateCount Number of people the user is relating to
 * @param bio The users bio page
 * @param setMenuActive Handeler to toggle side menu
 * @param isMenuActive  Side menu active state. True or false.
 * @returns A JSX element
 */
const ProfileTop = (props) => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const {
    onSegmentClick,
    currentSegment,
    view = "User",
    username,
    postCount,
    relateCount,
    bio,
    profilePic,
    setMenuActive,
    isMenuActive,
  } = props;
  const navigate = useNavigate();

  /**************************************************************** */
  /***************************{ Methods}*************************** */
  /**************************************************************** */
  /**
   * Navigate to relating screen
   */
  const onRelatingClick = () => {
    navigate("/profile/relating");
  };

  return (
    <div
      className={`grid grid-flow-row items-center justify-start gap-[1rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular`}
    >
      {view !== "User" ? (
        <span></span>
      ) : (
        <div
          onClick={() => setMenuActive(true)}
          className=" justify-self-end mt-6"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8333 14.666H31.1666M12.8333 21.9993H31.1666M12.8333 29.3327H31.1666"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-col items-center justify-start gap-[0.5rem]">
        <img
          className="w-[7.5rem] relative rounded-[50%] h-[7.5rem] object-cover"
          alt=""
          src={profilePic}
        />
        <div className="self-stretch flex flex-row items-center justify-center gap-[0.687rem]">
          <div className="w-[1.5rem] relative h-[2.25rem]">
            <img
              className="relative w-[1.375rem] h-[0.875rem] top-6"
              alt=""
              src="/subtract1.svg"
            />
            <img
              className="absolute h-[66.67%] w-full bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full"
              alt=""
              src="/star-5.svg"
            />
            <div className="absolute top-[11.11%] left-[20.83%] leading-[1rem] font-semibold">
              17
            </div>
          </div>
          <div className="relative text-[1rem] leading-[1.5rem] text-left">
            {username}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1.5rem]">
        <div className="w-[20.938rem] flex flex-row items-center justify-between py-[0rem] px-[1rem] box-border">
          <div className="flex-1 flex flex-col items-center justify-center border-r-[1px] border-solid border-neutral-700">
            <div className="relative leading-[2rem] font-semibold">
              {postCount}
            </div>
            <div className="relative text-[0.75rem] leading-[1rem] text-neutral-400">
              Posts
            </div>
          </div>
          <div
            onClick={onRelatingClick}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <div className="relative leading-[2rem] font-semibold">
              {relateCount}
            </div>
            <div className="relative text-[0.75rem] leading-[1rem] text-neutral-400">
              Relating
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start text-[1rem]">
          <div className="w-[20.938rem] relative leading-[1.5rem] inline-block shrink-0">
            {bio}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
        {view === "User" ? <ProfileEditBtn /> : <ProfileCTASection />}
        <ProfileSegmentPicker
          current={currentSegment}
          onClick={onSegmentClick}
        />
      </div>
    </div>
  );
};

export default ProfileTop;
