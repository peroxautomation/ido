import TitleTablet from "../components/TitleTablet";
import Dropdowns from "../components/Dropdowns";
import DropdownsMenu from "../components/DropdownsMenu";

const CountrySelection = () => {
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
      <Dropdowns
        dropdown="Country"
        dropdown1="State"
        dropdown2="City"
        hugeIconmultimediaAndAudiTop="172px"
        hugeIconmultimediaAndAudiLeft="calc(50% - 170px)"
        hugeIconarrowssoliddirectWidth="340px"
        helperTextAlignSelf="stretch"
        helperTextWidth="unset"
        inputWidth="340px"
        hugeIconarrowssoliddirectWidth1="340px"
        helperTextAlignSelf1="stretch"
        helperTextWidth1="unset"
        inputWidth1="340px"
        hugeIconarrowssoliddirectWidth2="340px"
        helperTextAlignSelf2="stretch"
        helperTextWidth2="unset"
        hugeIconinterfacesolidpluWidth="340px"
        propBackgroundColor="#efb5c3"
      />
      <DropdownsMenu hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-022.svg" />
    </div>
  );
};

export default CountrySelection;
