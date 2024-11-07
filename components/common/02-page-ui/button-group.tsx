import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonGroupVariants = cva("grid", {
  variants: {
    layout: {
      default: "grid-cols-1 auto-rows-fr md:grid-cols-2",
    },
    spacing: {
      default: "gap-2.5",
    },
    variant: {
      default: "",
      "mt-sm": "mt-5",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    layout: "default",
    spacing: "default",
    variant: "default",
    size: "default",
  },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, layout, spacing, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          buttonGroupVariants({ layout, spacing, variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup, buttonGroupVariants };
