/**
 * Profile page call to action buttons
 * @param  imageSrc The button image source
 * @param label The button label
 * @returns
 */
const ProfileCTA = (props) => {
  const { imageSrc, label } = props;
  return (
    <button
      className={`profile-cta-btn`}
    >
      <img className="w-[1rem] relative h-[1rem]" alt="" src={imageSrc} />
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {label}
      </div>
    </button>
  );
};

export default ProfileCTA;
