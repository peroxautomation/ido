import MyWalletBtn from "../components/mobile/MyWalletBtn";
import MyWalletOperationDropdown from "../components/mobile/MyWalletOperationDropdown";
import SearchInput1 from "../components/mobile/SearchInput1";
import PaymentHistory from "../components/mobile/PaymentHistory";
import Title from "../components/mobile/Title";
import PaymentSearchResults from "../components/mobile/PaymentSearchResults";
import OperationTypeDropdownList from "../components/mobile/OperationTypeDropdownList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyWallet = () => {
  /*********************************************************************************** */
  /********************************{States & vairables}******************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();
  const [isOperationActive, setIsOperationActive] = useState(false);
  const [isPaymentResultActive, setIsPaymentResultActive] = useState(false);
  const paymenyHistoryData = [
    {
      value: -35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: 35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: 35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: -35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: 35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: -35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
    {
      value: -35,
      time: "10:42",
      name: "Sofia Kuchenko",
      day: "Today",
    },
  ];
  const [searchValue, setSearchValue] = useState(null);
  const [operationValue, setOperationValue] = useState(null);

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */
  /**
   * Show recent searches
   */
  const onSearchEnter = () => {
    setIsPaymentResultActive(!isPaymentResultActive);
  };

  /**
   * Show operations dropdown
   */
  const onOperationsClick = () => {
    setIsOperationActive(!isOperationActive);
  };

  /**
   *  Navigate to top-up screen
   */
  const onTopUpClick = () => {
    navigate("/profile/my-wallet/top-up");
  };

  /**
   * Navigate to widthdraw screen
   */
  const onWidthdrawClick = () => {
    navigate("/profile/my-wallet/widthdraw");
  };

  /**
   * Render users payment history
   * @returns A list of JSX element
   */
  const renderPaymentHistory = () => {
    return paymenyHistoryData.map((element, index) => (
      <PaymentHistory
        key={index}
        value={element.value}
        time={element.time}
        name={element.name}
        day={element.day}
      ></PaymentHistory>
    ));
  };

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
            imageSrc="/playlistPlusSolid.svg"
          />
          <MyWalletBtn
            cTA="Withdraw"
            onClick={onWidthdrawClick}
            imageSrc="/hugeiconarrowssolidmaximize@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-left text-neutral-100">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]">
            <div className="flex-1 relative leading-[1.5rem]">
              Select operation type
            </div>
          </div>
          <MyWalletOperationDropdown
            onClick={onOperationsClick}
            value={operationValue}
          />
          {isOperationActive && (
            <OperationTypeDropdownList onSelect={setOperationValue} />
          )}
        </div>
        <div className="relative self-stretch flex flex-col items-center justify-start w-full">
          <SearchInput1
            onEnter={onSearchEnter}
            searchValue={searchValue}
            handleSetValue={setSearchValue}
            searchPlaceholder="Search"
          />
          {isPaymentResultActive && (
            <PaymentSearchResults onSelect={setSearchValue} />
          )}
        </div>
        <div className="self-stretch h-[calc(100vh_-_27rem)] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
          {renderPaymentHistory()}
        </div>
      </main>
    </div>
  );
};

export default MyWallet;