import TPHeader from "../components/TPHeader";
import TPartnerForm from "../components/TPartnerForm";
import TPartnerModal from "../components/TPartnerModal";

const TabletPartner = () => {
  return (
    <div className="w-screen fixed bg-neutral-900 h-screen overflow-hidden">
      <TPHeader />
      <TPartnerForm />
      {/* <div className="absolute top-[0px] left-[0px] bg-gray-200 w-screen h-screen" />
      <TPartnerModal /> */}
    </div>
  );
};

export default TabletPartner;
