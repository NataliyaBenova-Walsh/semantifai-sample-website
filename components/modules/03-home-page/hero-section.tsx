import { H1Heading } from "@/components/common/01-typography/h1-heading";

import { Paragraph } from "@/components/common/01-typography/paragraph";
import {
  Section,
  SectionTitleWrap,
} from "@/components/common/02-page-ui/section";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";



export default function HeroSection() {
  return (
    <Section className="relative bg-network4-bg bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      <SectionTitleWrap variant="hero" className="relative z-10" >
      
      <H1Heading>
        Unlock seamless access to your knowledge base with DocuChat.
        </H1Heading>
        <Paragraph className="max-w-xl">
        Simply ask, and get instant answers from your own documents. Say goodbye to tedious searches and hello to effortless information retrieval
        </Paragraph>
        <Button className="mt-5">Ask for more information</Button>
       
        
      </SectionTitleWrap>

     
      
    </Section>
  );
}
