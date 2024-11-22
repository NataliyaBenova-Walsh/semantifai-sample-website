import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    layout: {
      default: "w-full before:absolute before:-bottom-5 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-teal-200 before:to-transparent",
      centered: "grid place-items-center",
      canvas: "grid grid-cols-12",
    },
    spacing: {
      default: "px-5 md:px-10 py-10 md:py-20",
      "pt-0": "px-5 md:px-10 pb-10 md:pb-20",
      "pb-0": "px-5 md:px-10 pt-10 md:pt-20",
      "py-0": "px-5 md:px-10",
      "px-0": "",
    },
    variant: {
      default: "",
      secondary: "bg-secondary",
      dark: "text-background bg-foreground",
    },
  },
  defaultVariants: {
    layout: "default",
    spacing: "default",
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, layout, spacing, variant, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ layout, spacing, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

const sectionTitleWrapVariants = cva(
  "mx-auto relative z-20 flex flex-col gap-5 items-center max-w-5xl text-center",
  {
    variants: {
      variant: {
        default: "mt-12 p-10",
        hero: "mt-32 p-20",
      },
      layout: {
        default: "",
      },
      spacing: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "default",
      spacing: "default",
    },
  }
);

export interface SectionTitleWrapProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionTitleWrapVariants> {}

const SectionTitleWrap = React.forwardRef<
  HTMLDivElement,
  SectionTitleWrapProps
>(({ className, layout, spacing, variant, ...props }, ref) => {
  return (
    <div
      className={cn(
        sectionTitleWrapVariants({ variant, layout, spacing, className })
      )}
      ref={ref}
      {...props}
    />
  );
});
SectionTitleWrap.displayName = "SectionTitleWrap";

export { Section, sectionVariants, SectionTitleWrap, sectionTitleWrapVariants };
