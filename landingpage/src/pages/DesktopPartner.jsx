import DPHeader from "../components/DPHeader";
import DPartnerForm from "../components/DPartnerForm";
import DPartnerModal from "../components/DPartnerModal";

const DesktopPartner = () => {
  return (
    <div className="w-screen h-screen fixed bg-neutral-900 overflow-hidden">
      <DPHeader />
      <DPartnerForm />
    </div>
  );
};

export default DesktopPartner;
