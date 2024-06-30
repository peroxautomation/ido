import HugeIconinterfacebulkloadi from "../components/HugeIconinterfacebulkloadi";

const Processing = () => {
  return (
    <div className="w-screen relative bg-neutral-900 h-screen overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <HugeIconinterfacebulkloadi
        hugeIconinterfacebulkload="/hugeiconinterfacebulkloading-01.svg"
        hugeIconinterfacebulkloadWidth="56px"
        hugeIconinterfacebulkloadHeight="56px"
        hugeIconinterfacebulkloadPosition="absolute"
        hugeIconinterfacebulkloadTop="calc(50% - 71.5px)"
        hugeIconinterfacebulkloadLeft="calc(50% - 26px)"
      />
      <div className="absolute top-[591px] left-[calc(50%_-_271px)] w-[541px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">Processing</div>
      </div>
    </div>
  );
};

export default Processing;
