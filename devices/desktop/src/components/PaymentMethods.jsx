import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import PropTypes from "prop-types";

const PaymentMethods = (props) => {
  const { className = "", openAddPaymentMethodModal } = props;
  return (
    <div
      className={`self-stretch rounded-2xl bg-neutral-800 flex flex-row items-start justify-between p-6 text-left text-9xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[23px]">
        <div className="relative leading-[36px]">Payment methods</div>
        <div className="flex flex-col items-center justify-center gap-[16px]">
          <SizeBiggerStateDefaultDe1
            labelText="Label"
            hugeIconmultimediaAndAudi="/mastercard1.svg"
            inputText="4169 4573 9374 0013"
            hugeIconarrowssoliddirect="/hugeiconinterfaceoutlinetrash.svg"
            helperText="Helper text"
            helperText={false}
            label={false}
            leftIcon
            rightIcon
            showInput
            sizeBiggerStateDefaultDeWidth="unset"
            sizeBiggerStateDefaultDePosition="unset"
            sizeBiggerStateDefaultDeTop="unset"
            sizeBiggerStateDefaultDeLeft="unset"
            sizeBiggerStateDefaultDeAlignSelf="stretch"
            sizeBiggerStateDefaultDeHeight="unset"
            labelWidth="340px"
            labelAlignSelf="unset"
            inputAlignSelf="unset"
            inputWidth="340px"
            hugeIconmultimediaAndAudiOverflow="unset"
            dropdownColor="#fff"
            helperTextWidth="340px"
            helperTextAlignSelf="unset"
            helperTextColor="#fff"
          />
          <SizeBiggerStateDefaultDe1
            labelText="Label"
            hugeIconmultimediaAndAudi="/mastercard1.svg"
            inputText="4169 4573 9374 0013"
            hugeIconarrowssoliddirect="/hugeiconinterfaceoutlinetrash.svg"
            helperText="Helper text"
            helperText={false}
            label={false}
            leftIcon
            rightIcon
            showInput
            sizeBiggerStateDefaultDeWidth="unset"
            sizeBiggerStateDefaultDePosition="unset"
            sizeBiggerStateDefaultDeTop="unset"
            sizeBiggerStateDefaultDeLeft="unset"
            sizeBiggerStateDefaultDeAlignSelf="stretch"
            sizeBiggerStateDefaultDeHeight="unset"
            labelWidth="340px"
            labelAlignSelf="unset"
            inputAlignSelf="unset"
            inputWidth="340px"
            hugeIconmultimediaAndAudiOverflow="unset"
            dropdownColor="#fff"
            helperTextWidth="340px"
            helperTextAlignSelf="unset"
            helperTextColor="#fff"
          />
        </div>
      </div>
      <SizeSmallStatePrimaryDev
        text="Add payment methods"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        rightIcon
        sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeSmallStatePrimaryDevWidth="252px"
        sizeSmallStatePrimaryDevPosition="unset"
        sizeSmallStatePrimaryDevRight="unset"
        sizeSmallStatePrimaryDevBottom="unset"
        sizeSmallStatePrimaryDevLeft="unset"
        cTAColor="#fff"
        onClick={openAddPaymentMethodModal}
      />
    </div>
  );
};

export default PaymentMethods;
