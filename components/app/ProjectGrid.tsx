import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ProjectGridConfig } from "@/config/project-grid";
import { Book, File, Signature, TableColumnsSplit } from "lucide-react";

interface ProjectGridProps {
  items: ProjectGridConfig[];
}

export function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          organisation={item.organisation}
          header={item.header}
          colour={item.colour}
          className={i === 1 || i === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const projectGridConfig: ProjectGridConfig[] = [
  {
    title: "Cograph",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    organisation: "Raytheon UK",
    header: <Skeleton />,
    icon: <Book className="h-4 w-4 text-neutral-500" />,
    colour: "#EBD9D1",
  },
  {
    title: "Union",
    description: "Dive into the transformative power of technology.",
    organisation: "Gloucestershire Bundles",
    header: <Skeleton />,
    icon: <File className="h-4 w-4 text-neutral-500" />,
    colour: "#A8BBA3",
  },
  {
    title: "Flashcards",
    description: "Discover the beauty of thoughtful and functional design.",
    organisation: "University",
    header: <Skeleton />,
    icon: <Signature className="h-4 w-4 text-neutral-500" />,
    colour: "#000000",
  },
  {
    title: "Translator",
    description:
      "Understand the impact of effective communication in our lives.",
    organisation: "Personal",
    header: <Skeleton />,
    icon: <TableColumnsSplit className="h-4 w-4 text-neutral-500" />,
    colour: "#000000",
  },
];
