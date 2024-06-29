import SearchResultItem from "./SearchResultItem";
/**
 * Payment search reslts
 * @param onSelect On click result item function
 * @returns
 */
const PaymentSearchResults = (props) => {
  const { onSelect } = props;
  return (
    <div className={`payment-search-results`}>
      <SearchResultItem placeholder="Timur Gregorev" onClick={onSelect} />
      <SearchResultItem placeholder="Diana Agaenko" onClick={onSelect} />
      <SearchResultItem placeholder="12" onClick={onSelect} />
      <SearchResultItem placeholder="Withdraw" onClick={onSelect} />
    </div>
  );
};

export default PaymentSearchResults;
