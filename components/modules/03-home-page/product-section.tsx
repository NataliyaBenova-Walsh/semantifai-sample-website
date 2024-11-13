import { H2Heading } from "@/components/common/01-typography/h2-heading";
import { H3Heading } from "@/components/common/01-typography/h3-heading";
import {
    Section, SectionTitleWrap
  } from "@/components/common/02-page-ui/section";
 
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Paragraph } from "@/components/common/01-typography/paragraph";

  const data = [
    {
        title: 'Data Protection First',
        desc: 'You are empowered with tools that offer complete transparency and control over data exposure to AI, as well as tracking its usage. Our robust security measures ensure that your sensitive information remains confidential and secure at all times.',
    },
    {
        title:'Tailored Approach',
        desc: 'We take a personalised approach to every project, working closely with you to identify your specific needs. Our dedicated team collaborates with you to craft customised AI strategies that guarantee optimal results and drive meaningful impact.',
    },
    {
        title:'Battle-Proven Products',
    desc: 'Our AI solutions are tested in real-world scenarios, showcasing proven success across diverse industries. With a robust track record of implementations for both institutions and businesses, our products consistently achieve impactful results.',
    }
  ]
export default function ProductSection() {

    return (
        <>
        <Section className="pt-20 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 ">
        
            <SectionTitleWrap className="realtive z-10 ">
            <H2Heading className="border border-teal-300 rounded-full px-10 py-5">Why Semantif.ai?</H2Heading>
            <div className="text-start flex flex-col gap-10 mt-10">
                {data.map((item, index)=> (
                    <div key={index} className="border-l-2 border-teal-300 pl-5">
                        <H3Heading>{item.title}</H3Heading>
                        <Paragraph>{item.desc}</Paragraph>
                    </div>
                ))}
            </div>
            </SectionTitleWrap>
            
        </Section>

        <Section className="pt-20 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 w-full before:absolute before:-bottom-5 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-teal-600 before:to-transparent">
            

<SectionTitleWrap className="realtive z-10">
<H2Heading className="my-10">Why Semantif.ai?</H2Heading>
<div className="text-start flex  gap-5 ">
    {data.map((item, index)=> (
        <Card key={index} className="border-2 border-teal-300 pl-5 bg-transparent w-full sm:w-1/2 lg:w-1/3">
            <CardHeader>
                <H3Heading className="text-teal-200 z-10 ">{item.title}</H3Heading>
            </CardHeader>
            <CardContent>
                <Paragraph>{item.desc}</Paragraph>
            </CardContent>
            
        </Card>
    ))}
</div>
</SectionTitleWrap>
</Section>
</>
    )
}