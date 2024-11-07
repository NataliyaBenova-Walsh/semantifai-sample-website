import * as React from "react";

import { cn } from "@/lib/utils"; 

const Main = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn("relative overflow-clip text-pretty before:absolute before:inset-0 before:z-10 before:backdrop-blur-3xl before:pointer-events-none ", className)}
    {...props}
  />
));
Main.displayName = "Main";

export { Main };
