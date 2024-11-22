import Link from "next/link";
import LogoSemantifai from '@/public/images/logoSemantifai.png';
import Image from "next/image";

import { cn } from "@/lib/utils";

import LOGO7NOBG from '../../../../app/assets/LOGO7NOBG.png';


function Logo({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Link
      href="/"
      className={cn(
        "mr-auto relative z-20 flex flex-row items-center gap-2.5 text-lg ",
        className
      )}
      aria-label="Home"
      {...props}
    >
      <Image className="rounded-full"
        src={LOGO7NOBG}
        alt="Logo Semantifai"
        width={280}
        height={100} />
     
    </Link>
  );
}

export { Logo };
