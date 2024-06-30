import { useMemo } from "react";
import StateFilledCheckboxDevice from "./StateFilledCheckboxDevice";
import PropTypes from "prop-types";

const WhowhatInfluencedYou = ({
  className = "",
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  propWidth1,
  propAlignSelf2,
  propWidth2,
  propAlignSelf3,
  propWidth3,
  propAlignSelf4,
  propWidth4,
  propAlignSelf5,
  propWidth5,
  propAlignSelf6,
  propWidth6,
  propAlignSelf7,
}) => {
  const whowhatInfluencedYouStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const stateFilledCheckboxDeviceStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propAlignSelf1]);

  const stateFilledCheckboxDeviceStyle1 = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf2,
    };
  }, [propWidth1, propAlignSelf2]);

  const stateFilledCheckboxDeviceStyle2 = useMemo(() => {
    return {
      width: propWidth2,
      alignSelf: propAlignSelf3,
    };
  }, [propWidth2, propAlignSelf3]);

  const stateFilledCheckboxDeviceStyle3 = useMemo(() => {
    return {
      width: propWidth3,
      alignSelf: propAlignSelf4,
    };
  }, [propWidth3, propAlignSelf4]);

  const stateFilledCheckboxDeviceStyle4 = useMemo(() => {
    return {
      width: propWidth4,
      alignSelf: propAlignSelf5,
    };
  }, [propWidth4, propAlignSelf5]);

  const stateFilledCheckboxDeviceStyle5 = useMemo(() => {
    return {
      width: propWidth5,
      alignSelf: propAlignSelf6,
    };
  }, [propWidth5, propAlignSelf6]);

  const stateFilledCheckboxDeviceStyle6 = useMemo(() => {
    return {
      width: propWidth6,
      alignSelf: propAlignSelf7,
    };
  }, [propWidth6, propAlignSelf7]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] ${className}`}
      style={whowhatInfluencedYouStyle}
    >
      <StateFilledCheckboxDevice
        questionText="Who/what influenced you?"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="I have always loved dancing"
        question
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="unset"
        questionAlignSelf="stretch"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="My family"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="My friends"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="A school project"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="A dancing show on television"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="Social media"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
      <StateFilledCheckboxDevice
        questionText="Question"
        hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
        placeholderText="Other"
        question={false}
        stateFilledCheckboxDeviceWidth="340px"
        stateFilledCheckboxDeviceAlignSelf="unset"
        questionWidth="340px"
        questionAlignSelf="unset"
      />
    </div>
  );
};

WhowhatInfluencedYou.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf3: PropTypes.any,
  propWidth3: PropTypes.any,
  propAlignSelf4: PropTypes.any,
  propWidth4: PropTypes.any,
  propAlignSelf5: PropTypes.any,
  propWidth5: PropTypes.any,
  propAlignSelf6: PropTypes.any,
  propWidth6: PropTypes.any,
  propAlignSelf7: PropTypes.any,
};

export default WhowhatInfluencedYou;
