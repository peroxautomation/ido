import SearchResultItem from "./SearchResultItem";

const PaymentSearchResults = (props) => {
  const {} = props;
  return (
    <div
      id="PaymentSearch"
      className={`hidden relative w-full shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col `}
    >
      <SearchResultItem placeholder="Timur Gregorev" />
      <SearchResultItem placeholder="Diana Agaenko" />
      <SearchResultItem placeholder="12" />
      <SearchResultItem placeholder="Withdraw" />
    </div>
  );
};

export default PaymentSearchResults;
