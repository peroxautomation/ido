import TitleTablet from "../components/TitleTablet";
import Dropdowns from "../components/Dropdowns";

const GenderDropdown = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <TitleTablet
        titleOfPage="Sign up"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="60px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <Dropdowns dropdown="Country" dropdown1="State" dropdown2="City" />
    </div>
  );
};

export default GenderDropdown;
