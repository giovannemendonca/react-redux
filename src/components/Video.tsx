import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export default function Video() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      next: store.next,
    };
  });

  const handlerPlayNext = () => {
    next();
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
          </div>
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
            onEnded={handlerPlayNext}
            playing
          />
        )}
      </div>
    </div>
  );
}
