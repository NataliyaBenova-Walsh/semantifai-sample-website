import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const columnVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "",
    },
    layout: {
      default: "",
      left: "items-start"
    },
    spacing: {
      default: "",
      xs: "gap-2.5",
      sm: "gap-5",
    },
    size: {
      default: "",
      sm: "max-w-96",
    },
  },
  defaultVariants: {
    variant: "default",
    layout: "default",
    spacing: "default",
    size: "default",
  },
});

export interface ColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof columnVariants> {}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, variant, layout, spacing, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          columnVariants({ variant, layout, spacing, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Column.displayName = "Column";

export { Column, columnVariants };
