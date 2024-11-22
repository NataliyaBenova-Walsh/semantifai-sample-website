import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "fixed top-0 z-40 px-5 py-5 w-full  backdrop-blur-lg ",
        className
      )}
      {...props}
    />
  )
);
Header.displayName = "Header";

const HeaderNav = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "mx-auto relative flex flex-row gap-5 items-center justify-items-center w-full max-w-7xl before:absolute before:-bottom-5 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent",
      className
    )}
    {...props}
  />
));
HeaderNav.displayName = "HeaderNav";

const HeaderNavContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen: boolean }
>(({ className, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed left-0 inset-y-20 ml-auto w-full px-5 py-10 h-fit border-r bg-zinc-900 opacity-95 transition-transform ease-in-out duration-300 lg:static lg:flex lg:items-center lg:justify-between lg:w-auto lg:max-w-none lg:px-0 lg:py-0 lg:bg-transparent lg:border-r-0",
      {
        "transform -translate-x-full lg:transform-none": !isOpen,
        "transform translate-x-0": isOpen,
      },
      className
    )}
    {...props}
  />
));
HeaderNavContainer.displayName = "HeaderNavContainer";

const HeaderNavListWrap = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {}
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "lg:absolute lg:inset-0 flex flex-col items-center justify-center",
      className
    )}
    {...props}
  />
));
HeaderNavListWrap.displayName = "HeaderNavListWrap";

const HeaderNavList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "mb-10 mx-auto flex flex-col justify-center lg:mb-0 lg:flex-row lg:px-2.5 lg:border lg:rounded-full lg:border-primary",
      className
    )}
    {...props}
  />
));
HeaderNavList.displayName = "HeaderNavList";

const HeaderNavItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center hover:text-teal-200", className)} {...props} />
));
HeaderNavItem.displayName = "HeaderNavItem";

const HeaderNavLink = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn("flex px-5 py-2.5 text-md font-semibold ", className)}
    {...props}
  />
));
HeaderNavLink.displayName = "HeaderNavLink";

const HeaderNavMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLElement> & { onClick: () => void }
>(({ className, onClick, ...props }, ref) => (
  <Button
    ref={ref}
    size="icon"
    className={cn("ml-auto lg:hidden", className)}
    onClick={onClick}
    {...props}
  >
    <Menu className="size-4" />
    <span className="sr-only">Menu</span>
  </Button>
));
HeaderNavMenuButton.displayName = "HeaderNavMenuButton";

export {
  Header,
  HeaderNav,
  HeaderNavContainer,
  HeaderNavListWrap,
  HeaderNavList,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavMenuButton,
};
