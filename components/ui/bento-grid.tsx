import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-400 grid-cols-1 gap-4 md:gap-8 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  organisation,
  header,
  colour,
}: {
  className?: string;
  title?: string | React.ReactNode;
  organisation?: string;
  header?: React.ReactNode;
  colour?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: colour }}
      className={cn(
        "group/bento hover:cursor-pointer row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition duration-200",
        className
      )}
    >
      <div className="font-body text-foreground text-right p-4">
        <span className="">{organisation}</span>
        <br />
        <span className="font-title font-bold">{title}</span>
      </div>
      {header}
    </div>
  );
};
