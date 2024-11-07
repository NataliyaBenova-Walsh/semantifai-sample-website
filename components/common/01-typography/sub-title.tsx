import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const subTitleVariants = cva(
  "scroll-m-32 font-syne text-[0.625rem] uppercase tracking-widest text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof subTitleVariants> {}

function SubTitle({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(subTitleVariants({ variant }), className)} {...props} />
  );
}

export { SubTitle, subTitleVariants };
