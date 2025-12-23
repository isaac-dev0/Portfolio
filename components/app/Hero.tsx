import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="w-full py-[clamp(4rem,10vh,10rem)] flex justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1
          className={cn(
            "font-bold font-title tracking-wide",
            "text-[clamp(3rem,10vw,6.25rem)] text-balance text-center text-secondary-foreground",
            "leading-[1.05]"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-12 max-w-lg text-center text-lg md:text-xl text-foreground leading-relaxed font-sans font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
