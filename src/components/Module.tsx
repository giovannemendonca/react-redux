import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";

interface ModuloProps {
  title: string;
  amountOfLessons: number;
  moduleIndex: number;
}

export default function Module({
  amountOfLessons,
  title,
  moduleIndex,
}: ModuloProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm"> {title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="h-5 w-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-6 p-6">
          <Lesson title="Fundamentos do Redux" duration="09:35" />
          <Lesson title="Fundamentos do Redux" duration="09:35" />
          <Lesson title="Fundamentos do Redux" duration="09:35" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
