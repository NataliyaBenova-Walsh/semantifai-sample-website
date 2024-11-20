import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const paragraphVariants = cva("!font-open-sans", {
  variants: {
    size: {
      default: "text-base",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    variant: {
      default: "",
      muted: "text-secondary/60",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <p
        className={cn(paragraphVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
