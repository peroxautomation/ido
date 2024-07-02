import { useState } from "react";
import Title from "../components/mobile/Title";
import ToggleMenu from "../components/mobile/ToggleMenu";

/**
 * Manage push notifications page
 * @returns A JSX element
 */
const PushNotifications = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [notifications, setNotification] = useState([
    {
      id: 0,
      notification: "Pause all",
      isSet: false,
    },
    {
      id: 1,
      notification: "Post",
      isSet: false,
    },
    {
      id: 2,
      notification: "Comment",
      isSet: false,
    },
    {
      id: 3,
      notification: "Messages",
      isSet: false,
    },
    {
      id: 4,
      notification: "Pause",
      isSet: false,
    },
  ]);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Switch the toggle between selected and not selected
   * @param {*} event
   */
  const onToggleClick = (id) => {
    const newArray = notifications.map((element) => {
      if (element.id == id) {
        element.isSet = !element.isSet;
      }
      return element;
    });
    setNotification(newArray);
  };

  /**
   * Render notifications
   * @returns An array of JSX element
   */
  const renderQuestions = () => {
    return notifications.map((element, index) => (
      <ToggleMenu
        key={index}
        id={element.id}
        label={element.notification}
        onClick={onToggleClick}
        class2={element.isSet ? "left-[50%]" : ""}
        class1={element.isSet ? "bg-primary-500" : ""}
      />
    ));
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row">
      <Title pageName="Push notifications" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.938rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        {renderQuestions()}
      </div>
    </div>
  );
};

export default PushNotifications;
