import { X, MessageSquareText, SendHorizonal } from "lucide-react";
const Messages = ({ isOpen }) => {
  return (
    <div className="relative bg-neutral-100/30">
      <div className="flex justify-center gap-15 border-b border-neutral-300 py-3">
        <h1 className="font-semibold">Messages</h1>
        <span
          onClick={() => isOpen(false)}
          className="absolute top-2.5 right-5 rounded-lg p-2 hover:cursor-pointer hover:bg-neutral-200"
        >
          <X className="size-4" />
        </span>
      </div>
      <div className="flex h-[500px] flex-col items-center justify-center gap-4">
        <MessageSquareText strokeWidth={3} />
        <h1 className="font-semibold">No messages</h1>
        <p className="text-xs">Messages from the Team will be shown here</p>
      </div>
      <div className="absolute bottom-5 left-1/2 flex max-w-60 -translate-x-1/2 items-center justify-center gap-5 rounded-xl bg-pink-300 px-3 py-2 hover:cursor-pointer hover:bg-pink-300/80 min-[450px]:bottom-3">
        <button className="text-sm font-medium whitespace-nowrap text-white">
          Send us a message
        </button>
        <SendHorizonal width={17} color="white" strokeWidth={6} />
      </div>
    </div>
  );
};

export default Messages;
