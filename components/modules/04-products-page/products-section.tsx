import { H2Heading } from "@/components/common/01-typography/h2-heading";
import { H1Heading } from "@/components/common/01-typography/h1-heading";
import { Card, CardContent, CardFooter, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import {Section, SectionTitleWrap} from "@/components/common/02-page-ui/section";
 import { Paragraph } from "@/components/common/01-typography/paragraph";
 import { Button } from "@/components/common/03-element-ui/buttons/button";

const data = [
    {
        product: 'Informa',
        title: 'Internal or External Chatbot',
        desc: 'AI chatbot that instantly retrieves information from your documents. Seamless answer questions in natural language'
    },
    {
        product: 'EditGenie',
        title: 'Document Manipulation Chatbot',
        desc: 'Designed to simplify document editing. Whether you need to update contracts or personalize documents, it lets you modify files using simple conversational commands. No advanced software needed.'
    },
    {
        product: 'DataSift',
        title: 'Automated Data Extraction',
        desc: 'Transform document handling with DataSift, extracting essential data from contracts, invoices, and receipts. Fast, accurate, and efficient.'
    }

]
export default function ProductsSection() {
    return (
        <Section className="bg-gradient-to-bl from-zinc-950 via-zinc-800 to-zinc-950 ">
            <SectionTitleWrap >
            <H1Heading className=" text-center">Our products</H1Heading>
            <div className="flex flex-col gap-5 my-10 w-full md:w-2/3 mx-auto">
                {data.map((item, index)=> (
                    <Card key={index} className="bg-transparent lg:m-5 lg:p-5 border-2 border-teal-700 ">
                        <CardHeader>
                            <CardTitle>
                            <H1Heading className="bg-gradient-to-r from-emerald-400 via-teal-400 to-zinc-400 text-transparent bg-clip-text">{item.product}</H1Heading>
                            </CardTitle>
                            <CardDescription>
                            <H2Heading className="pb-5">{item.title}</H2Heading>
                            </CardDescription>
                        </CardHeader>
                            <CardContent>
                            <Paragraph>{item.desc}</Paragraph>
                            </CardContent>
                            <CardFooter>
                            <Button variant="gooeyLeftTeal" size='lg' className="mx-auto" >Learn more</Button>
                            </CardFooter>
                        
                        
                            
                            
                        
                    </Card>
                ))}
            </div>
            </SectionTitleWrap>
        </Section>
    );
  }