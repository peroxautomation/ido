import TitleTablet from "../components/TitleTablet";
import InputsBtns from "../components/InputsBtns1";

const ResetPassword1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <TitleTablet
        titleOfPage="Reset password"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <InputsBtns />
    </div>
  );
};

export default ResetPassword1;
