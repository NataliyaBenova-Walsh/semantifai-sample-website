import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoType({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      href="/"
      className={cn(
        "relative z-20 text-lg font-cinzel font-normal leading-none uppercase",
        className
      )}
      aria-label="Home"
      {...props}
    >
      CraftGenie
    </Link>
  );
}

export { LogoType };
