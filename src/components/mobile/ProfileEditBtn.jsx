/**
 * Edit button for the user's prolfile
 * @param {*} props 
 * @returns 
 */
const ProfileEditBtn = (props) => {
  const {} = props;
  return (
    <button
      className={`profile-edit-btn `}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        Edit profile
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/hugeiconeducationsolidpencil@2x.png"
      />
    </button>
  );
};

export default ProfileEditBtn;
