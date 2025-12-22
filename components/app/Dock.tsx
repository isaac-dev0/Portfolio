"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationConfig } from "@/config/navigation";

interface DockProps {
  items: NavigationConfig[];
}

export function Dock({ items }: DockProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] flex justify-center p-4 pointer-events-none">
      <nav
        className={cn(
          "flex max-w-[768px] items-center justify-center rounded-full px-4 md:px-6 md:py-4 py-2 transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "bg-background/20 backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-75 border border-white/10 shadow-xl"
            : "bg-transparent border border-transparent"
        )}
      >
        <div className="flex w-full items-center justify-around md:w-auto md:justify-center md:gap-4 gap-1">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.label}
                href={item.url}
                className={cn(
                  buttonVariants({ variant: "nav", size: "sm" }),
                  "relative flex items-center justify-center rounded-full px-3 py-2 transition-all duration-200",
                  "text-white/60 hover:text-white",
                  isActive &&
                    "bg-white/10 text-white shadow-sm ring-1 ring-white/20"
                )}
              >
                <span className="text-sm font-medium tracking-tight md:text-base md:text-xl">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
