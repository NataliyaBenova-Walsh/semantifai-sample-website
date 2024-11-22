import * as React from "react";

import { cn } from "@/lib/utils"; 

const Main = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn("relative  text-pretty  ", className)}
    {...props}
  />
));
Main.displayName = "Main";

export { Main };
