import ReactPlayer from "react-player";
import { useCurrentLesson } from "../store";
import { next } from "../store/slices/player";
import { useDispatch } from "react-redux";

export default function Video() {
  const dispatch = useDispatch();

  const { currentLesson } = useCurrentLesson();

  const handlerPlayNext = () => {
    dispatch(next());
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
          onEnded={handlerPlayNext}
          playing
        />
      </div>
    </div>
  );
}
