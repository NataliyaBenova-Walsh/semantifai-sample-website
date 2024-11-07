"use client";

import * as React from "react";
import { useRef, useEffect, useCallback } from "react";

import { cn } from "@/lib/utils";

import styles from "@/modules/common/components/03-element-ui/astral-card/astral-card.module.css";

type AstralCardContainerProps = {
  className?: string;
  childrenDepth?: 1 | 2 | 3 | 4 | 5;
} & React.HTMLAttributes<HTMLDivElement>;

const AstralCardContainer: React.FC<AstralCardContainerProps> = ({
  children,
  className,
  childrenDepth = 1, // Default to 1, representing immediate children
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Adjusting selector based on childrenDepth
    let selector;
    switch (childrenDepth) {
      case 5:
        selector = ":scope > * > * > * > * > *";
        break;
      case 4:
        selector = ":scope > * > * > * > *";
        break;
      case 3:
        selector = ":scope > * > * > *";
        break;
      case 2:
        selector = ":scope > * > *";
        break;
      default:
        selector = ":scope > *";
    }

    cardsRefs.current = Array.from(
      container.querySelectorAll(selector)
    ) as HTMLDivElement[];

    return () => {
      cardsRefs.current = [];
    };
  }, [childrenDepth]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cardsRefs.current.forEach((card) => {
      const rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(styles.cards, className)}
      {...props}
    >
      {children}
    </div>
  );
};
AstralCardContainer.displayName = "AstralCardContainer";

const AstralCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.card, className)} {...props} />
));
AstralCard.displayName = "AstralCard";

const AstralCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full h-full relative z-20 rounded-[inherit] bg-card",
      className
    )}
    {...props}
  />
));
AstralCardContent.displayName = "AstralCardContent";

export { AstralCardContainer, AstralCard, AstralCardContent };
