import TitleTablet from "../components/TitleTablet";
import Dropdowns from "../components/Dropdowns";

const AllSelected = () => {
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
        dropdown="United States of America"
        dropdown1="Washington"
        dropdown2="Seattle"
        hugeIconmultimediaAndAudiTop="172px"
        hugeIconmultimediaAndAudiLeft="calc(50% - 170px)"
        hugeIconarrowssoliddirectWidth="340px"
        helperTextAlignSelf="unset"
        helperTextWidth="340px"
        inputWidth="340px"
        hugeIconarrowssoliddirectWidth1="340px"
        helperTextAlignSelf1="unset"
        helperTextWidth1="340px"
        inputWidth1="340px"
        hugeIconarrowssoliddirectWidth2="340px"
        helperTextAlignSelf2="unset"
        helperTextWidth2="340px"
        hugeIconinterfacesolidpluWidth="340px"
        propBackgroundColor="#cc0f3c"
      />
    </div>
  );
};

export default AllSelected;
