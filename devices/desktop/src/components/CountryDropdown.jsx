import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import ButtonDefault from "./ButtonDefault";

const CountryDropdown = (props) => {
  const { nextSignUpPage, setIsCountry, setIsState, setIsCity } = props;
  return (
    <div
      className={`absolute top-[291px] left-[calc(50%_-_160px)] flex flex-col items-start justify-start gap-[16px]`}
    >
      <SizeBiggerStateDefaultDe1
        labelText="Label"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        inputText="Country"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        showInput
        sizeBiggerStateDefaultDeWidth="unset"
        sizeBiggerStateDefaultDePosition="unset"
        sizeBiggerStateDefaultDeTop="unset"
        sizeBiggerStateDefaultDeLeft="unset"
        sizeBiggerStateDefaultDeAlignSelf="unset"
        sizeBiggerStateDefaultDeHeight="unset"
        labelWidth="320px"
        labelAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        dropdownColor="#fff"
        helperTextWidth="320px"
        helperTextAlignSelf="unset"
        helperTextColor="#fff"
        onClick={setIsCountry}
      />
      <SizeBiggerStateDefaultDe1
        labelText="Label"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        inputText="State"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        showInput
        sizeBiggerStateDefaultDeWidth="unset"
        sizeBiggerStateDefaultDePosition="unset"
        sizeBiggerStateDefaultDeTop="unset"
        sizeBiggerStateDefaultDeLeft="unset"
        sizeBiggerStateDefaultDeAlignSelf="unset"
        sizeBiggerStateDefaultDeHeight="unset"
        labelWidth="320px"
        labelAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        dropdownColor="#fff"
        helperTextWidth="320px"
        helperTextAlignSelf="unset"
        helperTextColor="#fff"
        onClick={setIsState}
      />
      <SizeBiggerStateDefaultDe1
        labelText="Label"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        inputText="City"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        showInput
        sizeBiggerStateDefaultDeWidth="unset"
        sizeBiggerStateDefaultDePosition="unset"
        sizeBiggerStateDefaultDeTop="unset"
        sizeBiggerStateDefaultDeLeft="unset"
        sizeBiggerStateDefaultDeAlignSelf="unset"
        sizeBiggerStateDefaultDeHeight="unset"
        labelWidth="320px"
        labelAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        dropdownColor="#fff"
        helperTextWidth="320px"
        helperTextAlignSelf="unset"
        helperTextColor="#fff"
        onClick={setIsCity}
      />
      <ButtonDefault
        leftIcon={""}
        text="Next"
        rightIcon={""}
        onClick={nextSignUpPage}
      />
    </div>
  );
};

export default CountryDropdown;
