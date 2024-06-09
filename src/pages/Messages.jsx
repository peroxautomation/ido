import SearchInput1 from "../components/mobile/SearchInput1";
import Title from "../components/mobile/Title";
import ChatBox from "../components/mobile/ChatBox";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  // Navigate to message page
  const onChatClick = () => {
    navigate('/messages/:chatId');
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <div className="absolute top-[6.75rem] left-[1.25rem] w-[20.938rem] flex flex-row items-center justify-start">
        <SearchInput1
          hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-021.svg"
          searchPlaceholder="Search"
          searchInputFlex="unset"
          searchInputWidth="20.938rem"
        />
      </div>
      <Title pageName="Chats" />
      <div className="absolute top-[10.25rem] left-[calc(50%_-_187.5px)] h-[calc(100vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start">
        <ChatBox source="/rectangle-200219@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200220@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200221@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200222@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200223@2x.png" onClick={onChatClick}  />
        <ChatBox source="/rectangle-200224@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200225@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200226@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200227@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200228@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200229@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200230@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200231@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200232@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200233@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200234@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200235@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200230@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200231@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200232@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200233@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200234@2x.png" onClick={onChatClick} />
        <ChatBox source="/rectangle-200235@2x.png" onClick={onChatClick} />
      </div>
    </div>
  );
};

export default Messages;
