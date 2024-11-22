"use client";

import * as React from "react";
import Link from "next/link";
import {
  Header,
  HeaderNav,
  HeaderNavContainer,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavListWrap,
  HeaderNavList,
  HeaderNavMenuButton
} from '@/components/modules/01-page-header/components/header';
import { Logo } from "@/components/common/03-element-ui/logos/logo"; 


import { Button } from "@/components/common/03-element-ui/buttons/button";


export default function PageHeader() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);


  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };



  return (
    <Header >
      <HeaderNav >
        <Logo />
        <HeaderNavContainer isOpen={isNavOpen}>
          <HeaderNavListWrap>
            {" "}
            <HeaderNavList className="">
            
              <HeaderNavItem>
              
              <HeaderNavLink href="/products"> Products</HeaderNavLink>
                  
              </HeaderNavItem>
             
              <HeaderNavItem>
                <HeaderNavLink href="/about">About us</HeaderNavLink>
              </HeaderNavItem>
              <HeaderNavItem>
                <HeaderNavLink href="/contacts">Contacts</HeaderNavLink>
              </HeaderNavItem>
            </HeaderNavList>
          </HeaderNavListWrap>
          <div className="relative z-20 flex flex-row gap-2.5 items-center justify-center">
          
            <Button variant="gooeyLeftTransparent"  asChild>
              <Link href="/contacts"  >
                Get in Touch
              </Link>
            </Button>
          </div>
        </HeaderNavContainer>
        <HeaderNavMenuButton onClick={toggleNav} />
      </HeaderNav>
    </Header>
  );
}
