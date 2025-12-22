import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="w-full pt-32 pb-20 flex justify-center px-4">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1
          className={cn(
            "font-medium font-title tracking-tightest",
            "text-[clamp(3rem,10vw,6.25rem)] text-balance text-center",
            "leading-[1.05]"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-lg text-center text-lg md:text-xl text-white/60 leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
