"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";


export default function PageFooter() {
  return (
    <footer className="relative px-10 py-20">
      <div className="mx-auto relative z-20 flex flex-col gap-5 w-full max-w-8xl px-32 py-20 rounded-xl border">
        <h2 className="max-w-96 font-inter text-5xl font-medium">
          Let`s create something great together
        </h2>
        <span className="text-[0.625rem] font-montserrat uppercase tracking-widest text-muted-foreground">
          Sheer Force of Nature
        </span>
        <div className="mt-20 grid grid-cols-3 gap-10 items-center justify-between">
       
          <div className="mx-auto grid grid-cols-3">
            <Button variant="link">LinkedIn</Button>
            <Button variant="link">Dribble</Button>
            <Button variant="link">X</Button>
          </div>
          <p className="ml-auto text-[0.625rem] text-muted-foreground">
            © 2024 ZeroBS Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
