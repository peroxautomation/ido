import ProfileCTA from "./ProfileCTA";
/**
 * The users profile call to action section
 * @param {*} props
 * @returns
 */
const ProfileCTASection = (props) => {
  const {} = props;
  return (
    <div className={`flex flex-row items-start justify-start gap-[1rem]`}>
      <ProfileCTA
        imageSrc="/hugeiconeducationoutlineplusrectangle.svg"
        label="Relate"
      />
      <ProfileCTA hugeIconeducationoutlinep="/vector-3014.svg" cTA="Message" />
      <ProfileCTA
        imageSrc="/hugeiconfinance-and-paymentoutlinedonate1.svg"
        label="Donate"
      />
    </div>
  );
};

export default ProfileCTASection;
