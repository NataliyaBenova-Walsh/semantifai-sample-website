import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const h2HeadingVariants = cva("scroll-m-32", {
  variants: {
    size: {
      default: "text-2xl md:text-3xl",
      "2xs": "text-base md:text-lg",
      xs: "text-lg md:text-xl",
      sm: "text-xl md:text-2xl",
    },
    variant: {
      default: "font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface H2HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h2HeadingVariants> {}

const H2Heading = React.forwardRef<HTMLHeadingElement, H2HeadingProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <h2
        className={cn(h2HeadingVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H2Heading.displayName = "H2Heading";

export { H2Heading, h2HeadingVariants };
