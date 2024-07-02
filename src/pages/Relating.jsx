import RelatingSearchInput from "../components/mobile/RelatingSearchInput";
import RelateUser from "../components/mobile/RelateUser";
import Title from "../components/mobile/Title";
import { useState } from "react";

const Relating = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [relatingData, setRelatingData] = useState([
    {
      id: 0,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 1,
      profileImage: "/rectangle-2002@2x.png",
      username: "Michael Jackson",
      description: "Description",
    },
    {
      id: 2,
      profileImage: "/rectangle-2002@2x.png",
      username: "Lebron James",
      description: "Description",
    },
    {
      id: 3,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 4,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 5,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 6,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 7,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 8,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
    {
      id: 9,
      profileImage: "/rectangle-2002@2x.png",
      username: "user name",
      description: "Description",
    },
  ]);
  const [unrelatedUsers, setUnrelatedUsers] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Handle unrelating to a user
   * @param action Boolean to flag if the user is relating or not
   * @param id Id of the user to unrelate from
   */
  const onUnrelateClick = (action, id) => {
    if (action == true) {
      //User is still relating
      const newArray = unrelatedUsers.filter((e) => e.id != id);
      setUnrelatedUsers(newArray);
    } else {
      //User is no longer relating
      const newArray = relatingData
        .filter((e) => e.id == id)
        .concat(unrelatedUsers);
      setUnrelatedUsers(newArray);
    }
  };

  /**
   * Render users relating list
   * @returns
   */
  const renderRelatingDate = () => {
    return relatingData.map((element, index) => (
      <RelateUser
        profileImage={element.profileImage}
        username={element.username}
        description={element.description}
        onUnrelateClick={onUnrelateClick}
        id={index}
        key={index}
      ></RelateUser>
    ));
  };

  console.log(unrelatedUsers);
  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
      <div className="absolute top-[6.75rem] w-[20.938rem] flex flex-row items-center justify-start">
        <RelatingSearchInput
          handleSetValue={setSearchInputValue}
          searchPlaceholder="Search relating"
          searchValue={searchInputValue}
        ></RelatingSearchInput>
      </div>
      <Title pageName="Relating" />
      <div className="absolute top-[10.25rem] left-[calc(50%_-_187.5px)] h-[calc(100vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start">
        {renderRelatingDate()}
      </div>
    </div>
  );
};

export default Relating;
