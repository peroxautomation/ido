import TFAQ from "../components/TFAQ";
import TFooter from "../components/TFooter";
import TAllDevices from "../components/TAllDevices";
import TContact from "../components/TContact";
import TPartners from "../components/TPartners";
import THomePage from "../components/THomePage";
import TAppFeatures from "../components/TAppFeatures";
import TReviews from "../components/TReviews";

const Tablet = () => {
  return (
    <div className="w-full relative bg-neutral-100 h-[4540px] overflow-hidden">
      <TFAQ />
      <TFooter />
      <TAllDevices />
      <TContact />
      <TPartners />
      <THomePage />
      <TAppFeatures />
      <TReviews />
    </div>
  );
};

export default Tablet;
