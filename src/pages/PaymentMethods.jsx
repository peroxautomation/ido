import PaymentMethodBox from "../components/mobile/PaymentMethodBox";
import AddPaymentMethodBtn from "../components/mobile/AddPaymentMethodBtn";
import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";

const PaymentMethods = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-center">
      <Title pageName="Payment methods" />
      <div className="relative top-[15vh] flex flex-col items-start justify-start gap-[1.5rem]">
        <PaymentMethodBox />
        <AddPaymentMethodBtn />
      </div>
      <DeletePopup message={"Are you sure want to delete card?"} />
    </div>
  );
};

export default PaymentMethods;
