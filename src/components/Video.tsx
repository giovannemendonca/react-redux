import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector, useCurrentLesson } from "../store";
import { next } from "../store/slices/player";
import { Loader } from "lucide-react";

export default function Video() {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();

  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  const handlerPlayNext = () => {
    dispatch(next());
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {isCourseLoading ? (
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
