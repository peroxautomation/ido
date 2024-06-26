import MHomepage from "../components/MHomepage";
import MAllDevices from "../components/MAllDevices";
import MContact from "../components/MContact";
import MFooter from "../components/MFooter";
import MReviews from "../components/MReviews";
import MFAQ from "../components/MFAQ";
import MPartners from "../components/MPartners";
import MAppFeature from "../components/MAppFeature";

const Mobile = () => {
  return (
    <div className="w-full relative bg-neutral-100 h-[4688px] overflow-hidden">
      <MHomepage />
      <MAllDevices />
      <MContact />
      <MFooter />
      <MReviews />
      <MFAQ />
      <MPartners />
      <MAppFeature />
    </div>
  );
};

export default Mobile;
