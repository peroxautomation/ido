import SearchResultItem from "./SearchResultItem";
import PropTypes from "prop-types";

const PaymentSearchResults = ({ className = "" }) => {
  return (
    <div
      id="PaymentSearch"
      className={`hidden relative w-full shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col ${className}`}
    >
      <SearchResultItem
        placeholder="Timur Gregorev"
        item2BorderBottom="1px solid #1b1b1b"
        className="w-full"
      />
      <SearchResultItem
        placeholder="Diana Agaenko"
        item2BorderBottom="1px solid #1b1b1b"
        className="w-full"
      />
      <SearchResultItem
        placeholder="12"
        item2BorderBottom="1px solid #1b1b1b"
        className="w-full"
      />
      <SearchResultItem
        placeholder="Withdraw"
        item2BorderBottom="unset"
        className="w-full"
      />
    </div>
  );
};

PaymentSearchResults.propTypes = {
  className: PropTypes.string,
};

export default PaymentSearchResults;
