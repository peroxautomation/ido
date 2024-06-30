import HugeIconinterfacebulkloadi from "../components/HugeIconinterfacebulkloadi";

const DProcessing = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <HugeIconinterfacebulkloadi
        hugeIconinterfacebulkload="/hugeiconinterfacebulkloading-01.svg"
        hugeIconinterfacebulkloadWidth="56px"
        hugeIconinterfacebulkloadHeight="56px"
        hugeIconinterfacebulkloadPosition="absolute"
        hugeIconinterfacebulkloadTop="calc(50% - 72px)"
        hugeIconinterfacebulkloadLeft="calc(50% - 25px)"
      />
      <div className="absolute top-[536px] left-[calc(50%_-_270px)] w-[541px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">Processing</div>
      </div>
    </div>
  );
};

export default DProcessing;
