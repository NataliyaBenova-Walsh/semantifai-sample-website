import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; 

const containerVariants = cva("relative z-20", {
  variants: {
    layout: {
      default: "",
      gc2: "grid grid-cols-1 lg:grid-cols-2",
      gc3: "grid grid-cols-1 md:grid-cols-3",
      gc4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      gc5: "",
      gc6: "",
      gc12: "grid grid-cols-12",
    },
    spacing: {
      default: "",
      sm: "gap-5",
      md: "gap-10",
      lg: "gap-20",
    },
    variant: {
      default: "mx-auto w-full",
    },
    size: {
      default: "max-w-7xl",
      xs: "max-w-3xl",
      sm: "max-w-4xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
    },
  },
  defaultVariants: {
    layout: "default",
    spacing: "default",
    variant: "default",
    size: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, layout, spacing, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(
          containerVariants({ layout, spacing, variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
