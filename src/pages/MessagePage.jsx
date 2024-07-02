import MessageInput from "../components/mobile/MessageInput";
import SendMessageBtn from "../components/mobile/SendMessageBtn";
import MessagePageHeader from "../components/mobile/MessagePageHeader";
import SentMessageBox from "../components/mobile/SentMessageBox";
import ReceivedMessageBox from "../components/mobile/ReceivedMessageBox";

const MessagePage = () => {
  return (
    <div className="w-full fixed bg-neutral-100 min-h-screen overflow-hidden grid grid-flow-row justify-center">
      <img
        className="absolute z-0 min-h-screen"
        alt=""
        src="/devicemobile.svg"
      />
      <MessagePageHeader />
      <div className="relative top-[8.5rem] h-[calc(100vh_-_15rem)] flex flex-col gap-4 overflow-y-auto">
        <SentMessageBox />
        <ReceivedMessageBox />
        <SentMessageBox />
        <ReceivedMessageBox />
        <SentMessageBox />
        <ReceivedMessageBox />
        <SentMessageBox />
        <ReceivedMessageBox />
        <SentMessageBox />
        <ReceivedMessageBox />
        <SentMessageBox />
        <ReceivedMessageBox />
      </div>
      <div className="relative w-[20.938rem] flex flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border gap-[1rem]">
        <MessageInput />
        <SendMessageBtn />
      </div>
    </div>
  );
};

export default MessagePage;
