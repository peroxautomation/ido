import { useMemo } from "react";

const ReceivedMessageBox = (props) => {
  const messagesTop = props;
  const messagesStyle = useMemo(() => {
    return {
      top: messagesTop,
    };
  }, [messagesTop]);

  return (
    <div
      className={`relative rounded-tl-none rounded-tr-xl rounded-b-xl bg-white-16 w-[16.5rem] flex flex-row items-center justify-center pt-[0.5rem] px-[0.75rem] pb-[1rem] box-border gap-[0.5rem] text-left text-[0.875rem] text-neutral-100 font-button-1-regular self-end `}
      style={messagesStyle}
    >
      <div className="flex-1 relative leading-[1.25rem] z-[0]">{`All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary as necessary `}</div>
      <div className="w-[1.688rem] absolute !m-[0] right-[0.5rem] bottom-[0.25rem] text-[0.625rem] leading-[0.75rem] font-light text-right inline-block z-[1]">
        18:35
      </div>
    </div>
  );
};

export default ReceivedMessageBox;