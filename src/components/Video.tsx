import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=BhPyF0BQpF0"
        />
      </div>
    </div>
  );
}
