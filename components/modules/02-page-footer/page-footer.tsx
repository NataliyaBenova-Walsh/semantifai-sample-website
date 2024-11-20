"use client";

import * as React from "react";
import { Button } from "@/components/common/03-element-ui/buttons/button";
import { H2Heading } from "@/components/common/01-typography/h2-heading";

import { Paragraph } from "@/components/common/01-typography/paragraph";

export default function PageFooter() {
  return (
    <footer className="relative px-10 py-20 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950">
      <div className="mx-auto relative z-20 flex flex-col gap-5 w-full max-w-8xl px-20 py-10 md:px-32 md:py-20 rounded-xl border">
        <H2Heading className="max-w-96 bg-gradient-to-r from-emerald-400 via-teal-400 to-zinc-400 text-transparent bg-clip-text">
          Let`s create something great together
        </H2Heading>
        <span className="text-[0.625rem] font-montserrat uppercase tracking-widest text-muted-foreground">
          Sheer Force of Big Data
        </span>
        <div className="mt-20 lg:grid lg:grid-cols-3 gap-10 items-center justify-center">
       
          <div className="mx-auto grid grid-cols-3">
            <Button variant="link">LinkedIn</Button>
            
          </div>
          <Button variant='gooeyLeftTeal' className="mt-5">Ask for more information</Button>
          <Paragraph className="ml-auto text-[0.625rem] text-muted-foreground text-center py-5">
            © 2024 Semantif.ai
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
