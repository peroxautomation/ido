import SearchInput1 from "../components/mobile/SearchInput1";
import Title from "../components/mobile/Title";
import RelateRequestUser from "../components/mobile/RelateRequestUser";
import { useState } from "react";

/**
 * Relate request screen
 * @returns
 */
const RelateRequest = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [relateRequestData, setRelateRequestData] = useState([
    {
      id: 0,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200220@2x.png",
    },
    {
      id: 1,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200222@2x.png",
    },
    {
      id: 2,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200219@2x.png",
    },
    {
      id: 3,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200224@2x.png",
    },
    {
      id: 4,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200223@2x.png",
    },
    {
      id: 5,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200219@2x.png",
    },
    {
      id: 6,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200224@2x.png",
    },
    {
      id: 7,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200223@2x.png",
    },
    {
      id: 8,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200219@2x.png",
    },
    {
      id: 9,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200219@2x.png",
    },
    {
      id: 10,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200224@2x.png",
    },
    {
      id: 11,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200223@2x.png",
    },
    {
      id: 12,
      name: "user name",
      description: "desc",
      imageSrc: "/rectangle-200219@2x.png",
    },
  ]);
  const [searchValue, setSearchValue] = useState(null);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Render relate request
   */
  const renderRelateRequests = () => {
    return relateRequestData.map((element, index) => (
      <RelateRequestUser
        key={index}
        id={element.id}
        imageSrc={element.imageSrc}
        username={element.name}
        description={element.description}
        onConfirm={onRequestConfirm}
        onDelete={onRequestDelete}
      ></RelateRequestUser>
    ));
  };

  /**
   * Handle accepting a request
   */
  const onRequestConfirm = (id) => {
    const newArray = relateRequestData.filter((user) => user.id != id);
    setRelateRequestData(newArray);
  };

  /**
   * Handle accepting a request
   */
  const onRequestDelete = (id) => {
    const newArray = relateRequestData.filter((user) => user.id != id);
    setRelateRequestData(newArray);
  };

  console.log(relateRequestData)
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <div className="absolute top-[6.75rem] left-[1.25rem] w-[20.938rem] flex flex-row items-center justify-start">
        <SearchInput1
          searchPlaceholder="Search relate requests"
          searchValue={searchValue}
          handleSetValue={setSearchValue}
        />
      </div>
      <Title pageName="Relate request" />
      <div className="absolute top-[10.75rem] left-[calc(50%_-_187.5px)] h-[calc(100vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start">
        {renderRelateRequests()}
      </div>
    </div>
  );
};

export default RelateRequest;
