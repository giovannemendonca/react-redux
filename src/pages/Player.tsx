import { MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Video from "../components/Video";
import Module from "../components/Module";

export function Player() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between ">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 pr-80 bg-zinc-900 shodow ">
          <Video />

          <aside
            className="w-80 border-l border-zinc-800 absolute top-0 right-0 bottom-0 bg-zinc-900 overflow-y-scroll
           scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900 "
          >
            <Module
              moduleIndex={0}
              title="Desvendando o redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={2}
              title="Desvendando o redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={3}
              title="Desvendando o redux"
              amountOfLessons={3}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
