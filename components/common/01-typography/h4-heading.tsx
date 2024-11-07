import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const h1HeadingVariants = cva("text-6xl font-semibold uppercase", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface H1HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h1HeadingVariants> {}

const H1Heading = React.forwardRef<HTMLHeadingElement, H1HeadingProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h1
        className={cn(h1HeadingVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H1Heading.displayName = "H1Heading";

export { H1Heading, h1HeadingVariants };
