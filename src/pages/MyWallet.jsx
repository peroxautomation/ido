import MyWalletBtn from "../components/mobile/MyWalletBtn";
import MyWalletSearchDropdown from "../components/mobile/MyWalletSearchDropdown";
import SearchInput1 from "../components/mobile/SearchInput1";
import PaymentHistory from "../components/mobile/PaymentHistory";
import Title from "../components/mobile/Title";
import PaymentSearchResults from "../components/mobile/PaymentSearchResults";
import OperationTypeDropdownList from "../components/mobile/OperationTypeDropdownList";
import { useNavigate } from "react-router-dom";

const MyWallet = () => {

  const navigate = useNavigate();
  // Show recent searches
  const onSearchEnter = () => {
    document.getElementById('PaymentSearch').classList.toggle('hidden');
  }

  // On Topup click
  const onTopUpClick = () => {
    navigate('/profile/my-wallet/top-up')
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <Title pageName="My wallet" />
      <main className="absolute w-[calc(100%_-_40px)] top-[6.75rem] flex flex-col gap-[1rem] text-center text-[1rem] text-neutral-400 font-button-1-regular">
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
          <div className="self-stretch relative leading-[1.5rem]">Balance</div>
          <b className="self-stretch relative text-[2.5rem] leading-[3rem] text-neutral-100">
            $ 132,74
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem]">
          <MyWalletBtn
            cTA="Top up"
            onClick={onTopUpClick}
            hugeIconinterfaceoutlinep="/hugeiconinterfaceoutlineplus2.svg"
          />
          <MyWalletBtn
            cTA="Withdraw"
            hugeIconinterfaceoutlinep="/hugeiconarrowssolidmaximize@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-left text-neutral-100">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
            <div className="flex-1 relative leading-[1.5rem]">
              Select operation type
            </div>
          </div>
          <MyWalletSearchDropdown />
          <OperationTypeDropdownList />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start w-full">
          <SearchInput1
            onEnter={onSearchEnter}
            hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-021.svg"
            searchPlaceholder="Search"
            searchInputFlex="unset"
            searchInputWidth="20.938rem"
            className="w-full"
          />
           <PaymentSearchResults />
        </div>
        <div className="self-stretch h-[calc(100vh_-_27rem)] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
          <PaymentHistory prop="-$35" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="-$35" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
          <PaymentHistory prop="+$35" spanColor="#0c9f6e" />
        </div>
      </main>
    </div>
  );
};

export default MyWallet;
