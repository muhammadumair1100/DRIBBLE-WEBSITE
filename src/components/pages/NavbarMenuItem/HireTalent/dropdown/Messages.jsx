import { X, MessageSquareText, SendHorizonal } from "lucide-react";
const Messages = ({ isOpen }) => {
  return (
    <div className="relative bg-neutral-100/30">
      <div className="relative flex w-full shrink-0 items-center justify-center border-b border-neutral-200 bg-white py-4">
        <h1 className="text-sm font-bold text-neutral-800">Message</h1>
        <button
          onClick={() => isOpen(false)}
          className="absolute right-4 rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100"
        >
          <X size={18} />
        </button>
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
