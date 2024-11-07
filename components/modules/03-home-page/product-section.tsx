import { H2Heading } from "@/components/common/01-typography/h2-heading";
import { Card } from "@/components/common/03-element-ui/cards/card";
import {
    Section,
  } from "@/components/common/02-page-ui/section";
 
  import Image from 'next/image';
  import { Paragraph } from "@/components/common/01-typography/paragraph";
  import { Check } from "lucide-react";
export default function ProductSection() {

    return (
        <Section className="bg-network1-bg">
            <H2Heading>Why DocuChat?</H2Heading>
            <Card >
                <div className="flex gap-2">
                    <div className="w-1/2 flex flex-col gap-8 justify-center">
                        <Paragraph><span className="text-indigo-500 text-xl font-bold">Instant Access to Information:</span> Retrieve information quickly by conversing with your documents using natural language.</Paragraph>
                        <Paragraph><span className="text-indigo-500 text-xl font-bold">Enhanced Productivity:</span> Eliminate time spent manually searching through documents.
                        </Paragraph>
                        <Paragraph><span className="text-indigo-500 text-xl font-bold">Secure and Customizable:</span> Choose between public document integration on your website or a private chatbot for internal documents.
                        </Paragraph>
                    </div>
                    <div className="w-1/2 rounded-md">
                    
                    </div>
                </div>
            </Card>
        </Section>

    )
}