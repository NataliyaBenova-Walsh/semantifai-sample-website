import { H2Heading } from "@/components/common/01-typography/h2-heading";
import { Card } from "@/components/common/03-element-ui/cards/card";
import {
    Section, SectionTitleWrap
  } from "@/components/common/02-page-ui/section";
 
 
  import { Paragraph } from "@/components/common/01-typography/paragraph";
 
export default function CompanySection() {

    return (
        <Section className="">
            
            <SectionTitleWrap >
            <H2Heading className="my-10">Abous us</H2Heading>
            <Paragraph>
            We understand that harnessing AI to optimise your processes can feel overwhelming. While the potential for value creation is immense, navigating the various implications is essential. At Semantif.AI, we simplify this journey. Our AI solutions transform complexity into clarity, empowering you to make informed decisions with confidence and peace of mind.
            </Paragraph>
            <Paragraph>
            Explore our portfolio and case studies to discover how we can help your organisation thrive. Ready to take the next step? Contact us today for a free consultation on how AI can elevate your business to new heights.
            </Paragraph>
            </SectionTitleWrap>
        </Section>

    )
}