import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const h1HeadingVariants = cva("scroll-m-32", {
  variants: {
    size: {
      default: "text-3xl sm:text-4xl md:text-5xl",
    },
    variant: {
      default: "font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface H1HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h1HeadingVariants> {}

const H1Heading = React.forwardRef<HTMLHeadingElement, H1HeadingProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <h1
        className={cn(h1HeadingVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H1Heading.displayName = "H1Heading";

export { H1Heading, h1HeadingVariants };
