import VariantsBackStateDefault from "./VariantsBackStateDefault";
import StateDefault3 from "./StateDefault3";
import PropTypes from "prop-types";

const VariantRelateRequests = ({ className = "" }) => {
  return (
    <div
      className={`rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-neutral-800 box-border h-[916px] flex flex-col items-start justify-start border-l-[1px] border-solid border-neutral-700 ${className}`}
    >
      <VariantsBackStateDefault variantsBackStateDefaultBorderBottom="1px solid #252525" />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
      <StateDefault3 />
    </div>
  );
};

VariantRelateRequests.propTypes = {
  className: PropTypes.string,
};

export default VariantRelateRequests;
