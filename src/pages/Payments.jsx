import Title from "../components/mobile/Title";
import ProfileMenu from "../components/mobile/PaymentMenu";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();

  // Navigate to Payment methods
  const onPaymentClick = () => {
    navigate('/profile/payment-methods')
  }

  // Navigate to Subscriptions screen
  const onSubscriptionsClick = () => {
    navigate('/profile/subscriptions')
  }

  // Navigate to wallet screen
  const onWalletClick = () => {
    navigate('/profile/my-wallet')
  }
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="Payments" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] grid grid-flow-row justify-center gap-[1rem]">
        <ProfileMenu label="Payment methods" onClick={onPaymentClick}/>
        <ProfileMenu label="Subscriptions" onClick={onSubscriptionsClick} />
        <ProfileMenu label="My wallet" onClick={onWalletClick} />
      </div>
    </div>
  );
};

export default Payments;