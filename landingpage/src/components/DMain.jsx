import DHeader from "./DHeader";
import DMainDescriptionCTA from "./DMainDescriptionCTA";
import DBothIphonesMain from "./DBothIphonesMain";

const DMain = () => {
  return (
    <div
      className={`relative top-[0px]  bg-neutral-900 w-screen h-[934px] overflow-hidden text-left text-base text-neutral-100 font-body-semibold`}>
      <DHeader />
      <DMainDescriptionCTA />
      <DBothIphonesMain />
    </div>
  );
};

export default DMain;
