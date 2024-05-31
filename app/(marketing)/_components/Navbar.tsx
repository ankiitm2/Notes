"use client";
import useScrollTop from "@/hooks/use-top-scroll";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const Scroll = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 w-full fixed top-0 p-6 flex items-center bg-background",
        Scroll && "shadow-sm border-b"
      )}
    >
      Navbar
    </div>
  );
};
