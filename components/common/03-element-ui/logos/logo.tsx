import Link from "next/link";
import LogoSemantifai from '@/public/images/logoSemantifai.png';
import Image from "next/image";

import { cn } from "@/lib/utils";

function Logo({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      href="/"
      className={cn(
        "mr-auto relative z-20 flex flex-row items-center gap-2.5 text-primary-foreground",
        className
      )}
      aria-label="Home"
      {...props}
    >
      <Image className="rounded-full"
        src={LogoSemantifai}
        alt="Logo Semantifai"
        width={60}
        height={60} />
      Semantifai
    </Link>
  );
}

export { Logo };
