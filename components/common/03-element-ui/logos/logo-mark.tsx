import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

function LogoMark({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      href="/"
      className={cn(
        "relative z-20 size-6 grid place-items-center rounded-full border border-foreground",
        className
      )}
      aria-label="Home"
      {...props}
    >
      <div className="absolute size-5 rounded-full border border-foreground" />
      <div className="absolute size-4 rounded-full border border-foreground" />
      <div className="absolute size-3 rounded-full border border-foreground" />
      <div className="absolute size-2 rounded-full border border-foreground" />
    </Link>
  );
}

export { LogoMark };
