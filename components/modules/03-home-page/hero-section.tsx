import { H1Heading } from "@/components/common/01-typography/h1-heading";

import { Paragraph } from "@/components/common/01-typography/paragraph";
import {
  Section,
  SectionTitleWrap,
} from "@/components/common/02-page-ui/section";


import { Button } from "@/components/common/03-element-ui/buttons/button";



export default function HeroSection() {
  return (
    <Section className="relative bg-network4-bg bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <SectionTitleWrap variant="hero" className="relative z-10" >
      
      <H1Heading className="bg-gradient-to-r from-emerald-400 via-teal-400 to-zinc-400 text-transparent bg-clip-text">
      Turn your data into meaningful and actionable insights.
        </H1Heading>
        <Paragraph className="max-w-xl">
        Let AI handle the heavy lifting for your business—safely, transparently, and compliantly. 
        </Paragraph>
        <Button size='lg' variant='gooeyLeftTealTransparent' className="mt-5">Ask for more information</Button>
       
        
      </SectionTitleWrap>

     
      
    </Section>
  );
}
