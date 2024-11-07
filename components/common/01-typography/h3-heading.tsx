import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const h3HeadingVariants = cva("scroll-m-20", {
  variants: {
    size: {
      default: "text-xl md:text-2xl",
      "2xs": "text-base",
      xs: "text-base md:text-lg",
      sm: "text-lg md:text-xl",
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

export interface H3HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h3HeadingVariants> {}

const H3Heading = React.forwardRef<HTMLHeadingElement, H3HeadingProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <h3
        className={cn(h3HeadingVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H3Heading.displayName = "H3Heading";

export { H3Heading, h3HeadingVariants };
