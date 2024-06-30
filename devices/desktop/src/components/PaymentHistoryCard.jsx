import Property1DesktopTitle from "./Property1DesktopTitle";
import StateIncomeDeviceTablet from "./StateIncomeDeviceTablet";

const PaymentHistoryCard = (props) => {
  const { className = "", onClick } = props;
  return (
    <div
      className={`absolute w-[calc(100%_-_744px)] top-[148px] right-[432px] left-[312px] h-[799px] overflow-y-auto flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <Property1DesktopTitle
        text="Payment history"
        showLayers
        property1DesktopTitlePosition="unset"
        property1DesktopTitleTop="unset"
        property1DesktopTitleLeft="unset"
        property1DesktopTitleWidth="unset"
        property1DesktopTitleAlignSelf="stretch"
        onClick={onClick}
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="+$35"
        text="10:42"
        divColor="#0c9f6e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="+$35"
        text="10:42"
        divColor="#0c9f6e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="+$35"
        text="10:42"
        divColor="#0c9f6e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
      <StateIncomeDeviceTablet
        text="Today"
        fromText="Sofia Kuchenko"
        text="-$35"
        text="10:42"
        divColor="#cc240e"
      />
    </div>
  );
};

export default PaymentHistoryCard;
