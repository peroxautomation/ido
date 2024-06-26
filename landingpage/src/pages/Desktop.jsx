import DMain from "../components/DMain";
import DFooter from "../components/DFooter";
import DContact from "../components/DContact";
import DFAQs from "../components/DFAQs";
import DReviews from "../components/DReviews";
import DAllDevices from "../components/DAllDevices";
import DAppFeature from "../components/DAppFeature";
import DPartners from "../components/DPartners";

const Desktop = () => {
  return (
    <div className="w-screen absolute bg-neutral-100 h-[5564px] overflow-hidden">
      <DMain />
      <DFooter />
      <DContact />
      <DFAQs />
      <DReviews />
      <DAllDevices />
      <DAppFeature />
      <DPartners />
    </div>
  );
};

export default Desktop;
