import SearchInput1 from "../components/mobile/SearchInput1";
import Title from "../components/mobile/Title";
import RelateRequestUser from "../components/mobile/RelateRequestUser";

const RelateRequest = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <div className="absolute top-[6.75rem] left-[1.25rem] w-[20.938rem] flex flex-row items-center justify-start">
        <SearchInput1
          hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-021.svg"
          searchInputFlex="unset"
          searchInputWidth="20.938rem"
        />
      </div>
      <Title pageName="Relate request" />
      <div className="absolute top-[10.75rem] left-[calc(50%_-_187.5px)] h-[calc(100vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start">
        <RelateRequestUser rectangle2002="/rectangle-200219@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200222@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200223@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200224@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200219@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200222@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200223@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200224@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200219@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200220@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200222@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200223@2x.png" />
        <RelateRequestUser rectangle2002="/rectangle-200224@2x.png" />
      </div>
    </div>
  );
};

export default RelateRequest;
