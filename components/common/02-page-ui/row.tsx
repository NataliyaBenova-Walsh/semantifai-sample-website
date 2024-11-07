import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"; 

const rowVariants = cva("flex flex-row", {
  variants: {
    variant: {
      default: "",
    },
    layout: {
      default: "",
    },
    spacing: {
      default: "",
      xs: "gap-2.5",
      sm: "gap-5",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "default",
    spacing: "default",
    size: "default",
  },
});

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, variant, layout, spacing, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          rowVariants({ variant, layout, spacing, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Row.displayName = "Row";

export { Row, rowVariants };
