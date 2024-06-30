import { useMemo } from "react";
import SizeBiggerStateDefaultDe from "./SizeBiggerStateDefaultDe";
import PropTypes from "prop-types";
import ButtonDefault from "./ButtonDefault";

const Dropdowns = (props) => {
  const {
    className = "",
    dropdown,
    dropdown1,
    dropdown2,
    hugeIconmultimediaAndAudiTop,
    hugeIconmultimediaAndAudiLeft,
    hugeIconarrowssoliddirectWidth,
    helperTextAlignSelf,
    helperTextWidth,
    inputWidth,
    hugeIconarrowssoliddirectWidth1,
    helperTextAlignSelf1,
    helperTextWidth1,
    inputWidth1,
    hugeIconarrowssoliddirectWidth2,
    helperTextAlignSelf2,
    helperTextWidth2,
    hugeIconinterfacesolidpluWidth,
    propBackgroundColor,
    onClick,
  } = props;
  const dropdowns1Style = useMemo(() => {
    return {
      top: hugeIconmultimediaAndAudiTop,
      left: hugeIconmultimediaAndAudiLeft,
    };
  }, [hugeIconmultimediaAndAudiTop, hugeIconmultimediaAndAudiLeft]);

  const label4Style = useMemo(() => {
    return {
      width: hugeIconarrowssoliddirectWidth,
    };
  }, [hugeIconarrowssoliddirectWidth]);

  const inputStyle = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf,
      width: helperTextWidth,
    };
  }, [helperTextAlignSelf, helperTextWidth]);

  const helperText7Style = useMemo(() => {
    return {
      width: inputWidth,
    };
  }, [inputWidth]);

  const label4Style1 = useMemo(() => {
    return {
      width: hugeIconarrowssoliddirectWidth1,
    };
  }, [hugeIconarrowssoliddirectWidth1]);

  const inputStyle1 = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf1,
      width: helperTextWidth1,
    };
  }, [helperTextAlignSelf1, helperTextWidth1]);

  const helperText7Style1 = useMemo(() => {
    return {
      width: inputWidth1,
    };
  }, [inputWidth1]);

  const label4Style2 = useMemo(() => {
    return {
      width: hugeIconarrowssoliddirectWidth2,
    };
  }, [hugeIconarrowssoliddirectWidth2]);

  const inputStyle2 = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf2,
      width: helperTextWidth2,
    };
  }, [helperTextAlignSelf2, helperTextWidth2]);

  const helperText7Style2 = useMemo(() => {
    return {
      width: hugeIconinterfacesolidpluWidth,
    };
  }, [hugeIconinterfacesolidpluWidth]);

  const sizeBigStateSecondaryDevStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`absolute top-[172px] left-[calc(50%_-_170px)] flex flex-col items-start justify-start gap-[16px] ${className}`}
      style={dropdowns1Style}
    >
      <SizeBiggerStateDefaultDe
        labelText="Label"
        inputText="Country"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        inputAlignSelf="stretch"
        inputWidth="unset"
      />
      <SizeBiggerStateDefaultDe
        labelText="Label"
        inputText="State"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        inputAlignSelf="stretch"
        inputWidth="unset"
      />
      <SizeBiggerStateDefaultDe
        labelText="Label"
        inputText="City"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        inputAlignSelf="stretch"
        inputWidth="unset"
      />
      <ButtonDefault
        leftIcon={""}
        text="Next"
        rightIcon={""}
        onClick={onClick}
      />
    </div>
  );
};

export default Dropdowns;
