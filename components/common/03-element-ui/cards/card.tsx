import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("relative z-20", {
  variants: {
    layout: {
      default: "flex flex-col",
    },
    spacing: {
      default: "gap-20",
    },
    size: {
      default: "w-full max-w-8xl p-20",
     
    },
    variant: {
      default: "bg-black/20 rounded-3xl",
    },
  },
  defaultVariants: {
    layout: "default",
    spacing: "default",
    size: "default",
    variant: "default",
  },
});

export interface TemplateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, TemplateProps>(
  ({ className, variant, layout, spacing, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          cardVariants({ layout, spacing, size, variant, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
